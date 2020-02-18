import {
  GET_CAR,
  GET_CAR_FAILED,
  ADD_CAR_FAILED,
  DELETE_CAR_FAILED,
  EDIT_CAR_FAILED
} from "../actions/types";

const initialState = {
  voitures: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CAR:
      return {
        ...state,
        loading: false,
        voitures: payload
      };
    case GET_CAR_FAILED:
    case ADD_CAR_FAILED:
    case DELETE_CAR_FAILED:
    case EDIT_CAR_FAILED:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
}
