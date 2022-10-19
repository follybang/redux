import React from "react";
import { connect } from "react-redux";
import { nextPage, prevPage } from "../users.actions.js";
import Pagination from "./Pagination.jsx";
import User from "./User.jsx";
import { usersListSelector, currentPageSelector } from "../users.selectors.js";

const Users = ({ usersList, currentPage, nextPage, prevPage }) => {
  const itemsPerPage = 3;
  const startIndex = currentPage * itemsPerPage;

  return (
    <div>
      <Pagination
        goPrev={prevPage}
        goNext={nextPage}
        currentPage={currentPage}
        totalItems={usersList.length}
        itemsPerPage={itemsPerPage}
      />

      <ul className="users">
        {usersList.slice(startIndex, startIndex + itemsPerPage).map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    usersList: usersListSelector(state),
    currentPage: currentPageSelector(state),
  };
};

const mapDispatch = {
  nextPage,
  prevPage,
};

const connector = connect(mapState, mapDispatch);

export default connector(Users);
