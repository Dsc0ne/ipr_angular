import { Component} from '@angular/core';
import {
  defaultTreeExpansionState, InMemoryTreeDataAccessor, InMemoryTreeItem, InMemoryTreeQuery, PageRequest, PaginatedDataSource,
  Sort, TableColumnTypeEnum, TableColumnWithDataModel, TableDataSource, TableSource,
  TableSourceRequestModel, TreeExpansionModel
} from '@parma/gp-uikit-components';
import {Icons} from '../../commons/icons/icons';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';

const AddressThemes = () => ({
  props: {
    tableButtons: 'tableButtons',
    tableTheme: 'tableTheme',
    whiteButtonDisabled: 'whiteButtonDisabled',
    whiteButton: 'whiteButton'
  },
  styleUrls: ['../../../tableStyles.scss'],
});


@Component({
  selector: 'app-emergency-housing',
  templateUrl: './emergency-housing.component.html',
  styleUrls: ['./emergency-housing.component.scss', '../../../tableStyles.scss']
})
export class EmergencyHousingComponent<T extends object> {
  title = 'Авариные дома';
  addIcon = Icons.addNormal;
  editIcon = Icons.edit;
  refreshIcon = Icons.refreshIcon;
  disabledButton = true;
  source;

  showModal = false;
  columns: TableColumnWithDataModel[] = [
    {
      field: `addressName`,
      headerTitle: `Адрес аварийного дома`,
      type: TableColumnTypeEnum.String,
      filterable: true,
      sortable: true
    },
    {
      field: `addressType`,
      headerTitle: `Тип расселения`,
      sortable: true
    },
    {
      field: `addressStatus`,
      headerTitle: `Статус`,
      sortable: true
    },
    {
      field: `addressDateStart`,
      headerTitle: `Дата начала`,
      sortable: true
    },
    {
      field: `addressDateEnd`,
      headerTitle: `Дата окончания`,
      sortable: true
    },
  ];

  currentPage = 0
  pageSize = 25
  settings = {
    holdLeftCol: 0,
    holdRightCol: 0,
    holdTopRow: 0,
    holdBottomRow: 0,
  };

  AddressThemes = AddressThemes();
  tableDataSource: TableSource<T>;
  sortFn = (sort: Sort<InMemoryTreeItem<string>>) => (
      item1: InMemoryTreeItem<string>,
      item2: InMemoryTreeItem<string>,
  ): number => {
    if (!Object.keys(sort).length) {
      return 0;
    }

    let value1: any = item1[sort.property];
    let value2: any = item2[sort.property];

    if (typeof value1 === 'string' && typeof value2 === 'string') {
      value1 = value1.toLowerCase();
      value2 = value2.toLowerCase();

      if (value1 < value2) {
        return sort.order === 'desc' ? 1 : -1;
      }
      if (value1 > value2) {
        return sort.order === 'desc' ? -1 : 1;
      }

      return 0;
    }

    return 0;
  };
  data = [];
  dataAccessor;
  itemsCount;
  paginatedDataSource;
  rowData;
  modalData;
  expansionModel;
  getItemKeyFn = ({ key }: InMemoryTreeItem<string>) => key;
  getItemLevel$ = (item: InMemoryTreeItem<string>) => of((item && item.level) || 0);
  getItemParentKeyFn = (item: InMemoryTreeItem<string>) => item.parentKey;
  getIsItemExpandable$ = (item: InMemoryTreeItem<string>) => of(item && item.level < 2);
  getIsItemExpanded$ = (item: InMemoryTreeItem<string>) =>
      this.paginatedDataSource.page$.pipe(map(({ elements }) => elements.some(x => x.parentKey === item.key)));

  initialSort: Sort<any> = { property: '', order: null };
  initialQuery = { value: '', expansionChange: defaultTreeExpansionState };
  ngOnInit(): void {
    this.initData();
    this.initDataSource();
  }

  dataSourceRequestTransformFn = (request: TableSourceRequestModel) => {
    return {
      query: { value: '', expansionChange: this.expansionModel.getChanged, shouldResetPage: false },
      sort: request.sort
          ? {
            property: request.sort[0].field,
            order: request.sort[0].order,
          }
          : this.initialSort,
      fetchPage: request as PageRequest,
    };
  };

  initData() {
    for (let i =0; i < 100; i++) {
      this.data.push({
        name:"",
        addressName: `Аварийный дом по адресу ${i + 1}`,
        addressType: `Тип расселения ${i + 1}`,
        addressStatus: (i % 2 == 0)? 'Расселено' : 'Не расселено',
        addressDateStart: '2020-01-01',
        addressDateEnd: '2020-01-31',
        key: i,
        level: 0,
        parentKey: '0',
        children: [
          {
            name: '',
            key: i + 11,
            level: 1,
            parentKey: i,
            children: []
          }
        ]
      })
    }
  }

  initDataSource() {
    let pageData;
    let currentPage = this.currentPage + 1;
    this.itemsCount = this.data.length;
    pageData = this.paginate(this.data, this.pageSize, currentPage)
    this.dataAccessor = new InMemoryTreeDataAccessor<InMemoryTreeItem<string>, InMemoryTreeQuery<string>, string>(
        pageData,
        undefined,
        this.sortFn,
    );
    this.paginatedDataSource = new PaginatedDataSource(this.dataAccessor, this.initialSort, this.initialQuery);
    this.expansionModel = new TreeExpansionModel<InMemoryTreeItem<string>, InMemoryTreeQuery<string>, string>(
        this.paginatedDataSource,
        (query, expansionChange) => {
          return {
            ...query,
            shouldResetPage: false,
            expansionChange,
          };
        },
    );
    this.tableDataSource = new TableDataSource(this.paginatedDataSource, this.dataSourceRequestTransformFn, items => items);
  }

  paginate(array, pageSize, pageNumber) {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  }

  cellClick(e) {
    e.getRowData().then( res => this.rowData = res);
    const tableRows = document.getElementsByClassName('grid__scrollable')[0];
    Array.from(tableRows.getElementsByClassName("grid-cell")).forEach(function(item) {
      let index = item.getAttribute('ng-reflect-row-index');
      if (parseInt(index) - 1  === e.rowIndex) {
        item.classList.add('selected')
      } else {
        item.classList.remove('selected')
      }
    });
    this.disabledButton = false;
  }
  editRow(e){
    this.openModal()
  }
  getCurrentPage(e) {
    this.currentPage = e
    this.initDataSource();

  }
  getPageSize(e) {
    this.pageSize = e;
    this.initDataSource();
  }

  openModal() {
    this.showModal = true;
  }
  closeModal (e) {
    this.showModal = e;
  }

  addData(newRecord) {
    let find = this.data.find(name => name.addressName === newRecord.oldName);

    let newItem = {
      name:"",
      addressName: newRecord.addressName,
      addressType: newRecord.addressType,
      addressStatus: newRecord.addressStatus,
      addressDateStart: newRecord.addressDateStart,
      addressDateEnd: newRecord.addressDateEnd,
      key: this.data.length +1,
      level: 0,
      parentKey: '0',
      children: []
    }
    this.data.splice(this.data.indexOf(find), 1, newItem)
    this.showModal = false;
    this.initDataSource()
  }

}
