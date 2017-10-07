import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {TokenResponseInterface} from './services/token/token.response.interface';
import {StateCollection, TokenState} from './redux/reducers/index';
import {CheckTokenStorage} from './redux/actions/token';
import {NYK_ROUTES_SLASH} from './services/nyk-routes';
import {GetCustomerList} from './redux/actions/customer';
import {GetAccountList} from './redux/actions/account';

@Component({
    selector: 'nyk-root',
    templateUrl: './nyk.component.html',
    styleUrls: ['./nyk.scss']
})
export class NykComponent {
    routes = NYK_ROUTES_SLASH;
    tokenExpire$: Observable<number>;
    token$: Observable<TokenResponseInterface>;
    showLoginForm$: Observable<boolean>;
    actions = {
        CUSTOMER_GET_LIST: new GetCustomerList(),
        ACCOUNT_GET_LIST: new GetAccountList(),
    };

    constructor(public store: Store<StateCollection>) {
        this.token$ = this.store.select(TokenState.getToken);
        this.tokenExpire$ = this.store.select(TokenState.getTokenExpire);
        this.showLoginForm$ = this.store.select(TokenState.showLoginForm);
        this.store.dispatch(new CheckTokenStorage(null));
    }

}
