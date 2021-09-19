import {IProfile} from "../../../models/User";

export interface ProfileState {
    profile: IProfile,
}

export enum ProfileActionsEnum {
   SET_PROFILE = 'SET_PROFILE'
}

export interface setProfile {
    type: ProfileActionsEnum.SET_PROFILE;
    payload: IProfile;
}

export type ProfileAction =
    setProfile