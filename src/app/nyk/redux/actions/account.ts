import {Action} from '@ngrx/store';
import {AccountInterface} from '../../modules/account/account.interface';

export const ACCOUNT_GET_LIST = '[Account] Get list';
export const ACCOUNT_SET_LIST = '[Account] Set list';


export class SetAcountList implements Action {
    readonly type = ACCOUNT_SET_LIST;

    constructor(public payload: AccountInterface[]) {
    }
}

export class GetAcountList implements Action {
    readonly type = ACCOUNT_GET_LIST;
}

export type Actions
    = SetAcountList | GetAcountList;

