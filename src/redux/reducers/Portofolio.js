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
};

const Portofolio = (state = initialState, action = {}) => {
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

export default Portofolio;
