/** @format */

import axios from 'axios';

const DeleteSkillRequest = () => {
	return {
		type: 'DELETE_SKILL_REQUEST',
	};
};

const DeleteSkillSuccess = (data) => {
	return {
		type: 'DELETE_SKILL_SUCCESS',
		payload: data,
	};
};

const DeleteSkillError = (error) => {
	return {
		type: 'DELETE_SKILL_ERROR',
		payload: error,
	};
};

export const DeleteSkill = (profile_id, skill_id, token) => {
	if (typeof window !== 'undefined') {
		return (dispatch) => {
			dispatch(DeleteSkillRequest());
			axios({
				method: 'DELETE',
				url: `http://localhost:5000/api/v1/skill?profile_id=${profile_id}&skill_id=${skill_id}`,
				headers: {
					authorization: `Bearer ${token}`,
				},
			})
				.then((res) => {
					dispatch(DeleteSkillSuccess(res.data));
				})
				.catch((err) => {
					dispatch(DeleteSkillError(err.response));
				});
		};
	}
};
