import * as  layout from '../actions/layout';


export interface State {
    showSidenav: boolean;
    expire: number;
}

const initialState: State = {
    showSidenav: false,
    expire: 15
};

export function reducer(state = initialState, action: layout.Actions): State {
    switch (action.type) {
        case layout.CLOSE_SIDENAV:
            return {
                ...state,
                showSidenav: false
            };

        case layout.OPEN_SIDENAV:
            return {
                ...state,
                showSidenav: true
            };

        default:
            return state;
    }
}

export const getShowSidenav = (state: State) => state.showSidenav;
export const getShowSidenavExpire = (state: State) => state.expire;