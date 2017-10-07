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
    loading$: Observable<boolean>;
    accountList$: Observable<AccountInterface[]>;

    constructor(private store: Store<StateCollection>) {
        this.accountList$ = this.store.select(AccountState.getList);
        this.loading$ = this.store.select(AccountState.getLoading);
    }

    ngOnInit() {
        this.store.dispatch(new GetAcountList());
    }

}
