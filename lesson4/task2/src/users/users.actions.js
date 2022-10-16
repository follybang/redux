export const ADD_USER = "USERS/ADD";
export const DELETE_USER = "USERS/DELETE";

export const addUser = ({ id, name }) => {
  return {
    type: ADD_USER,
    payload: { id, name },
  };
};

export const deleteUser = (userId) => {
  return {
    type: DELETE_USER,
    payload: userId,
  };
};
