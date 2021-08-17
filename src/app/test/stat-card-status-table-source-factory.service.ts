import { Injectable } from '@angular/core';
import { TableSource } from '@parma/gp-uikit-components';
import { DpuLoadLogService } from '../../../../../../api/services';
import { StatCardStatusTableSource } from './impl/stat-card-status-table-source';
import { StatCardLoadErrorInfo } from '../../../../../../api/models/stat-card-load-error-info';
import { TableSourceWithLoadingHandlingFactory } from '../../../../../../common/services/table-source-with-loading-handling-factory';

@Injectable({
  providedIn: 'root',
})
export class StatCardStatusTableSourceFactoryService {
  constructor(
    private dpuLoadLogService: DpuLoadLogService,
    private tableSourceWithLoadingHandlingFactory: TableSourceWithLoadingHandlingFactory,
  ) {}

  createSource(cardId: string, date: string): TableSource<StatCardLoadErrorInfo> {
    return this.createSourceWithLoadingHandling(cardId, date);
  }

  private createSourceWithLoadingHandling(cardId: string, date: string): TableSource<StatCardLoadErrorInfo> {
    const tableSource = this.createTableSource(cardId, date);
    return this.tableSourceWithLoadingHandlingFactory.create(tableSource, 'stat-card-status-table-source-loading');
  }

  createTableSource(cardId: string, date: string): TableSource<StatCardLoadErrorInfo> {
    return new StatCardStatusTableSource(this.dpuLoadLogService, cardId, date);
  }
}
