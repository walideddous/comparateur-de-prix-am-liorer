import axios from "axios";
import { setAlert } from "./alert";
import { GET_ALL_USERS, DELETE_USER_BYID } from "./types";

// Get all Users
export const getAllUsers = () => async dispatch => {
  try {
    const res = await axios.get("/api/profile_admin");
    const reponses = res.data;
    dispatch({
      type: GET_ALL_USERS,
      payload: reponses
    });
  } catch (ex) {
    dispatch(setAlert(ex.response.data));
  }
};

// Delete user ById
export const deleteUser = id => async dispatch => {
  if (id) {
    var result = window.confirm(
      "Voulez vous vraiment éffacé cette utilisateur ?"
    );
    if (result) {
      try {
        await axios.delete(`/api/profile_admin/${id}`);
        dispatch({
          type: DELETE_USER_BYID,
          payload: id
        });
      } catch (ex) {
        dispatch(setAlert(ex.response.data));
      }
    }
  }
};
