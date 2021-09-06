import { LOGIN_ACTION, LOGOUT_ACTION, loginAction } from "./authActions";

import { getUserAPI } from '../../../api/userApi';
import { getUser } from "../../../modules/tokens";

const initialState = {
    user: { },
    logged: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN_ACTION:

            return {
                ...state,
                user: action.payload,
                logged: true
            }

        case LOGOUT_ACTION:
            return {
                ...state
            }

        default:
            return state
    }
}

export const getUserLoginAPI = async (dispatch, getState) => {

        const body = {
            user: getUser()
        } 

        const data = await getUserAPI(body);
        dispatch(loginAction(data))

}

export const mapStateToPropsLogin = state => ({ login: state.login })


export default authReducer;

