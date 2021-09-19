import {ProfileAction, ProfileActionsEnum, ProfileState} from "./types";
import {IProfile} from "../../../models/User";

const initialState : ProfileState = {
    profile: {} as IProfile,
}

export default function ProfileReducer(state = initialState, action : ProfileAction) : ProfileState {
    switch (action.type) {
        case ProfileActionsEnum.SET_PROFILE: {
            return {...state, profile: action.payload}
        }
        default:
            return state;
    }
}