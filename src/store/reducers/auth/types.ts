export interface AuthState {
    isAuth: boolean,
    error: string
}

export enum AuthActionsEnum {
    SET_AUTH = 'SET_AUTH',
    SET_LOADING = 'SET_LOADING',
    SET_ERROR = 'SET_ERROR'
}

export interface SetAuthAction {
    type: AuthActionsEnum.SET_AUTH;
    payload: boolean;
}

export interface SetErrorAction {
    type: AuthActionsEnum.SET_ERROR;
    payload: string;
}

export type AuthAction =
    SetAuthAction |
    SetErrorAction