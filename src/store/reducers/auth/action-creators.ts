import {AuthActionsEnum, SetAuthAction, SetErrorAction} from "./types";

export const AuthActionCreators = {
    setIsAuth: (isAuth: boolean): SetAuthAction => ({type: AuthActionsEnum.SET_AUTH, payload: isAuth}),
    setErrorMessage: (error: any): SetErrorAction => ({type: AuthActionsEnum.SET_ERROR, payload: error})
}