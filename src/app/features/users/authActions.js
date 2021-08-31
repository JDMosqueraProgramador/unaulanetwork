export const LOGIN_ACTION = 'AUTH/LOGIN';
export const LOGOUT_ACTION = 'AUTH/LOGOUT';

export const loginAction = (data) => {
    return {
        type: LOGIN_ACTION,
        payload: data
    }
}