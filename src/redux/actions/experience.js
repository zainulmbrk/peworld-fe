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

export const DeleteExperience = (profile_id, skill_id, token) => {
	if (typeof window !== 'undefined') {
		return (dispatch) => {
			dispatch(DeleteExperienceRequest());
			axios({
				method: 'DELETE',
				url: `http://localhost:5000/api/v1/skill?profile_id=${profile_id}&skill_id=${skill_id}`,
				headers: {
					authorization: `Bearer ${token}`,
				},
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
export const EditExperience = (profile_id, skill_id, token, skill_name) => {
	if (typeof window !== 'undefined') {
		return (dispatch) => {
			dispatch(EditExperienceRequest());
			axios({
				method: 'PATCH',
				url: `http://localhost:5000/api/v1/skill?profile_id=${profile_id}&skill_id=${skill_id}`,
				data: {
					skill_name: skill_name,
				},
				headers: {
					authorization: `Bearer ${token}`,
				},
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
				url: `http://localhost:5000/api/v1/experience/id?profile_id=${profile_id}`,
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
