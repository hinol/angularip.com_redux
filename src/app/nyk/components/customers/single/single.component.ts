import {Component, Input} from '@angular/core';
import {CustomerInterface} from '../../../modules/customer/customer.interface';

@Component({
    selector: 'nyk-customer-single',
    templateUrl: './single.component.html',
    styleUrls: ['./single.component.scss']
})
export class NykCustomerSingleComponent {
    @Input() customer: CustomerInterface;
    constructor() {
    }
}
