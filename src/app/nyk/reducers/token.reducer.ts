import {TokenResponseInterface} from '../services/token/token.response.interface';
import * as  token from '../actions/token.action';


export interface State {
    token: TokenResponseInterface;
    expire: number;
    login: string;
    password: string;
    loginProcess: boolean;
}

const initialState: State = {
    token: null,
    expire: 0,
    login: '',
    password: '',
    loginProcess: false,
};


export function reducer(state = initialState, action: token.Actions): State {
    switch (action.type) {
        case token.SET_TOKEN:
            return {
                ...state,
                token: action.payload,
                loginProcess: false
            };
        case token.SET_EXPIRE:
            return {
                ...state,
                expire: action.payload,
                loginProcess: false
            };
        case token.GET_TOKEN:
            return {
                ...state,
                login: action.payload.login,
                password: action.payload.password,
                loginProcess: true
            };

        default:
            return state;
    }
}

export const getToken = (state: State) => state.token;
export const getExpire = (state: State) => state.expire;
export const getLoginProcess = (state: State) => state.loginProcess;