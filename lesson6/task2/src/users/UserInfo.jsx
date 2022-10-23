import React from "react";
import Spinner from "./Spinner.jsx";
import { connect } from "react-redux";
import { showSpinner } from "./user.actions.js";

const UserInfo = ({ userData, isFetching }) => {
  if (isFetching) {
    return <Spinner />;
  }

  if (!userData) {
    return null;
  }

  return (
    <div className="user">
      <img
        src={userData.avatar_url}
        alt="User Avatar"
        className="user__avatar"
      />
      <div className="user__info">
        <span className="user__name">{userData.name}</span>
        <span className="user__location">{userData.location}</span>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    userData: state.userData,
    isFetching: state.isFetching,
  };
};

const mapDispatch = {
  showSpinner,
};

export default connect(mapState, mapDispatch)(UserInfo);
