export interface AddressProgramsData {
    name: string;
    addressName: string;
    addressType: string;
    addressStatus: string;
    addressDateStart: string;
    addressDateEnd: string;
    key: number;
    level: number;
    parentKey: string;
    children: Array<AddressProgramsChildrenItems>;

}

export interface AddressProgramsDataItems extends Array<AddressProgramsData> {
}

export interface AddressProgramsChildrenItems {
    name: string;
    key: number;
    level: number;
    parentKey: number;
    children: []
}
