const initialState = {
  loading: false,
  data: {
    result: [],
  },
};

const Profile = (state = initialState, action = {}) => {
  switch (action.type) {
    case "GET_PROFILE_REQUEST":
      return { ...state, loading: true };
    case "GET_PROFILE_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "GET_PROFILE_SUCCESS":
      return { ...state, loading: false, data: action.payload };

    default:
      return state
  }
};

export default Profile  