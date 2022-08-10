import Cookies from 'js-cookie'
import axios from '../../utils/axios'

const CompanyRequest = () => {
  return {
    type: 'COMPANY_REQUEST'
  }
}
const CompanySuccess = (data) => {
  return {
    type: 'GET_COMPANY_SUCCESS',
    payload: data
  }
}
const CompanyError = (err) => {
  return {
    type: 'COMPANY_ERROR',
    payload: err
  }
}

export const GetCompany = () => {
  const token = Cookies.get("token");
  const id = Cookies.get('profile_id')
  console.log(id, '90909')
  return async (dispatch) => {
    try {
      dispatch(CompanyRequest())
      const result = await axios({
        method: 'GET',
        url: `/profile?profile_id=${id}`,
      })
      dispatch(CompanySuccess(result.data.data))
    }
    catch (err) {
      console.log(err)
      dispatch(CompanyError(err.response))
    }
  }
}
export const UpdateCompany = () => {
  const token = Cookies.get("token");
  const id = Cookies.get('profile_id')
  console.log(id, '90909')
  return async (dispatch) => {
    try {
      dispatch(CompanyRequest())
      const result = await axios({
        method: 'GET',
        url: `/profile?profile_id=${id}`,
      })
      dispatch(CompanySuccess(result.data.data))
    }
    catch (err) {
      console.log(err)
      dispatch(CompanyError(err.response))
    }
  }
}