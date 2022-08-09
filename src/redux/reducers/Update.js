/** @format */

const initialState = {
	loading: false,
	data: [
		{
			profile_description: '',
			profile_email: '',
			profile_github: '',
			profile_gitlab: '',
			profile_id: '',
			profile_instagram: '',
			profile_job: '',
			profile_job_type: '',
			profile_location: '',
			profile_name: '',
			profile_phone_number: '',
			profile_picture: '',
			profile_role: '',
			skill: '',
		},
	],
};

const SingleProfile = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'GET_SINGLE_PROFILE_REQUEST':
			return { ...state, loading: true };
		case 'GET_SINGLE_PROFILE_ERROR':
			return { ...state, loading: false, error: action.payload };
		case 'GET_SINGLE_PROFILE_SUCCESS':
			return { ...state, loading: false, data: action.payload };

		default:
			return state;
	}
};

export default SingleProfile;
