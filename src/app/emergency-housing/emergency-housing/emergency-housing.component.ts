import { Component, OnInit } from '@angular/core';
import {
  InMemoryFlatDataAccessor,
  InMemoryFlatItem, PageRequest, PaginatedDataSource,
  Sort,
  TableColumnModel, TableDataSource,
  TableSourceRequestModel
} from '@parma/gp-uikit-components';

const EmergencyThemes = () => ({
  props: {
    tableButtons: 'tableButtons',
    tableTheme: 'tableTheme',
    whiteButtonDisabled: 'whiteButtonDisabled',
    whiteButton: 'whiteButton',
    whiteButtonBig: 'whiteButtonBig',
    search: 'search'
  },
  styleUrls: ['../../tableStyles.scss'],
});

const gpInputSearchProps = () => ({
  showClearButton: false,
  valueChange(e) {
    return e;
  },
});

const tableColumns: TableColumnModel[] = [
  {
    field: `field0`,
    headerTitle: `Наименование программы`,
    sortable: true,
    resizable: true,
  },
  {
    field: `field1`,
    headerTitle: `Тип программы`,
    sortable: true,
    resizable: true,
  },
  {
    field: `field2`,
    headerTitle: `Статус заявки`,
    sortable: true,
    resizable: true,
  },
  {
    field: `field3`,
    headerTitle: `Дата начала`,
    sortable: true,
    resizable: true,
  },
  {
    field: `field4`,
    headerTitle: `Дата окончания`,
    sortable: true,
    resizable: true,
  },
];

const getColumns = (countColumns: number): string[] => {
  const columns: string[] = [];
  for (let i = 0; i < countColumns; i++) {
    columns.push(`field${i.toString()}`);
  }
  return columns;
};


const createRow = (rowIndex: number, columns: string[]): { [key: string]: string } => {
  const row = {} as { [key: string]: string };

  for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
    const column = columns[columnIndex];
    row[column] = ` Адресная программа: ${rowIndex}-${columnIndex}`;
  }
  return row;
};

// Данные для таблицы
const createRows = (countRows: number, countColumns: number) => {
  const rows: InMemoryFlatItem<string, { [key: string]: string }>[] = [];
  const columns: string[] = getColumns(countColumns);

  for (let rowIndex = 0; rowIndex < countRows; rowIndex++) {
    rows.push({ key: rowIndex.toString(), value: createRow(rowIndex, columns) });
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
  createRows(38, 5),
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

const tableDataSource = new TableDataSource(
  new PaginatedDataSource(dataAccessor, initialSort, initialQuery),
  dataSourceRequestTransformFn,
  items => items.map(item => item.value),
);

const uiTableDataSource = () => ({
  source: tableDataSource,
  columns: tableColumns,
  settings: {
    holdLeftCol:  { min: 0 },
    holdRightCol: { min: 0 },
    holdTopRow: { min: 0 },
    holdBottomRow: { min: 0 },
  },
});



@Component({
  selector: 'app-emergency-housing',
  templateUrl: './emergency-housing.component.html',
  styleUrls: ['./emergency-housing.component.scss', '../../../tableStyles.scss']
})
export class EmergencyHousingComponent {
 title = 'Аварийные дома';
  icon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n' +
    '    <path fill="#FFF" fill-rule="evenodd" d="M18 11h-5V6h-2v5H6v2h5v5h2v-5h5v-2zm-4-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4v4a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-4H6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4V6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4z"/>\n' +
    '</svg>';

  editIcon = '<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\'> <path fill=\'#8DA1B4\' fill-rule=\'evenodd\' d=\'M6 18l.002-4 9-9 4 4-9 9H6zm6.355-8.938l-5.353 5.352L7.001 17h2.587l5.353-5.352-2.586-2.586zm3.293 1.879L17.588 9l-2.586-2.586-1.94 1.94 2.586 2.587z\'/> </svg>';

  deleteIcon = '<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\'> <path fill=\'#8DA1B4\' fill-rule=\'evenodd\' d=\'M9 8v9a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8H9zm1-1a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2h3v1h-1v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2V8H7V7h3zm1 0h3a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1zm-1 4h1v4h-1v-4zm2 0h1v4h-1v-4zm2 0h1v4h-1v-4z\'/> </svg>';

  filterIcon = '<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\'> <path fill=\'#8DA1B4\' fill-rule=\'evenodd\' d=\'M10 15.625c0 .347.17.672.453.87l1.875 1.313A1.063 1.063 0 0 0 14 16.937v-5.934l4.188-4.19c.669-.668.195-1.813-.751-1.813H6.563c-.945 0-1.42 1.145-.751 1.814L10 11.003v4.622zM17.437 6c.055 0 .083.068.044.107L13 10.588v6.349c0 .05-.058.08-.098.051l-1.875-1.312a.062.062 0 0 1-.027-.051v-5.037L6.519 6.107C6.48 6.068 6.509 6 6.563 6h10.874z\'/> </svg>';

  exportIcon = '<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\'> <path fill=\'#8DA1B4\' fill-rule=\'evenodd\' d=\'M19 15v3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3h1v3h12v-3h1zm-6-6h1.586L12 6.414 9.414 9H11v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V9zm-3 1H7l5-5 5 5h-3v5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-5z\'/> </svg>';
  source = uiTableDataSource();
  settings = {
    holdLeftCol: 0,
    holdRightCol: 0,
    holdTopRow: 0,
    holdBottomRow: 0,
  };
  EmergencyThemes = EmergencyThemes();
  gpInputSearchProps = gpInputSearchProps();

}
