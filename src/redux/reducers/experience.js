/** @format */

const initialState = {
	loading: false,
	success: '',
	message: '',
	data: [],
};

export const DeleteExperience = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'DELETE_EXPERIENCE_REQUEST':
			return { ...state, loading: true };
		case 'DELETE_EXPERIENCE_ERROR':
			return { ...state, loading: false, error: action.payload };
		case 'DELETE_EXPERIENCE_SUCCESS':
			return { ...state, loading: false, data: action.payload };

		default:
			return state;
	}
};
export const EditExperience = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'EDIT_EXPERIENCE_REQUEST':
			return { ...state, loading: true };
		case 'EDIT_EXPERIENCE_ERROR':
			return { ...state, loading: false, error: action.payload };
		case 'EDIT_EXPERIENCE_SUCCESS':
			return { ...state, loading: false, data: action.payload };

		default:
			return state;
	}
};
export const AddExperience = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'ADD_EXPERIENCE_REQUEST':
			return { ...state, loading: true };
		case 'ADD_EXPERIENCE_ERROR':
			return { ...state, loading: false, error: action.payload };
		case 'ADD_EXPERIENCE_SUCCESS':
			return { ...state, loading: false, data: action.payload };

		default:
			return state;
	}
};
export const GetExperience = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'GET_EXPERIENCE_REQUEST':
			return { ...state, loading: true };
		case 'GET_EXPERIENCE_ERROR':
			return { ...state, loading: false, error: action.payload };
		case 'GET_EXPERIENCE_SUCCESS':
			return { ...state, loading: false, data: action.payload };

		default:
			return state;
	}
};
