import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from './reducers/token.reducer';
import {Observable} from 'rxjs/Observable';
import * as fromRoot from './reducers';
import {TokenResponseInterface} from './services/token/token.response.interface';
import {LoginDialogsService} from './components/dialog/login/login.dialog.service';

@Component({
    selector: 'nyk-root',
    templateUrl: './nyk.component.html',
    styleUrls: ['./nyk.scss']
})
export class NykComponent {


    tokenState: Observable<State>;
    tokenExpire$: Observable<number>;
    token$: Observable<TokenResponseInterface>;
    showSidenav$: Observable<boolean>;


    constructor(private store: Store<fromRoot.State>,
                private loginDialogService: LoginDialogsService) {
        this.tokenState = this.store.select('token');
        this.token$ = this.store.select(fromRoot.getToken);
        this.tokenExpire$ = this.store.select(fromRoot.getTokenExpire);
        this.showSidenav$ = this.store.select(fromRoot.getShowSidenav);
    }

    openLogin(): void {
        this.loginDialogService.login().subscribe(
            success => {
                console.error('success', success);
            }
        );
    }

}
