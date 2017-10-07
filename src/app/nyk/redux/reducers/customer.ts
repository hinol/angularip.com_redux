import * as  customer from '../actions/customer';
import {CustomerInterface} from '../../modules/customer/customer.interface';

export interface State {
    list: CustomerInterface[];
    loading: boolean;
}

const initialState: State = {
    list: null,
    loading: false,
};

export function reducer(state = initialState, action: customer.Actions): State {
    switch (action.type) {
        case customer.CUSTOMER_GET_LIST: {
            return {
                ...state,
                list: null,
                loading: true
            };
        }
        case customer.CUSTOMER_SET_LIST: {
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
