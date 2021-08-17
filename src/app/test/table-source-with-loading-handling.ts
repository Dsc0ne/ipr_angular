import { TableSource, TableSourceRequestModel, TableSourceResponseModel } from '@parma/gp-uikit-components';
import { Observable } from 'rxjs';
import { handleLoading } from '../../../rxjs-operators/handle-loading';

export class TableSourceWithLoadingHandling<T extends object> implements TableSource<T> {
  private loadingsCount = 0;

  constructor(private readonly tableSource: TableSource<T>, private loadingCallback: (loading: boolean) => any) {}

  getData(request: TableSourceRequestModel<T>): Observable<TableSourceResponseModel<T>> {
    return this.tableSource.getData(request).pipe(handleLoading(loading => this.toggleLoading(loading)));
  }

  private toggleLoading(loading: boolean): void {
    if (loading) {
      this.loadingsCount++;
    } else {
      this.loadingsCount--;
    }

    if (this.loadingsCount === 0 || this.loadingsCount === 1) {
      this.loadingCallback(!!this.loadingsCount);
    }
  }
}
