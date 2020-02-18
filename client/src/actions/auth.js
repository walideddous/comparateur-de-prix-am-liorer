import axios from "axios";
import { setAlert } from "./alert";
import setAuthToken from "./../utils/setAuthToken";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from "./types";

//Register User
export const register = formData => async dispatch => {
  if (formData) {
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };

    const body = JSON.stringify({ ...formData });

    try {
      const res = await axios.post("/api/users", body, config);
      const token = res.headers["x-auth-token"];
      dispatch({
        type: REGISTER_SUCCESS,
        payload: token
      });
      dispatch(loadUser());
    } catch (ex) {
      console.log(ex);
      dispatch(setAlert(ex.response.data));
      dispatch({ type: REGISTER_FAIL });
    }
  }
};

//Login user
export const login = ({ email, password }) => async dispatch => {
  if (email && password) {
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };

    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post("/api/auth", body, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      dispatch(loadUser());
    } catch (ex) {
      dispatch(setAlert(ex.response.data));
      dispatch({
        type: LOGIN_FAIL
      });
    }
  }
};

//Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
    try {
      const res = await axios.get("/api/auth/me");
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    } catch (ex) {
      dispatch({
        type: AUTH_ERROR
      });
    }
  }
};

// Logout / Clear Profie
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
