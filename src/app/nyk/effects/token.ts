import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import {Injectable} from '@angular/core';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import * as token from '../actions/token';
import {TokenService} from '../services/token/token.service';


@Injectable()
export class TokenEffects {

    constructor(private actions$: Actions, private tokenService: TokenService) {
    }

    @Effect()
    getToken$: Observable<Action> = this.actions$
        .ofType(token.GET_TOKEN)
        .map(toPayload)
        .switchMap(loginData => {
            return this.tokenService.getAuthorizationToken(loginData.login, loginData.password)
                .map(response => new token.SetToken(response))
                .catch(() => of(new token.SetToken(null)));
        });

}
