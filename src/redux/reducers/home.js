const initialState = {
  loading: false,
  data: {},
  results: [],
  error: null,
}

export const AllProfileFetch = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_PROFILE_REQUEST':
      return { ...state, loading: true }
    case 'GET_PROFILE_ERROR':
      return { ...state, loading: false, error: action.payload }
    case 'GET_PROFILE_SUCCESS':
      return { ...state, loading: false, results: action.payload, error: null }
    default:
      return state
  }
}

const initialStates = {
  loading: false,
  data: {},
  results: [],
  error: null,
}

export const SearchProfileFetch = (state = initialStates, action = {}) => {
  switch (action.type) {
    case 'SEARCH_PROFILE_REQUEST':
      return { ...state, loading: true }
    case 'SEARCH_PROFILE_ERROR':
      return { ...state, loading: false, error: action.payload }
    case 'SEARCH_PROFILE_SUCCESS':
      return { ...state, loading: false, results: action.payload, error: null }
    default:
      return state
  }
}
