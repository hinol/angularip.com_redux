import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {StateCollection} from '../../redux/reducers/index';
import {Store} from '@ngrx/store';

@Injectable()
export class AccountService {

    constructor(private http: Http, private store: Store<StateCollection>) {

    }

    public getList(){
        this.http
    }
}