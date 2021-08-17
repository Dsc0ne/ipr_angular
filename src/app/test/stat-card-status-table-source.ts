import {TableSource, TableSourceRequestModel, TableSourceResponseModel} from '@parma/gp-uikit-components';
import {Observable} from 'rxjs';
import {DpuLoadLogService} from '../../../../../../../api/services/dpu-load-log.service';
import {filter, map, pluck, shareReplay} from 'rxjs/operators';
import {getPageAndSizeByOffsetAndLimit} from 'src/app/shared/functions/get-page-and-size-by-offset-and-limit/get-page-and-size-by-offset-and-limit';
import {StatCardLoadErrorInfo} from 'src/app/api/models';

export class StatCardStatusTableSource implements TableSource<StatCardLoadErrorInfo> {
  private count$: Observable<number>;

  constructor(private dpuLoadLogService: DpuLoadLogService, private cardId: string, private date: string) {
  }

  getData(
    request: TableSourceRequestModel<StatCardLoadErrorInfo>,
  ): Observable<TableSourceResponseModel<StatCardLoadErrorInfo>> {
    if (!request.limit) {
      return this.getDataForCount();
    }

    return this.getDataForItems(request);
  }

  private getDataForCount(): Observable<TableSourceResponseModel<StatCardLoadErrorInfo>> {
    if (!this.count$) {
      this.count$ = this.getDataForItems({
        offset: 0,
        limit: 0,
      }).pipe(pluck('count'), shareReplay({bufferSize: 1, refCount: true}));
    }

    return this.count$.pipe(
      map(count => ({
        count,
        items: [],
      })),
    );
  }

  private getDataForItems(
    request: TableSourceRequestModel<StatCardLoadErrorInfo>,
  ): Observable<TableSourceResponseModel<StatCardLoadErrorInfo>> {
    const pageRequest = getPageAndSizeByOffsetAndLimit(request.offset, request.limit);

    return this.dpuLoadLogService
      // .apiDpuLoadLogGetDpuLoadErrorsPost({
      //   body: {
      //     paging: {
      //       pageNumber: pageRequest.page + 1,
      //       pageSize: pageRequest.pageSize || 25,
      //     },
      //     filters: {
      //       cardId: this.cardId,
      //       date: this.date,
      //     },
      //   },
      // })
      .pipe(
        filter(resp => !!resp.content),
        map(resp => ({
          count: resp.content.total,
          items: resp.content.items.slice(pageRequest.needSkipStart, -pageRequest.needSkipEnd || void 0),
        })),
      );
  }
}
