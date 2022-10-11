/** @format */

import axios from 'axios';

const DeleteExperienceRequest = () => {
	return {
		type: 'DELETE_EXPERIENCE_REQUEST',
	};
};

const DeleteExperienceSuccess = (data) => {
	return {
		type: 'DELETE_EXPERIENCE_SUCCESS',
		payload: data,
	};
};

const DeleteExperienceError = (error) => {
	return {
		type: 'DELETE_EXPERIENCE_ERROR',
		payload: error,
	};
};
const EditExperienceRequest = () => {
	return {
		type: 'EDIT_EXPERIENCE_REQUEST',
	};
};

const EditExperienceSuccess = (data) => {
	return {
		type: 'EDIT_EXPERIENCE_SUCCESS',
		payload: data,
	};
};

const EditExperienceError = (error) => {
	return {
		type: 'EDIT_EXPERIENCE_ERROR',
		payload: error,
	};
};
const AddExperienceRequest = () => {
	return {
		type: 'ADD_EXPERIENCE_REQUEST',
	};
};

const AddExperienceSuccess = (data) => {
	return {
		type: 'ADD_EXPERIENCE_SUCCESS',
		payload: data,
	};
};

const AddExperienceError = (error) => {
	return {
		type: 'ADD_EXPERIENCE_ERROR',
		payload: error,
	};
};

const GetExperienceRequest = () => {
	return {
		type: 'GET_EXPERIENCE_REQUEST',
	};
};

const GetExperienceSuccess = (data) => {
	return {
		type: 'GET_EXPERIENCE_SUCCESS',
		payload: data,
	};
};

const GetExperienceError = (error) => {
	return {
		type: 'GET_EXPERIENCE_ERROR',
		payload: error,
	};
};

export const DeleteExperience = (profile_id, experience_id, token) => {
	if (typeof window !== 'undefined') {
		return (dispatch) => {
			dispatch(DeleteExperienceRequest());
			axios({
				method: 'DELETE',
				url: `https://peworld-be.vercel.app/api/v1/experience/delete?profile_id=${profile_id}&experience_id=${experience_id}`,
			})
				.then((res) => {
					dispatch(DeleteExperienceSuccess(res.data));
				})
				.catch((err) => {
					dispatch(DeleteExperienceError(err.response));
				});
		};
	}
};
export const EditExperience = (profile_id, experience_id, data) => {
	if (typeof window !== 'undefined') {
		return (dispatch) => {
			dispatch(EditExperienceRequest());
			axios({
				method: 'PATCH',
				url: `https://peworld-be.vercel.app/api/v1/experience/update?profile_id=${profile_id}&experience_id=${experience_id}`,
				data: data,
			})
				.then((res) => {
					dispatch(EditExperienceSuccess(res.data));
				})
				.catch((err) => {
					dispatch(EditExperienceError(err.response));
				});
		};
	}
};
export const AddExperience = (
	profile_id,
	experience_company,
	experience_position,
	experience_date_start,
	experience_date_end,
	experience_description
) => {
	if (typeof window !== 'undefined') {
		return (dispatch) => {
			dispatch(AddExperienceRequest());
			axios({
				method: 'POST',
				url: `https://peworld-be.vercel.app/api/v1/experience?profile_id=${profile_id}`,
				data: {
					experience_company: experience_company,
					experience_position: experience_position,
					experience_date_start: experience_date_start,
					experience_date_end: experience_date_end,
					experience_description: experience_description,
				},
			})
				.then((res) => {
					dispatch(AddExperienceSuccess(res.data));
				})
				.catch((err) => {
					dispatch(AddExperienceError(err.response));
				});
		};
	}
};
export const GetExperience = (profile_id) => {
	if (typeof window !== 'undefined') {
		return (dispatch) => {
			dispatch(GetExperienceRequest());
			axios({
				method: 'GET',
				url: `https://peworld-be.vercel.app/api/v1/experience/id?profile_id=${profile_id}`,
			})
				.then((res) => {
					dispatch(GetExperienceSuccess(res.data));
				})
				.catch((err) => {
					dispatch(GetExperienceError(err.response));
				});
		};
	}
};