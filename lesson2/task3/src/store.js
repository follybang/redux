import { createStore } from "redux";
import { userDataReducer } from "./users.reducer.js";

const usersStore = createStore(userDataReducer);

export default usersStore;
