import { createStore } from "redux";
import { userDataReducer } from "./users.reducer.js";

export const usersStore = createStore(userDataReducer);
