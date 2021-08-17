import { Injectable } from '@angular/core';
import { Actions, ofActionDispatched, Store } from '@ngxs/store';
import { TableSource } from '@parma/gp-uikit-components';
import { TableSourceWithLoadingHandling } from 'src/app/shared/modules/loading/table-source-with-loading-handling/table-source-with-loading-handling';
import { Loading } from '../../store/loading/loading.actions';

@Injectable({
  providedIn: 'root',
})
export class TableSourceWithLoadingHandlingFactory {
  constructor(private store: Store) {}

  create<T extends object>(tableSource: TableSource<T>, loadingKey: string) {
    return new TableSourceWithLoadingHandling(tableSource, state => {
      this.store.dispatch(new Loading.SetLoading({ key: loadingKey, state }));
    });
  }
}
