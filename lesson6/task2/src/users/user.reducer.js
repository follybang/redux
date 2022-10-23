import { SHOW_SPINNER, USER_DATA_RECEIVED } from "./user.actions.js";

const initState = {
  isFetching: false,
  userData: null,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        isFetching: true,
      };
    case USER_DATA_RECEIVED:
      return {
        ...state,
        userData: action.payload,
        isFetching: false,
      };

    default:
      return state;
  }
};

export default userReducer;
