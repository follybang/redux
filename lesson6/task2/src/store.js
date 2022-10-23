import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./users/user.reducer.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  counterReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
