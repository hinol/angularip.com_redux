import {Action} from '@ngrx/store';
import {TokenResponseInterface} from '../../services/token/token.response.interface';

export const SET_TOKEN = '[Token] Set';
export const SET_EXPIRE = '[Token] Set expire';
export const GET_TOKEN = '[Token] Get expire';
export const SELECT = '[Token] Select';


export class SetToken implements Action {
    readonly type = SET_TOKEN;

    constructor(public payload: TokenResponseInterface) {
    }
}

export class SetExpire implements Action {
    readonly type = SET_EXPIRE;

    constructor(public payload: number) {
    }
}

export class GetToken implements Action {
    readonly type = GET_TOKEN;

    constructor(public payload: { login: string, password: string }) {
    }
}

export class SelectAction implements Action {
    readonly type = SELECT;

    constructor(public payload: { login: string, password: string }) {
    }
}

export type Actions
    = SetToken | SetExpire | GetToken | SelectAction;
