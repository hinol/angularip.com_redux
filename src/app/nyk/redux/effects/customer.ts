import {Injectable} from '@angular/core';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as token from '../actions/token';
import * as customer from '../actions/customer';
import {CustomerService} from '../../modules/customer/customer.service';


@Injectable()
export class CustomerEffects {

    constructor(private actions$: Actions,
                private customerService: CustomerService) {
    }

    @Effect()
    getAccountList$: Observable<Action> = this.actions$
        .ofType(customer.CUSTOMER_GET_LIST)
        .map(toPayload)
        .switchMap(() => {
            return this.customerService.getList()
                .map(response => new customer.SetCustomerList(response))
                .catch(() => Observable.of(new customer.SetCustomerList(null)));
        });

    @Effect()
    setToken$: Observable<Action> = this.actions$
        .ofType(token.SET_TOKEN)
        .map(toPayload)
        .filter(payload => !!payload)
        .map(payload => new customer.GetCustomerList());


}
