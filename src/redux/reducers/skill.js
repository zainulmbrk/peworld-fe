/** @format */

const initialState = {
	loading: false,
	success: '',
	message: '',
	data: [],
};

const Skill = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'DELETE_SKILL_REQUEST':
			return { ...state, loading: true };
		case 'DELETE_SKILL_ERROR':
			return { ...state, loading: false, error: action.payload };
		case 'DELETE_SKILL_SUCCESS':
			return { ...state, loading: false, data: action.payload };

		default:
			return state;
	}
};

export default Skill;
