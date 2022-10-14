import "./index.scss";
import store from "./store.js";
import { addUser, deleteUser } from "./users.actions.js";

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser({ id: 76, name: "Tom" }));
store.dispatch(addUser({ id: 59, name: "John" }));
store.dispatch(addUser({ id: 21, name: "Bob" }));
store.dispatch(deleteUser(59));
