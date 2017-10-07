import {Component, OnInit} from '@angular/core';
import {AccountState, StateCollection} from '../../redux/reducers/index';
import {Store} from '@ngrx/store';
import {AccountInterface} from '../../modules/account/account.interface';
import {Observable} from 'rxjs/Observable';
import {GetAcountList} from '../../redux/actions/account';

@Component({
    selector: 'nyk-accounts',
    templateUrl: './accounts.component.html',
    styleUrls: ['./accounts.component.scss']
})
export class NykAccountsComponent implements OnInit {
    accountList$: Observable<AccountInterface>;

    constructor(private store: Store<StateCollection>) {
        this.accountList$ = this.store.select(AccountState.getList);
    }

    ngOnInit() {
        this.store.dispatch(new GetAcountList());
    }

}
