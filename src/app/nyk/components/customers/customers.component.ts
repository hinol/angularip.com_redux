import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CustomerInterface} from '../../modules/customer/customer.interface';
import {Store} from '@ngrx/store';
import {CustomerState, StateCollection} from '../../redux/reducers/index';

@Component({
    selector: 'nyk-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss']
})
export class NykCustomersComponent {


    loading$: Observable<boolean>;
    customerList$: Observable<CustomerInterface[]>;

    constructor(private store: Store<StateCollection>) {
        this.customerList$ = this.store.select(CustomerState.getList);
        this.loading$ = this.store.select(CustomerState.getLoading);
    }
}
