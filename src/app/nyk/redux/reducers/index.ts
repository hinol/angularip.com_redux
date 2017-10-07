import {createSelector} from 'reselect';
import * as fromToken from './token';
import * as fromLayout from './layout';
import * as fromAccount from './account';
import * as fromCustomer from './customer';
import {ActionReducer, combineReducers} from '@ngrx/store';
import {compose} from '@ngrx/core/compose';
import {storeFreeze} from 'ngrx-store-freeze';
import {environment} from '../../../../environments/environment';


export interface StateCollection {
    layout: fromLayout.State;
    token: fromToken.State;
    account: fromAccount.State;
    customer: fromCustomer.State;
}

const reducers = {
    layout: fromLayout.reducer,
    token: fromToken.reducer,
    account: fromAccount.reducer,
    customer: fromCustomer.reducer
};
const developmentReducer: ActionReducer<StateCollection> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<StateCollection> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    if (environment.production) {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}

export const getTokenState = (state: StateCollection) => state.token;


export const TokenState = {
    showLoginForm: createSelector(getTokenState, fromToken.getShowLoginForm),
    getToken: createSelector(getTokenState, fromToken.getToken),
    getTokenExpire: createSelector(getTokenState, fromToken.getExpire),
    getTokenLoginProcess: createSelector(getTokenState, fromToken.getLoginProcess),
};

export const getAccountState = (state: StateCollection) => state.account;

export const AccountState = {
    getList: createSelector(getAccountState, fromAccount.getList),
    getLoading: createSelector(getAccountState, fromAccount.getLoading),
};


export const getLayoutState = (state: StateCollection) => state.layout;

export const LayoutState = {
    getShowSidenav: createSelector(getLayoutState, fromLayout.getShowSidenav)
};


export const getCustomerState = (state: StateCollection) => state.customer;

export const CustomerState = {
    getList: createSelector(getCustomerState, fromCustomer.getList),
    getLoading: createSelector(getCustomerState, fromCustomer.getLoading),
};
