import {AppDispatch} from "../../index";
import {supabase} from "../../../api/supabaseClient";
import {ProfileActionsEnum, setProfile} from "./types";

export const ProfileActionCreators = {
    setProfile: (profile: any): setProfile => ({type: ProfileActionsEnum.SET_PROFILE, payload: profile}),
    fetchProfile: () => async (dispatch: AppDispatch) => {
        let {data: profiles, error} = await supabase
            .from('profiles')
            .select()
        if (error) throw error
        dispatch(ProfileActionCreators.setProfile(profiles![0]))
    },
    updateProfile: ({username, website, displayName, about}: any ) => async (dispatch: AppDispatch) => {
        const user = supabase.auth.user();
        if (user) {
            const updates = {
                id: user.id,
                username,
                website,
                about,
                display_name: displayName,
                updated_at: new Date(),
            }
            let {error} = await supabase.from('profiles').upsert(updates, {
                returning: "minimal"
            })
            dispatch<any>(ProfileActionCreators.fetchProfile())
            if (error) {
                throw error
            }
        }
    }
}