export interface AuthState {
    isAuth: boolean,
    isLoading: boolean
}

export enum AuthActionsEnum {
    SET_AUTH = 'SET_AUTH',
    SET_LOADING = 'SET_LOADING',
}

export interface SetAuthAction {
    type: AuthActionsEnum.SET_AUTH;
    payload: boolean;
}


export interface SetLoadingAction {
    type: AuthActionsEnum.SET_LOADING;
    payload: boolean;
}

export type AuthAction =
    SetAuthAction |
    SetLoadingAction