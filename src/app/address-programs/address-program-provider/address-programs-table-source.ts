import {
  InMemoryFlatItem, PageRequest, Sort,
  TableSource,
  TableSourceRequestModel,
  TableSourceResponseModel
} from '@parma/gp-uikit-components';
import {Observable} from 'rxjs';

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

const initialSort: Sort<FlatItem> = {property: 'key', order: 'asc'};
const initialQuery = {value: ''};

export default class AddressProgramsTableSource implements TableSource<any> {

  constructor() {}

  getData(request: TableSourceRequestModel<any>): Observable<TableSourceResponseModel<any>> {

    return this.getDataForItems(request);
  }

  private getDataForItems(
    request: TableSourceRequestModel<any>
  ): any {
    return {
      query: initialQuery,
      sort: initialSort,
      fetchPage: request as PageRequest,
    };
  }
}

