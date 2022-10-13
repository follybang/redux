import { ADD, DELETE } from "./users.actions.js";

const initialState = {
  usersList: [],
};

export const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        usersList: state.usersList.concat(action.data),
      };
    case DELETE:
      const newUsersList = state.usersList.filter((el) => el.id !== action.id);
      return {
        ...state,
        usersList: newUsersList,
      };
    default:
      return state;
  }
};
