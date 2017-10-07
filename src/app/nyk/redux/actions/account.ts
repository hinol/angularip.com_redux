import {Action} from '@ngrx/store';
import {AccountInterface} from '../../modules/account/account.interface';

export const ACCOUNT_GET_LIST = '[Account] Get list';
export const ACCOUNT_SET_LIST = '[Account] Set list';
export const ACCOUNT_SELECT = '[Account] Select';
export const ACCOUNT_GET = '[Account] Get';


export class GetAccount implements Action {
    readonly type = ACCOUNT_GET;

    constructor(public payload: AccountInterface) {
    }
}

export class SelectAccount implements Action {
    readonly type = ACCOUNT_SELECT;

    constructor(public payload: AccountInterface) {
    }
}

export class SetAccountList implements Action {
    readonly type = ACCOUNT_SET_LIST;

    constructor(public payload: AccountInterface[]) {
    }
}

export class GetAccountList implements Action {
    readonly type = ACCOUNT_GET_LIST;
}

export type Actions
    = SetAccountList | GetAccountList | SelectAccount | GetAccount;

