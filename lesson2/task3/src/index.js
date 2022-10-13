import { usersStore } from "./store.js";
import { addUser, deleteUser } from "./users.actions.js";

usersStore.dispatch(addUser({ name: "Sarah", id: 76 }));
usersStore.dispatch(addUser({ name: "John", id: 17 }));
usersStore.dispatch(addUser({ name: "Raiden", id: 19 }));
usersStore.dispatch(addUser({ name: "Sem", id: 22 }));
usersStore.dispatch(deleteUser(17));

console.log(usersStore.getState());
