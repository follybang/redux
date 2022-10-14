import { createStore, combineReducers } from "redux";
import usersReducer from "./users.reducer.js";
import counterReduser from "./counter.reducer.js";

const appReducer = combineReducers({
  counter: counterReduser,
  users: usersReducer,
});

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
