import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/timer';
import {TokenResponseInterface} from './token.response.interface';
import {LocalStorageService} from 'angular-2-local-storage';


@Injectable()
export class TokenService {
    private STORAGE_TOKEN_KEY = 'STORAGE_TOKEN_KEY';

    static get currentSec() {
        return new Date().getTime() / 1000;
    }

    constructor(private http: Http, private localStorageService: LocalStorageService) {
    }

    public getAuthorizationToken(login: string, password: string): Observable<TokenResponseInterface> {
        const headers = new Headers();
        headers.set('Content-Type', 'application/x-www-form-urlencoded');
        headers.set('Authorization', 'Basic ' + btoa(login + ':' + password));
        const options = new RequestOptions({headers: headers});
        return this.http.post(
            environment.oauth.tokenUrl,
            'grant_type=client_credentials',
            options)
            .map(data => data.json())
            .map(token => {
                token.expire_time = token.expires_in + TokenService.currentSec;
                return token;
            })
            .do(token => this.saveToStorage(token));
    }

    public saveToStorage(token: TokenResponseInterface) {
        return this.localStorageService.set(this.STORAGE_TOKEN_KEY, token);
    }

    public saveExpireToStorage(expire_in: number) {
        const token = this.getFromStorage();
        token.expires_in = expire_in;
        this.saveToStorage(token);
    }

    public getFromStorage(): TokenResponseInterface {
        return <TokenResponseInterface>this.localStorageService.get(this.STORAGE_TOKEN_KEY);
    }

    public getTokenString(token: TokenResponseInterface): string {
        return token.token_type + ' ' + token.access_token;
    }

    public getTokenLife(token: TokenResponseInterface): number {
        const live = token.expire_time - TokenService.currentSec;
        return live > 0 ? live : 0;
    }
}
