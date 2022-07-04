import {Component, Inject} from '@angular/core';
import {Icons} from '../../commons/icons/icons';
import {
  defaultTreeExpansionState,
  InMemoryTreeDataAccessor,
  InMemoryTreeItem,
  InMemoryTreeQuery, MockFilterableTableSource,
  PageRequest,
  PaginatedDataSource,
  Sort,
  TableColumnTypeEnum,
  TableColumnWithDataModel,
  TableDataSource,
  TableSource,
  TableSourceRequestModel,
  TreeExpansionModel
} from '@parma/gp-uikit-components';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';
import {DataService} from "../address-program-services/data.service";
import {AddressProgramsData, AddressProgramsDataItems} from "./address-programs.interface";


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
  selector: 'app-address-program',
  templateUrl: './address-program.component.html',
  styleUrls: ['./address-program.component.scss', '../../../tableStyles.scss'],
  providers: [DataService]
})

export class AddressProgramComponent<T extends object> {
  title = 'Адресные программы';
  addIcon = Icons.addNormal;
  editIcon = Icons.edit;
  refreshIcon = Icons.refreshIcon;
  disabledButton = true;
  source;

  showModal = false;
  columns: TableColumnWithDataModel[] = [
    {
      field: `addressName`,
      headerTitle: `Наименование программы`,
      type: TableColumnTypeEnum.String,
      filterable: true,
      sortable: true
    },
    {
      field: `addressType`,
      headerTitle: `Тип программы`,
      sortable: true
    },
    {
      field: `addressStatus`,
      headerTitle: `Статус заявки`,
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
  data: AddressProgramsDataItems;
  dataAccessor;
  itemsCount;
  paginatedDataSource;
  rowData;
  modalData;
  expansionModel;

  constructor(private  dataService: DataService) {
  }
  getItemKeyFn = ({ key }: InMemoryTreeItem<string>) => key;
  getItemLevel$ = (item: InMemoryTreeItem<string>) => of((item && item.level) || 0);
  getItemParentKeyFn = (item: InMemoryTreeItem<string>) => item.parentKey;
  getIsItemExpandable$ = (item: InMemoryTreeItem<string>) => of(item && item.level < 2);
  getIsItemExpanded$ = (item: InMemoryTreeItem<string>) =>
      this.paginatedDataSource.page$.pipe(map(({ elements }) => elements.some(x => x.parentKey === item.key)));

  initialSort: Sort<any> = { property: '', order: null };
  initialQuery = { value: '', expansionChange: defaultTreeExpansionState };
  ngOnInit(): void {
   this.data = this.dataService.getData();
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
