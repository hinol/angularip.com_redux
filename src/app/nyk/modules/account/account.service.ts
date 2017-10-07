import {Injectable} from '@angular/core';
import {StateCollection} from '../../redux/reducers/index';
import {Store} from '@ngrx/store';
import {ApiService} from '../../services/api/api.service';
import {AccountInterface, AccountResponseInterface} from './account.interface';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AccountService {

    constructor(private api: ApiService, private store: Store<StateCollection>) {

    }

    public getList(): Observable<AccountInterface[]> {
        return this.api.get('accounts')
            .map((response: AccountResponseInterface) => response._embedded.accounts);
    }
}