import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {StateCollection, TokenState} from '../../redux/reducers/index';
import {Store} from '@ngrx/store';
import {TokenService} from '../token/token.service';
import {TokenResponseInterface} from '../token/token.response.interface';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../../environments/environment';

@Injectable()
export class ApiService {
    token$: Observable<TokenResponseInterface>;

    constructor(private http: Http,
                private store: Store<StateCollection>,
                private tokenService: TokenService) {
        this.token$ = this.store.select(TokenState.getToken);
    }

    public get(path: string, data: any = null) {

        const fullPath = environment.apiBaseUrl + path;


        return this.token$
            .map(v => this.tokenService.getTokenString(v))
            .switchMap(tokenString => {
                    const headers = new Headers();
                    headers.set('X-Client-Version', '1.0.0');
                    headers.set('Accept', 'application/hal+json');
                    headers.set('Authorization', tokenString);
                    const options = new RequestOptions({headers: headers});
                    return this.http.get(fullPath, options)
                        .map(response => response.json());
                }
            );
    }
}