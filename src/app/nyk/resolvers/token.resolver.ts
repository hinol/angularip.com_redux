import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {TokenService} from '../services/token/token.service';
import {TokenResponseInterface} from '../services/token/token.response.interface';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class TokenResolver implements Resolve<any> {
    constructor(private tokenService: TokenService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<TokenResponseInterface> {
        return this.tokenService.getAuthorizationToken();
    }
}