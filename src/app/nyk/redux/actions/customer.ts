import {Action} from '@ngrx/store';
import {AccountInterface} from '../../modules/account/account.interface';
import {CustomerInterface} from '../../modules/customer/customer.interface';

export const CUSTOMER_GET_LIST = '[Customer] Get list';
export const CUSTOMER_SET_LIST = '[Customer] Set list';


export class SetCustomerList implements Action {
    readonly type = CUSTOMER_SET_LIST;

    constructor(public payload: CustomerInterface[]) {
    }
}

export class GetCustomerList implements Action {
    readonly type = CUSTOMER_GET_LIST;
}

export type Actions
    = SetCustomerList | GetCustomerList;

