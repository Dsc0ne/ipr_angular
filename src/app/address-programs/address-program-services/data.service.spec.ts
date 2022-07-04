import {DataService} from "./data.service";
import {async, TestBed} from "@angular/core/testing";
import {AddressProgramComponent} from "../address-program/address-program.component";

// // Группировка наборов тестов
// describe('AddressProgramComponent', () => {
//     let component: AddressProgramComponent<any>;
//     let dataService: DataService;
//
//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             providers: [AddressProgramComponent, DataService]
//         }).compileComponents();
//         component = TestBed.inject(AddressProgramComponent);
//         dataService = TestBed.inject(DataService);
//     }));
//
//     it('should welcome logged in user after Angular calls ngOnInit', () => {
//         expect(component.data).toBeUndefined();
//     });
//
// });

describe('DataService', () => {
    let service: DataService;

    beforeEach(() => {
        service = new DataService();
    });

    it('get() should return 1', () => {
        expect(service.getData).toContain('Исполнено');
    });
});
