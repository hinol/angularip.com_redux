import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/timer';
import {TokenResponseInterface} from './token.response.interface';

@Injectable()
export class TokenService {

    constructor(private http: Http) {
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
            .map(data => data.json());
    }
}
