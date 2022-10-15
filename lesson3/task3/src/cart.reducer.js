import { ADD_PRODUCT } from "./cart.actions.js";
import { REMOVE_PRODUCT } from "./cart.actions.js";

const initialState = {
  products: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        products: [...state.products].concat(action.payload),
      };
    }

    case REMOVE_PRODUCT: {
      const newProductsList = state.products.filter(
        (obj) => obj.id !== action.payload
      );
      return {
        ...state,
        products: newProductsList,
      };
    }

    default:
      return state;
  }
};
