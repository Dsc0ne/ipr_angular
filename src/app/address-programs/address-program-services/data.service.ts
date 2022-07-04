import {AddressProgramsData, AddressProgramsDataItems} from "../address-program/address-programs.interface";

export class DataService{

    private data: AddressProgramsDataItems = [];


    getData(): AddressProgramsDataItems {
        for (let i =0; i < 100; i++) {
            this.data.push({
                name:"",
                addressName: `Наименование адресной программы № ${i + 1}`,
                addressType: `Тип адресной программы № ${i + 1}`,
                addressStatus: (i % 2 == 0)? 'Исполнено' : 'Не исполнено',
                addressDateStart: '2020-01-01',
                addressDateEnd: '2020-01-31',
                key: i,
                level: 0,
                parentKey: '0',
                children: [
                    {
                        name: '',
                        key: i + 11,
                        level: 1,
                        parentKey: i,
                        children: []
                    }
                ]
            })
        }
        console.log(this.data)
        return this.data;
    }
}
