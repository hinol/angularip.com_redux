import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from './reducers/token';
import {Observable} from 'rxjs/Observable';
import * as fromRoot from './reducers';
import {TokenResponseInterface} from './services/token/token.response.interface';

@Component({
    selector: 'nyk-root',
    templateUrl: './nyk.component.html',
    styleUrls: ['./nyk.scss']
})
export class NykComponent {

    tokenState: Observable<State>;
    tokenExpire$: Observable<number>;
    token$: Observable<TokenResponseInterface>;
    showLoginForm$: Observable<boolean>;

    constructor(private store: Store<fromRoot.StateCollection>) {
        this.tokenState = this.store.select('token');
        this.token$ = this.store.select(fromRoot.getToken);
        this.tokenExpire$ = this.store.select(fromRoot.getTokenExpire);
        this.showLoginForm$ = this.store.select(fromRoot.getTokenShowLoginForm);
    }
}
