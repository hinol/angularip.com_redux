import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {StateCollection, TokenState} from '../../redux/reducers/index';
import {Store} from '@ngrx/store';
import {TokenService} from '../token/token.service';

@Injectable()
export class ApiService {
    constructor(private http: Http,
                private store: Store<StateCollection>,
                private tokenService: TokenService,) {
        this.token$ = this.store.select(TokenState.getToken);
    }

    public get(path, data) {

    }
}