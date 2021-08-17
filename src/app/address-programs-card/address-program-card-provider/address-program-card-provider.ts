import {
  InMemoryFlatDataAccessor,
  InMemoryFlatItem,
  PageRequest, PaginatedDataSource,
  Sort,
  TableDataSource,
  TableSourceRequestModel
} from '@parma/gp-uikit-components';


const tableColumns = [
  {
    field: `stageName`,
    headerTitle: `Наименование этапа`,
    sortable: true,
    resizable: true,
  },
  {
    field: `stageDateStart`,
    headerTitle: `Дата начала этапа`,
    sortable: true,
    resizable: true,
  },
  {
    field: `stageDateEnd`,
    headerTitle: `Дата окончания этапа`,
    sortable: true,
    resizable: true,
  },
  {
    field: `stageIsEnd`,
    headerTitle: `Этап завершен`,
    sortable: true,
    resizable: true,
  }
];

const tableData = [];

for (let i = 1; i < 12; i++) {
  tableData.push({
    stageName: `Этап № ${i}`,
    stageDateStart: `2020-01-01`,
    stageDateEnd: `2020-12-01`,
    stageIsEnd: 'Нет',
  }, );
}

// Создаем строки
const createRows = (data: any[]) => {
  const rows: InMemoryFlatItem<string, { [key: string]: string }>[] = [];

  for (let rowIndex = 0; rowIndex < data.length; rowIndex++) {
    rows.push({ key: rowIndex.toString(), value: data[rowIndex] });
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
  ({ value }, { value: queryValue }) => {
    for (const key in value) {
      if (value[key].includes(queryValue)) {
        return true;
      }
    }
    return !value;
  },
);

const initialSort: Sort<FlatItem> = { property: 'key', order: 'asc' };
const initialQuery = { value: '' };

const dataSourceRequestTransformFn = (request: TableSourceRequestModel) => {
  return {
    query: initialQuery,
    sort: initialSort,
    fetchPage: request as PageRequest,
  };
};



export class AddressProgramCardProvider {

  static getTableColumns(): any {
    return tableColumns;
  }
  static getTableData(): any {
   return new TableDataSource(
      new PaginatedDataSource(dataAccessor, initialSort, initialQuery),
      dataSourceRequestTransformFn,
      items => items.map(item => item.value),
    );
  }
}
