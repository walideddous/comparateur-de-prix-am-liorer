import axios from "axios";
import {
  GET_CAR,
  GET_CAR_FAILED,
  ADD_CAR_FAILED,
  DELETE_CAR_FAILED,
  EDIT_CAR_FAILED
} from "./types";

//avoir toute les voitures
export const avoirVoiture = id => async dispatch => {
  try {
    const res = await axios.get(`/api/profile_agence/${id}`);
    //    const resultat = res.data.filter(el => el.user === idUser);
    dispatch({
      type: GET_CAR,
      payload: res.data
    });
  } catch (ex) {
    dispatch({
      type: GET_CAR_FAILED,
      payload: { msg: ex.response.statusText, status: ex.response.status }
    });
  }
};

// ajouter une voiture

export const ajoutVoiture = voiture => async dispatch => {
  try {
    await axios.post("/api/profile_agence", voiture);
    const res = await axios.get("/api/profile_agence");
    dispatch({
      type: GET_CAR,
      payload: res.data
    });
  } catch (ex) {
    dispatch({
      type: ADD_CAR_FAILED,
      payload: { msg: ex.response.statusText, status: ex.response.status }
    });
  }
};

// supprimer une voiture

export const suppVoiture = id => async dispatch => {
  try {
    await axios.delete(`/api/profile_agence/${id}`);
    const res = await axios.get("/api/profile_agence");
    dispatch({
      type: GET_CAR,
      payload: res.data
    });
  } catch (ex) {
    dispatch({
      type: DELETE_CAR_FAILED,
      payload: { msg: ex.response.statusText, status: ex.response.status }
    });
  }
};

// editer
export const editerVoiture = (id, voiture) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    await axios.put(`/api/profile_agence/${id}`, voiture, config);

    const res = await axios.get("/api/profile_agence");
    console.log(res.data, "resultat");
    dispatch({
      type: GET_CAR,
      payload: res.data
    });
  } catch (ex) {
    dispatch({
      type: EDIT_CAR_FAILED,
      payload: { msg: ex.response.statusText, status: ex.response.status }
    });
  }
};
