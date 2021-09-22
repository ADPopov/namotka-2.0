import {AppDispatch} from "../../index";
import {supabase} from "../../../api/supabaseClient";
import {ProfileActionsEnum, setProfile} from "./types";
import {IProfile, IProfileUpdate} from "../../../models/User";

export const ProfileActionCreators = {
    setProfile: (profile: IProfile): setProfile => ({type: ProfileActionsEnum.SET_PROFILE, payload: profile}),
    fetchProfile: (id: string) => async (dispatch: AppDispatch) => {
        let { data, error } = await supabase
            .from('profiles')
            .select(`*`)
            .eq('id', id)
            .single()
        if (error) throw error
        dispatch(ProfileActionCreators.setProfile(data))
    },
    updateProfile: ({username, website, display_name, about}: IProfile ) => async (dispatch: AppDispatch) => {
        const user = await supabase.auth.user();
        if (user) {
            const updates : IProfileUpdate = {
                id: user.id,
                username,
                website,
                about,
                display_name: display_name,
                updated_at: new Date(),
            }
            let {error} = await supabase.from('profiles').upsert(updates, {
                returning: "minimal"
            })
            if (error) {
                throw error
            }
            dispatch<any>(ProfileActionCreators.setProfile(updates));
        }
    }
}