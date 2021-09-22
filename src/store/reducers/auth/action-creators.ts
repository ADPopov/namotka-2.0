import {AuthActionsEnum, SetAuthAction, SetLoadingAction} from "./types";
import {AppDispatch} from "../../index";
import {supabase} from "../../../api/supabaseClient";
import {ProfileActionCreators} from "../profile/action-creators";

export const AuthActionCreators = {
    setIsAuth: (isAuth: boolean): SetAuthAction => ({type: AuthActionsEnum.SET_AUTH, payload: isAuth}),
    setLoading: (isLoading: boolean): SetLoadingAction => ({type: AuthActionsEnum.SET_LOADING, payload: isLoading}),
    signUp: (email: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setLoading(true));
            const {error} = await supabase.auth.signUp({email, password});
            if (error) throw error
        } finally {
            dispatch(AuthActionCreators.setLoading(false));
        }
    },
    login: (email: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setLoading(true));
            const {user, error} = await supabase.auth.signIn({email, password})
            if(user){
                await dispatch(AuthActionCreators.setIsAuth(true));
                await dispatch<any>(ProfileActionCreators.fetchProfile(user.id))
            }
            if(error) throw error
        } finally {
            dispatch(AuthActionCreators.setLoading(false));
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        try {
            const {error} = await supabase.auth.signOut()
            if (error) throw error
        } finally {
            dispatch(AuthActionCreators.setIsAuth(false));
        }
    },
    session: () => async (dispatch: AppDispatch) => {
        const session = await supabase.auth.session();
        if (session){
            dispatch<any>(ProfileActionCreators.fetchProfile(session.user!.id));
            dispatch(AuthActionCreators.setIsAuth(true));
        }
    },
}