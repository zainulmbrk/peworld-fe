import { combineReducers } from 'redux'
import { AllProfileFetch, SearchProfileFetch } from '../reducers/home'
import Portofolio from './Portofolio';
import Company from './company';

const rootReducers = combineReducers({
	profile: AllProfileFetch,
	search: SearchProfileFetch,
	portofolio: Portofolio,
	company: Company,
});
export default rootReducers
