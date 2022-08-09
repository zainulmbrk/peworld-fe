/** @format */

import axios from 'axios';

const GetSingleProfileRequest = () => {
	return {
		type: 'GET_SINGLE_PROFILE_REQUEST',
	};
};

const GetSingleProfileSuccess = (data) => {
	return {
		type: 'GET_SINGLE_PROFILE_SUCCESS',
		payload: data,
	};
};

const GetSingleProfileError = (error) => {
	return {
		type: 'GET_SINGLE_PROFILE_ERROR',
		payload: error,
	};
};

export const GetSingleProfile = (profile_id) => {
	if (typeof window !== 'undefined') {
		return (dispatch) => {
			dispatch(GetSingleProfileRequest());
			axios({
				method: 'GET',
				url: `http://localhost:5000/api/v1/profile?profile_id=${profile_id}`,
			})
				.then((res) => {
					dispatch(GetSingleProfileSuccess(res.data));
				})
				.catch((err) => {
					dispatch(GetSingleProfileError(err.response));
				});
		};
	}
};
