import { NEXT_PAGE, PREV_PAGE } from "./users.actions.js";

const users = [
  {
    id: "id-0",
    age: 21,
    name: "Bob",
  },
  {
    id: "id-1",
    age: 17,
    name: "Tom",
  },
  {
    id: "id-2",
    age: 18,
    name: "Tad",
  },
  {
    id: "id-3",
    age: 45,
    name: "Justin",
  },
  {
    id: "id-4",
    age: 45,
    name: "Franklin",
  },
  {
    id: "id-5",
    age: 45,
    name: "John",
  },
];

const initState = {
  usersList: users,
  currentPage: 0,
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case NEXT_PAGE: {
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    }

    case PREV_PAGE: {
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    }

    default:
      return state;
  }
};

export default usersReducer;
