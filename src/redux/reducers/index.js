import { combineReducers } from "redux"
import Profile from "./Profile"
import SingleProfile from './Update';

const rootReducer = combineReducers({
	profile: Profile,
	singleprofile: SingleProfile,
});

export default rootReducer