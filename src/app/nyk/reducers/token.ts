import {TokenResponseInterface} from '../services/token/token.response.interface';
import * as  token from '../actions/token';


export interface State {
    showSidenav: boolean;

    tokenResponse: TokenResponseInterface;
    expire: number;
    login: string;
    password: string;
    loginProcess: boolean;
}

const initialState: State = {
    showSidenav: false,
    tokenResponse: null,
    expire: 0,
    login: '',
    password: '',
    loginProcess: false,
};


export function reducer(state = initialState, action: token.Actions): State {
    switch (action.type) {
        case token.SET_TOKEN: {
            return {
                ...state,
                tokenResponse: action.payload,
                expire: action.payload.expires_in,
                loginProcess: false
            };
        }
        case token.SET_EXPIRE: {
            return {
                ...state,
                expire: action.payload,
                loginProcess: false
            };
        }
        case token.GET_TOKEN: {
            return {
                ...state,
                login: action.payload.login,
                password: action.payload.password,
                loginProcess: true
            };
        }
        case token.SELECT: {
            return state;
        }
        default: {
            return state;
        }
    }
}

export const getToken = (state: State) => state.tokenResponse;
export const getExpire = (state: State) => state.expire;
export const getLoginProcess = (state: State) => state.loginProcess;
export const getShowSidenav = (state: State) => state.showSidenav;
