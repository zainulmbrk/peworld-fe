import axios from "axios";

const GetProfileRequest = () => {
  return {
    type: "GET_PROFILE_REQUEST",
  };
};

const GetProfileSuccess = (data) => {
  return {
    type: "GET_PROFILE_SUCCESS",
    payload: data,
  };
};

const GetProfileError = (error) => {
  return {
    type: "GET_PROFILE_ERROR",
    payload: error,
  };
};

export const GetProfile = () => {
  return (dispatch) => {
    dispatch(GetProfileRequest());
    axios({
      method: "GET",
      url: "https://peworld-be.vercel.app/api/v1//profile/sort?page=1&limit=4&order_by=profile_job_type&sort=desc",
    })
      .then((res) => {
        dispatch(GetProfileSuccess(res.data));
      })
      .catch((err) => {
        dispatch(GetProfileError(err.response));
      });
  };
};