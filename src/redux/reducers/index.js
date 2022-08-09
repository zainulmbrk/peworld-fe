import { combineReducers } from "redux"
import Profile from "./Profile"

const rootReducer = combineReducers ({
    profile: Profile,
})

export default rootReducer