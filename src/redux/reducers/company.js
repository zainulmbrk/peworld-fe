const initialState = {
  loading: false,
  data: {
    result: [],
  },
  error: null
}


const Company = (state = initialState, action = {}) => {
  switch (action.type) {
    case "COMPANY_REQUEST":
      return { ...state, loading: true }
    case "COMPANY_ERROR":
      return { ...state, loading: false, data: state.data, error: action.payload }
    case "GET_COMPANY_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: null }
    default:
      return state
  }
}


export default Company