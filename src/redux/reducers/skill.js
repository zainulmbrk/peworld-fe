/** @format */

const initialState = {
	loading: false,
	success: '',
	message: '',
	data: [],
};

export const Skill = (state = initialState, action = {}) => {
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
export const EditSkill = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'EDIT_SKILL_REQUEST':
			return { ...state, loading: true };
		case 'EDIT_SKILL_ERROR':
			return { ...state, loading: false, error: action.payload };
		case 'EDIT_SKILL_SUCCESS':
			return { ...state, loading: false, data: action.payload };

		default:
			return state;
	}
};
export const AddSkill = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'ADD_SKILL_REQUEST':
			return { ...state, loading: true };
		case 'ADD_SKILL_ERROR':
			return { ...state, loading: false, error: action.payload };
		case 'ADD_SKILL_SUCCESS':
			return { ...state, loading: false, data: action.payload };

		default:
			return state;
	}
};


