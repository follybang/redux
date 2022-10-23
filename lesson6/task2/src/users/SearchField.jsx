import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchUserData, showSpinner } from "./user.actions.js";

const SearchField = ({ fetchUserData, showSpinner }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSearch = () => {
    showSpinner();
    fetchUserData(value);
  };

  return (
    <div className="name-form">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="name-form__input"
      />
      <button onClick={handleSearch} className="name-form__btn btn">
        Show
      </button>
    </div>
  );
};

const mapDispatch = {
  fetchUserData,
  showSpinner,
};

export default connect(null, mapDispatch)(SearchField);
