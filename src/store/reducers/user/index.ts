import {AuthAction, AuthState} from "./types";
import {IUser} from "../../../models/User";

const initialState : AuthState = {
    user: {} as IUser,
}

export default function UserReducer(state = initialState, action : AuthAction) : AuthState {
    switch (action.type) {

        default:
            return state;
    }
}