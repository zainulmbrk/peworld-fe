import { combineReducers } from 'redux'
import { AllProfileFetch, SearchProfileFetch } from '../reducers/home'
import Company from './company';
import { Portofolio, DeletePortofolio } from './Portofolio';
import { Skill, EditSkill, AddSkill } from './skill';

const rootReducers = combineReducers({
	profile: AllProfileFetch,
	search: SearchProfileFetch,
	portofolio: Portofolio,
	company: Company,
	skill: Skill,
	deleteportofolio: DeletePortofolio,
	editskill: EditSkill,
	addskill: AddSkill,
});
export default rootReducers
