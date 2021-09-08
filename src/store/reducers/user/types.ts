import {IUser} from "../../../models/User";

export interface AuthState {
    user: IUser,
}

export enum AuthActionsTypesEnum {
   SET_NEW_USER
}

export interface SetNewUser {
    type: AuthActionsTypesEnum.SET_NEW_USER;
    payload: boolean;
}

export type AuthAction =
    SetNewUser