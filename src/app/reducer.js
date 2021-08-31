import { combineReducers } from "redux";
import authReducer from "./features/users/authSlice";

const rootReducer = combineReducers({
    login: authReducer
})

export default rootReducer;
