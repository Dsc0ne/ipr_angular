import {
  InMemoryFlatDataAccessor,
  InMemoryFlatItem,
  PageRequest,
  PaginatedDataSource,
  Sort,
  TableDataSource, TableSource,
  TableSourceRequestModel, TableSourceResponseModel
} from '@parma/gp-uikit-components';
import {Observable} from 'rxjs';

const tableColumns = [
  {
    field: `addressName`,
    headerTitle: `Наименование программы`,
    sortable: true,
    resizable: true,
  },
  {
    field: `addressType`,
    headerTitle: `Тип программы`,
    sortable: true,
    resizable: true,
  },
  {
    field: `addressStatus`,
    headerTitle: `Статус заявки`,
    sortable: true,
    resizable: true,
  },
  {
    field: `addressDateStart`,
    headerTitle: `Дата начала`,
    sortable: true,
    resizable: true,
  },
  {
    field: `addressDateEnd`,
    headerTitle: `Дата окончания`,
    sortable: true,
    resizable: true,
  },
];

const tableData = [];

for (let i = 1; i < 60; i++) {
  tableData.push({
      addressName: `Адресная программа № ${i}`,
      addressType: `Тип ${i}`,
      addressStatus: `Статус ${i}`,
      addressDateStart: '2020-01-01',
      addressDateEnd: '2020-12-12'
    },
  );
}

// Создаем строки
const createRows = (data: any[]) => {
  const rows: InMemoryFlatItem<string, { [key: string]: string }>[] = [];
  for (let rowIndex = 0; rowIndex < data.length; rowIndex++) {
    rows.push({key: rowIndex.toString(), value: data[rowIndex]});
  }
  return rows;
};

interface FlatItemValue {
  [key: string]: string;
}

interface FlatItem {
  key: string;
  value: FlatItemValue;
}

const dataAccessor = new InMemoryFlatDataAccessor<FlatItem, { value: string }, string, FlatItemValue>(
  createRows(tableData),
  ({value}, {value: queryValue}) => {
    for (const key in value) {
      if (value[key].includes(queryValue)) {
        return true;
      }
    }
    return !value;
  },
);

const initialSort: Sort<FlatItem> = {property: 'key', order: 'asc'};
const initialQuery = {value: ''};

const dataSourceRequestTransformFn = (request: TableSourceRequestModel) => {
  return {
    query: initialQuery,
    sort: initialSort,
    fetchPage: request as PageRequest,
  };
};


export class AddressProgramProvider<T extends object> implements TableSource<T> {
  constructor() {
  }

  static getColumns(): any {
    return tableColumns;
  }

  static getTableData(): any {
    return new TableDataSource(
      new PaginatedDataSource(dataAccessor, initialSort, initialQuery),
      dataSourceRequestTransformFn,
      items => items.map(item => item.value),
    );
  }

  getData(request: TableSourceRequestModel<T>): Observable<TableSourceResponseModel<T>> {
    return this.getDataForTable(request);
  }
  private getDataForTable(request: TableSourceRequestModel<T>): any {
      return {
        count: tableData.length,
        items: new TableDataSource(
          new PaginatedDataSource(dataAccessor, initialSort, initialQuery),
          dataSourceRequestTransformFn,
          items => items.map(item => item.value),
        ),
      };
  }
}
