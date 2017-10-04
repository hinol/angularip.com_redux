import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from './reducers/token';
import {Observable} from 'rxjs/Observable';
import * as fromRoot from './reducers';
import {TokenResponseInterface} from './services/token/token.response.interface';
import {LoginDialogsService} from './components/dialog/login/login.dialog.service';

@Component({
    selector: 'nyk-root',
    templateUrl: './nyk.component.html',
    styleUrls: ['./nyk.scss']
})
export class NykComponent implements OnInit {

    showSidenavExpire$: Observable<number>;


    tokenState: Observable<State>;
    tokenExpire$: Observable<number>;
    token$: Observable<TokenResponseInterface>;
    showSidenav$: Observable<boolean>;
    getTokenShowSidenavExpire$: Observable<boolean>;


    constructor(private store: Store<fromRoot.State>,
                private loginDialogService: LoginDialogsService) {
        this.tokenState = this.store.select('token');
        this.token$ = this.store.select(fromRoot.getToken);
        this.tokenExpire$ = this.store.select(fromRoot.getTokenExpire);
    }

    ngOnInit(): void {
        this.tokenExpire$.subscribe(
            v => {
                if (v <= 0) {
                    this.loginDialogService.login().subscribe();
                }
            }
        )

    }

}
