import {Component, Inject} from '@angular/core';
import {Icons} from '../../commons/icons/icons';
import {AddressProgramProvider} from '../address-program-provider/address-program-provider';
import {
  TableSource,
  TableSourceRequestModel,
  TableSourceResponseModel
} from '@parma/gp-uikit-components';
import {Observable} from 'rxjs';

const AddressThemes = () => ({
  props: {
    tableButtons: 'tableButtons',
    tableTheme: 'tableTheme',
    whiteButtonDisabled: 'whiteButtonDisabled',
    whiteButton: 'whiteButton'
  },
  styleUrls: ['../../tableStyles.scss'],
});

const uiTableDataSource = () => ({
  source: AddressProgramProvider.getTableData(),
  columns: AddressProgramProvider.getColumns(),
  settings: {
    holdLeftCol: {min: 0},
    holdRightCol: {min: 0},
    holdTopRow: {min: 0},
    holdBottomRow: {min: 0},
  },
});

@Component({
  selector: 'app-address-program',
  templateUrl: './address-program.component.html',
  styleUrls: ['./address-program.component.scss', '../../../tableStyles.scss']
})

export class AddressProgramComponent<T extends object> implements TableSource<T> {
  title = 'Адресные программы';
  addIcon = Icons.addNormal;
  editIcon = Icons.edit;
  deleteIcon = Icons.deleteIcon;
  refreshIcon = Icons.refreshIcon;
  source = uiTableDataSource();
  settings = {
    holdLeftCol: 0,
    holdRightCol: 0,
    holdTopRow: 0,
    holdBottomRow: 0,
  };
  AddressThemes = AddressThemes();
  private readonly tableSource: TableSource<T>;

  getData(request: TableSourceRequestModel<T>): Observable<TableSourceResponseModel<any>> {
    return this.tableSource.getData(request);
  }
}
