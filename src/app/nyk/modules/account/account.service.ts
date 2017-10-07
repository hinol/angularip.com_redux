import {Injectable} from '@angular/core';
import {StateCollection} from '../../redux/reducers/index';
import {Store} from '@ngrx/store';
import {ApiService} from '../../services/api/api.service';

@Injectable()
export class AccountService {

    constructor(private api: ApiService, private store: Store<StateCollection>) {

    }

    public getList() {
        return this.api.get('accounts');
    }
}