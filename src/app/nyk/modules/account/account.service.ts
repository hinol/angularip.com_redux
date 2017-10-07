import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {AccountInterface, AccountResponseInterface} from './account.interface';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AccountService {

    constructor(private api: ApiService) {

    }

    public getList(): Observable<AccountInterface[]> {
        return this.api.get('accounts')
            .map((response: AccountResponseInterface) => response._embedded.accounts);
    }

    getAccountCode(account: AccountInterface) {
        return account.regNo + '-' + account.accountNo;
    }
}