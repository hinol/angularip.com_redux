import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/timer';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {TokenResponseInterface} from './token.response.interface';

@Injectable()
export class TokenService {


    private _accessToken: BehaviorSubject<TokenResponseInterface> = new BehaviorSubject(null);
    public accessToken: Observable<TokenResponseInterface> = this._accessToken.asObservable();


    constructor(private http: Http) {
    }


    public getAuthorizationToken(): Observable<TokenResponseInterface> {
        const headers = new Headers();
        headers.set('Content-Type', 'application/x-www-form-urlencoded');
        headers.set('Authorization', 'Basic ' + btoa(environment.oauth.clientId + ':' + environment.oauth.clientSecret));
        const options = new RequestOptions({headers: headers});

        return this.http.post(
            environment.oauth.tokenUrl,
            'grant_type=client_credentials',
            options)
            .map(data => data.json())
            .do(data => this._accessToken.next(data));
    }
}
