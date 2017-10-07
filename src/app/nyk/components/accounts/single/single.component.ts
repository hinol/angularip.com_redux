import {Component, Input} from '@angular/core';
import {AccountInterface} from '../../../modules/account/account.interface';
import {StateCollection} from '../../../redux/reducers/index';
import {Store} from '@ngrx/store';
import {GetAccount, SelectAccount} from '../../../redux/actions/account';

@Component({
    selector: 'nyk-account-single',
    templateUrl: './single.component.html',
    styleUrls: ['./single.component.scss']
})
export class NykAccountSingleComponent  {

    @Input() account: AccountInterface;
    constructor(private store: Store<StateCollection>) {
    }

    select() {
        this.store.dispatch(new GetAccount(this.account));
    }

}
