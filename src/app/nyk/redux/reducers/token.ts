import {TokenResponseInterface} from '../../services/token/token.response.interface';
import * as  token from '../actions/token';


export interface State {
  tokenResponse: TokenResponseInterface;
  expire: number;
  login: string;
  password: string;
  loginProcess: boolean;
  showLoginForm: boolean;
}

const initialState: State = {
  tokenResponse: null,
  expire: 0,
  login: '',
  password: '',
  loginProcess: false,
  showLoginForm: true,
};


export function reducer(state = initialState, action: token.Actions): State {
  switch (action.type) {
    case token.SET_TOKEN: {
      return {
        ...state,
        tokenResponse: action.payload,
        expire: action.payload.expires_in,
        loginProcess: false,
        showLoginForm: false
      };
    }
    case token.SET_EXPIRE: {

      let showLoginForm = state.showLoginForm;
      if (action.payload <= 0) {
        showLoginForm = true;
      }
      return {
        ...state,
        showLoginForm: showLoginForm,
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
export const getShowLoginForm = (state: State) => state.showLoginForm;
