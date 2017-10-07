import {Injectable} from '@angular/core';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as account from '../actions/account';
import {AccountService} from '../../modules/account/account.service';
import {Router} from '@angular/router';
import {NYK_ROUTES_SLASH} from '../../services/nyk-routes';


@Injectable()
export class AccountEffects {

    constructor(private actions$: Actions,
                private router: Router,
                private accountService: AccountService) {
    }

    @Effect()
    getAccountList$: Observable<Action> = this.actions$
        .ofType(account.ACCOUNT_GET_LIST)
        .debounceTime(150)
        .map(toPayload)
        .switchMap(() => {
            this.router.navigate([NYK_ROUTES_SLASH.ACCOUNT_LIST]).then();
            return this.accountService.getList()
                .map(response => new account.SetAccountList(response))
                .catch(() => Observable.of(new account.SetAccountList(null)));
        });

    @Effect()
    selectAccount$: Observable<Action> = this.actions$
        .ofType(account.ACCOUNT_GET)
        .map(toPayload)
        .map(payload => {
            this.router.navigate([NYK_ROUTES_SLASH.ACCOUNT_SINGLE, {accountCode: this.accountService.getAccountCode(payload)}]).then();
            return new account.SelectAccount(payload);
        });
}
