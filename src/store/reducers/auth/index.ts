import {AuthAction, AuthActionsEnum, AuthState} from "./types";

const initialState : AuthState = {
    isAuth: false,
    isLoading: false,
}

export default function AuthReducer(state = initialState, action : AuthAction) : AuthState {
    switch (action.type) {
        case AuthActionsEnum.SET_AUTH:
            return {...state, isAuth: action.payload}
        case AuthActionsEnum.SET_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state;
    }
}