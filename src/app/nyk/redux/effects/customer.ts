import {Injectable} from '@angular/core';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as customer from '../actions/customer';
import {CustomerService} from '../../modules/customer/customer.service';
import {Router} from '@angular/router';
import {NYK_ROUTES_SLASH} from '../../services/nyk-routes';


@Injectable()
export class CustomerEffects {

    constructor(private actions$: Actions,
                private router: Router,
                private customerService: CustomerService) {
    }

    @Effect()
    getAccountList$: Observable<Action> = this.actions$
        .ofType(customer.CUSTOMER_GET_LIST)
        .debounceTime(150)
        .map(toPayload)
        .switchMap(() => {
            this.router.navigate([NYK_ROUTES_SLASH.CUSTOMER_LIST]).then();
            return this.customerService.getList()
                .map(response => new customer.SetCustomerList(response))
                .catch(() => Observable.of(new customer.SetCustomerList(null)));
        });

}
