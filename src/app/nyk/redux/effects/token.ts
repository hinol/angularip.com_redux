import {Injectable} from '@angular/core';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as token from '../actions/token';
import {TokenService} from '../../services/token/token.service';

import 'rxjs/add/operator/last';
import {TokenResponseInterface} from '../../services/token/token.response.interface';


@Injectable()
export class TokenEffects {

    constructor(private actions$: Actions,
                private tokenService: TokenService) {
    }

    @Effect()
    checkTokenStorage$: Observable<Action> = this.actions$
        .ofType(token.CHECK_TOKEN_STORAGE)
        .map(toPayload)
        .switchMap(() => {
            const savedToken = this.tokenService.getFromStorage();
            return Observable.of(savedToken)
                .do(v => console.log(savedToken))
                .map((response: TokenResponseInterface) => new token.SetToken(response))
                .catch(() => Observable.of(new token.SetToken(null)));
            ;
        });


    @Effect()
    getToken$: Observable<Action> = this.actions$
        .ofType(token.GET_TOKEN)
        .map(toPayload)
        .switchMap(loginData => {

            return this.tokenService.getAuthorizationToken(loginData.login, loginData.password)
                .map(response => new token.SetToken(response))
                .catch(() => Observable.of(new token.SetToken(null)));
        });

    @Effect()
    setToken$: Observable<Action> = this.actions$
        .ofType(token.SET_TOKEN)
        .map(toPayload)
        .map(payload => new token.SetExpire(payload.expires_in));

    @Effect()
    setExpire$: Observable<Action> = this.actions$
        .ofType(token.SET_EXPIRE)
        .map(toPayload)
        .switchMap(expire => {
            if (expire > 0) {
                this.tokenService.saveExpireToStorage(expire - 1)
                return Observable.timer(1000)
                    .map(v => new token.SetExpire(expire - 1));
            } else {
                return Observable.empty();
            }
        });

}
