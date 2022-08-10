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

const DeletePortofolioRequest = () => {
	return {
		type: 'DELETE_PORTOFOLIO_REQUEST',
	};
};

const DeletePortofolioSuccess = (data) => {
	return {
		type: 'DELETE_PORTOFOLIO_SUCCESS',
		payload: data,
	};
};

const DeletePortofolioError = (error) => {
	return {
		type: 'DELETE_PORTOFOLIO_ERROR',
		payload: error,
	};
};

export const DeletePortofolio = (profile_id, portofolio_id, token) => {
	console.log(profile_id, portofolio_id, token, 'ini data delete porto');
	if (typeof window !== 'undefined') {
		return (dispatch) => {
			dispatch(DeletePortofolioRequest());
			axios({
				method: 'DELETE',
				url: `http://localhost:5000/api/v1/portofolio?profile_id=${profile_id}&portofolio_id=${portofolio_id}`,
				headers: {
					authorization: `Bearer ${token}`,
				},
			})
				.then((res) => {
					dispatch(DeletePortofolioSuccess(res.data));
				})
				.catch((err) => {
					dispatch(DeletePortofolioError(err.response));
				});
		};
	}
};

