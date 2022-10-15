import store from "./store.js";
import { setLanguage } from "./language.actions.js";
import { addProduct, removeProduct } from "./cart.actions.js";
import { setUser, removeUser } from "./user.actions.js";

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(setLanguage("jp"));
store.dispatch(addProduct({ id: 76, name: "milk" }));
store.dispatch(addProduct({ id: 19, name: "shrimp" }));
store.dispatch(setUser({ name: "Raiden" }));
store.dispatch(removeProduct(19));
store.dispatch(removeUser());
