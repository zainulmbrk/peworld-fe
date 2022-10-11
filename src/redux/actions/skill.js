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
const EditSkillRequest = () => {
	return {
		type: 'EDIT_SKILL_REQUEST',
	};
};

const EditSkillSuccess = (data) => {
	return {
		type: 'EDIT_SKILL_SUCCESS',
		payload: data,
	};
};

const EditSkillError = (error) => {
	return {
		type: 'EDIT_SKILL_ERROR',
		payload: error,
	};
};
const AddSkillRequest = () => {
	return {
		type: 'ADD_SKILL_REQUEST',
	};
};

const AddSkillSuccess = (data) => {
	return {
		type: 'ADD_SKILL_SUCCESS',
		payload: data,
	};
};

const AddSkillError = (error) => {
	return {
		type: 'ADD_EXPERIENCE_ERROR',
		payload: error,
	};
};

export const DeleteSkill = (profile_id, skill_id, token) => {
	if (typeof window !== 'undefined') {
		return (dispatch) => {
			dispatch(DeleteSkillRequest());
			axios({
				method: 'DELETE',
				url: `https://peworld-be.vercel.app/api/v1/skill?profile_id=${profile_id}&skill_id=${skill_id}`,
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
export const EditSkill = (profile_id, skill_id, token, skill_name) => {
	if (typeof window !== 'undefined') {
		return (dispatch) => {
			dispatch(EditSkillRequest());
			axios({
				method: 'PATCH',
				url: `https://peworld-be.vercel.app/api/v1/skill?profile_id=${profile_id}&skill_id=${skill_id}`,
				data: {
					skill_name: skill_name,
				},
				headers: {
					authorization: `Bearer ${token}`,
				},
			})
				.then((res) => {
					dispatch(EditSkillSuccess(res.data));
				})
				.catch((err) => {
					dispatch(EditSkillError(err.response));
				});
		};
	}
};
export const AddSkill = (profile_id, skill_name, token) => {
	if (typeof window !== 'undefined') {
		return (dispatch) => {
			dispatch(AddSkillRequest());
			axios({
				method: 'POST',
				url: `https://peworld-be.vercel.app/api/v1/skill?profile_id=${profile_id}&skill_name=${skill_name}`,
				data: {
					skill_name: skill_name,
				},
				headers: {
					authorization: `Bearer ${token}`,
				},
			})
				.then((res) => {
					dispatch(AddSkillSuccess(res.data));
				})
				.catch((err) => {
					dispatch(AddSkillError(err.response));
				});
		};
	}
};

