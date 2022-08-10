/** @format */

const initialState = {
	loading: false,
	data: [
		{
			portofolio_name: '',
			portofolio_picture: '',
			portofolio_repo: '',
		},
	],
	error: '',
};
const initialStateDelete = {
	success: '',
	message: '',
	loading: false,
	result: {},
	error: '',
};

export const Portofolio = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'GET_PORTOFOLIO_REQUEST':
			return { ...state, loading: true };
		case 'GET_PORTOFOLIO_ERROR':
			return { ...state, loading: false, error: action.payload };
		case 'GET_PORTOFOLIO_SUCCESS':
			return { ...state, loading: false, data: action.payload };

		default:
			return state;
	}
};
export const DeletePortofolio = (state = initialStateDelete, action = {}) => {
	switch (action.type) {
		case 'DELETE_PORTOFOLIO_REQUEST':
			return { ...state, loading: true };
		case 'DELETE_PORTOFOLIO_ERROR':
			return { ...state, loading: false, error: action.payload };
		case 'DELETE_PORTOFOLIO_SUCCESS':
			return { ...state, loading: false, result: action.payload };

		default:
			return state;
	}
};

