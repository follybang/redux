import React from "react";
import { connect } from "react-redux";
import { addUser, deleteUser } from "./users.actions.js";

const Users = ({ users, addUser, deleteUser }) => {
  const handleCreateUser = () => {
    const id = Math.round(Math.random() * 100000);
    const newUser = {
      id,
      name: `User # ${id}`,
    };
    addUser(newUser);
  };

  return (
    <div className="users">
      <button onClick={handleCreateUser} className="users__create-btn">
        Create User
      </button>
      <ul className="users__list">
        {users.map((user) => (
          <li className="users__list-item" key={user.id}>
            <span> {user.name}</span>

            <button
              onClick={() => deleteUser(user.id)}
              className="users__delete-btn"
            >
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    users: state.usersList,
  };
};

const mapDispatch = {
  addUser,
  deleteUser,
};

const connector = connect(mapState, mapDispatch);

export default connector(Users);
