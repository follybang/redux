import { ADD_USER, DELETE_USER, UPDATE_USER } from "./users.actions.js";

const initState = {
  usersList: [],
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_USER: {
      const newUser = action.payload;

      return {
        ...state,
        usersList: [...state.usersList].concat(newUser),
      };
    }

    case DELETE_USER: {
      const newUsersList = state.usersList.filter(
        (el) => el.id !== action.payload
      );

      return {
        ...state,
        usersList: newUsersList,
      };
    }

    case UPDATE_USER: {
      const updatedUsersList = state.usersList.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...user,
            ...action.payload.userData,
          };
        }

        return user;
      });

      return {
        ...state,
        usersList: updatedUsersList,
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
