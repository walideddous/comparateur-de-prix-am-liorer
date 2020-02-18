import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import car from "./car";
import agence from "./agence";

export default combineReducers({ alert, auth, car, agence });
