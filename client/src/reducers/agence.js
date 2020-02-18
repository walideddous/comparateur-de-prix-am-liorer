import { GET_USER_BYID, USER_ERROR } from "../actions/types";

const initialState = {
  profile: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_BYID:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case USER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
