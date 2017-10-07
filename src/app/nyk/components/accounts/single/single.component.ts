import {Component, Input, OnInit} from '@angular/core';
import {AccountInterface} from '../../../modules/account/account.interface';

@Component({
    selector: 'nyk-account-single',
    templateUrl: './single.component.html',
    styleUrls: ['./single.component.scss']
})
export class NykAccountSingleComponent implements OnInit {

    @Input() account: AccountInterface;
    constructor() {
    }

    ngOnInit() {
    }

}
