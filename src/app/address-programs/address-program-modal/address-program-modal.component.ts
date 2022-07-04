import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-address-program-modal',
    templateUrl: './address-program-modal.component.html',
    styleUrls: ['./address-program-modal.component.scss', '../../../tableStyles.scss']
})

export class AddressProgramModalComponent {
    @Input() modalBody;
    @Input() name;
    @Output() onClose= new EventEmitter<boolean>();
    @Output() onSave = new EventEmitter();
    myGroup: FormGroup
    _modalData;
    oldName;
    @Input()
    set modalData(data) {
        this._modalData = data;
        this.changeModal(this._modalData)
    }
    get modalData() { return this._modalData; }
    constructor() {
        this._createForm()
    }
    private _createForm() {
        this.myGroup = new FormGroup({
            addressName: new FormControl(null),
            addressType: new FormControl(null),
            addressStatus: new FormControl(null),
            addressDateStart: new FormControl(null),
            addressDateEnd: new FormControl(null),
        })

    }
    changeModal(data) {
        this.oldName = data.addressName;
        if(data) {
            this.myGroup.setValue({
                addressName: data.addressName,
                addressType: data.addressType,
                addressStatus: data.addressStatus,
                addressDateStart: data.addressDateStart,
                addressDateEnd: data.addressDateStart
            })
        }
    }
    onModalClose(e) {
     this.onClose.emit(false);
    }
    onModalSave() {
        let addressName = this.myGroup.get('addressName').value;
        let addressType = this.myGroup.get('addressType').value;
        let addressStatus = this.myGroup.get('addressStatus').value;
        let addressDateStart = this.myGroup.get('addressDateStart').value;
        let addressDateEnd = this.myGroup.get('addressDateEnd').value;
        this.onSave.emit({
            name:"",
            addressName: addressName,
            addressType: addressType,
            addressStatus: addressStatus,
            addressDateStart: addressDateStart,
            addressDateEnd: addressDateEnd,
            oldName: this.oldName
        })
    }
}
