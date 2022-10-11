import axios from 'axios'

//sort
const GetProfileRequest = () => {
	return {
		type: 'GET_PROFILE_REQUEST',
	}
}

const GetProfileSuccess = (data) => {
	return {
		type: 'GET_PROFILE_SUCCESS',
		payload: data,
	}
}

const GetProfileError = (error) => {
	return {
		type: 'GET_PROFILE_ERROR',
		payload: error,
	}
}

export const GetProfile = (
	page = 1,
	limit = 20,
	order_by = 'profile_name',
	sort = 'desc'
) => {
	return (dispatch) => {
		dispatch(GetProfileRequest());
		axios({
			method: 'GET',
			url: `https://peworld-be.vercel.app/api/v1/profile/sort?page=${page}&limit=${limit}&order_by=${order_by}&sort=${sort}`,
		})
			.then((res) => {
				dispatch(GetProfileSuccess(res.data.data));
			})
			.catch((err) => {
				dispatch(GetProfileError(err));
			});
	};
};

//search
const SearchProfileRequest = () => {
	return {
		type: 'SEARCH_PROFILE_REQUEST',
	};
};

const SearchProfileSuccess = (data) => {
	return {
		type: 'SEARCH_PROFILE_SUCCESS',
		payload: data,
	};
};

const SearchProfileError = (error) => {
	return {
		type: 'SEARCH_PROFILE_ERROR',
		payload: error,
	};
};

export const GetSearchProfile = (
	limit = 20,
	page = 1,
	skill_location = 'indonesia'
) => {
	return (dispatch) => {
		dispatch(SearchProfileRequest());
		axios({
			method: 'GET',
			url: `https://peworld-be.vercel.app/api/v1/profile/search?page=${page}&limit=${limit}&skill_location=${skill_location}`,
		})
			.then((res) => {
				dispatch(SearchProfileSuccess(res.data.data));
			})
			.catch((err) => {
				dispatch(SearchProfileError(err));
			});
	};
};
