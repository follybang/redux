import { createStore, combineReducers } from "redux";
import { languageReducer } from "./language.reducer.js";
import { cartReducer } from "./cart.reducer.js";
import { userReducer } from "./user.reducer.js";

const appReducer = combineReducers({
  language: languageReducer,
  cart: cartReducer,
  user: userReducer,
});

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
