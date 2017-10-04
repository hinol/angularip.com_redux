import {createSelector} from 'reselect';
import * as fromToken from './token.reducer';
import * as fromLayout from './layout.reducer';
import {ActionReducer, combineReducers} from '@ngrx/store';
import {compose} from '@ngrx/core/compose';
import {storeFreeze} from 'ngrx-store-freeze';
import {environment} from '../../../environments/environment';

export interface State {
    token: fromToken.State;
    layout: fromLayout.State;
}

const reducers = {
    search: fromToken.reducer,
    layout: fromLayout.reducer,
};
const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    if (environment.production) {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}

export const getTokenState = (state: State) => state.token;
export const getToken = createSelector(getTokenState, fromToken.getToken);
export const getTokenExpire = createSelector(getTokenState, fromToken.getExpire);


export const getLayoutState = (state: State) => state.layout;
export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);