/** @format */

import axios from 'axios';

const GetPortofolioRequest = () => {
	return {
		type: 'GET_PORTOFOLIO_REQUEST',
	};
};

const GetPortofolioSuccess = (data) => {
	return {
		type: 'GET_PORTOFOLIO_SUCCESS',
		payload: data,
	};
};

const GetPortofolioError = (error) => {
	return {
		type: 'GET_PORTOFOLIO_ERROR',
		payload: error,
	};
};

export const GetPortofolio = (profile_id) => {
	if (typeof window !== 'undefined') {
		return (dispatch) => {
			dispatch(GetPortofolioRequest());
			axios({
				method: 'GET',
				url: `http://localhost:5000/api/v1/portofolio?profile_id=${profile_id}`,
			})
				.then((res) => {
					dispatch(GetPortofolioSuccess(res.data));
				})
				.catch((err) => {
					dispatch(GetPortofolioError(err.response));
				});
		};
	}
};
