export const SHOW_SPINNER = "SHOW_SPINNER";
export const USER_DATA_RECEIVED = "USER_DATA_RECIEVED";
const baseUrl = "https://api.github.com/users";

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
  };
};

export const userDataReceived = (userData) => {
  return {
    type: USER_DATA_RECEIVED,
    payload: userData,
  };
};

export const fetchUserData = (userName) => {
  return function (dispatch) {
    fetch(`${baseUrl}/${userName}`)
      .then((response) => response.json())
      .then((userData) => dispatch(userDataReceived(userData)));
  };
};
