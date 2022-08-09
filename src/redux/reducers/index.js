import { combineReducers } from 'redux'
import { AllProfileFetch, SearchProfileFetch } from '../reducers/home'

const rootReducers = combineReducers({
  profile: AllProfileFetch,
  search: SearchProfileFetch,
})
export default rootReducers
