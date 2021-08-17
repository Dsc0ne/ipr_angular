import {Component} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {ThemeEnum} from '@parma/gp-uikit-components';
import {Icons} from '../../commons/icons/icons';
import {AddressProgramCardProvider} from '../address-program-card-provider/address-program-card-provider';

const control1 = new FormControl({ value: '', disabled: false }, Validators.required);
const selectItems = [];
const numberOfListItems = 500;
const gpDefaultCalendarProps = () => ({
  formControl: (values: { nullable: boolean; disabled: boolean }) => {
    const control = new FormControl(values && values.nullable ? null : new Date(), Validators.required);
    if (values && values.disabled) {
      control.disable();
    }
    return control;
  },
  label: 'Дата начала',
  showValidationMessage: false,
  inRow: false,
});

for (let i = 0; i < numberOfListItems; i++) {
  selectItems.push({
    name: `item ${i + 1}`,
    value: i,
  });
}

const addressProgramCardThemes = () => ({
  props: {
    tableButtons: 'tableButtonsTransparent',
    tableTheme: 'tableTheme'
  },
  styleUrls: ['../../tableStyles.scss'],
});


const uiTableDataSource = () => ({
  source: AddressProgramCardProvider.getTableData(),
  columns: AddressProgramCardProvider.getTableColumns(),
  settings: {
    holdLeftCol:  { min: 0 },
    holdRightCol: { min: 0 },
    holdTopRow: { min: 0 },
    holdBottomRow: { min: 0 },
  },
});

@Component({
  selector: 'app-address-program-card',
  templateUrl: './address-program-card.component.html',
  styleUrls: ['./address-program-card.component.scss', '../../../tableStyles.scss']
})


export class AddressProgramCardComponent {
  title = 'Адресные программы';
  control = control1;
  type = 'text';
  selectSource = [
    {name: 'Муниципальная', value: 0},
    {name: 'Национальный проект', value: 1},
    {name: 'Региональная', value: 0}
  ];
  dateControl = gpDefaultCalendarProps();
  icon = Icons.add;
  source = uiTableDataSource();
  settings = {
    holdLeftCol: 0,
    holdRightCol: 0,
    holdTopRow: 0,
    holdBottomRow: 0,
  };
  columns = AddressProgramCardProvider.getTableColumns();
  themeEnum = ThemeEnum;

  addressProgramCardThemes = addressProgramCardThemes();
}
