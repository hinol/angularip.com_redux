import * as  account from '../actions/account';
import {AccountInterface} from '../../modules/account/account.interface';

export interface State {
    list: AccountInterface[];
    loading: boolean;
    activeAccount: AccountInterface;
}

const initialState: State = {
    list: null,
    loading: false,
    activeAccount: null,
};

export function reducer(state = initialState, action: account.Actions): State {
    switch (action.type) {
        case account.ACCOUNT_GET_LIST: {
            return {
                ...state,
                list: null,
                loading: true
            };
        }
        case account.ACCOUNT_GET: {
            return {
                ...state,
            };
        }

        case account.ACCOUNT_SELECT: {
            return {
                ...state,
                activeAccount: action.payload,
                loading: false
            };
        }
        case account.ACCOUNT_SET_LIST: {
            return {
                ...state,
                list: action.payload,
                loading: false
            };
        }

        default: {
            return state;
        }
    }
}

export const getList = (state: State) => state.list;
export const getLoading = (state: State) => state.loading;
export const getActiveAccount = (state: State) => state.activeAccount;
