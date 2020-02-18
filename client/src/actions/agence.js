import axios from "axios";
import { GET_USER_BYID, USER_ERROR } from "./types";

export const getUser = () => async dispatch => {
  try {
    const res = await axios.get("/api/profile_agence/me");
    dispatch({
      type: GET_USER_BYID,
      payload: res.data
    });
  } catch (ex) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: ex.response.statusText, status: ex.response.status }
    });
  }
};
