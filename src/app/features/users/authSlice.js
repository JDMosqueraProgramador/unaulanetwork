import { LOGIN_ACTION, LOGOUT_ACTION, loginAction } from "./authActions";

import { unaulaApi, localApi } from '../../../modules/apisConfig';

import { upperFisrtLetterPipe } from '../../../pipes/lettersPipes';
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

    const data = { name: '', rol: '', faculty: '', department: '', img: '', description: '', work: '' }

    await unaulaApi.get(`users/studentinfo/?userName=${getUser()}`)
        .then(async response => {

            data.name = upperFisrtLetterPipe(response.data[0].strName);
            data.rol = response.data[0].rol;
            data.faculty = response.data[0].strfacultyname;
            data.department = response.data[0].strDepartmentName;

            await localApi.get(`users/${getUser()}`)
                .then(response => {

                    data.img = response.data.profilePicture;
                    data.description = response.data.description;
                    data.work = response.data.work;

                }).catch(error => console.log(error.response))

        })

        dispatch(loginAction(data))

}

export const mapStateToPropsLogin = state => ({ login: state.login })


export default authReducer;

