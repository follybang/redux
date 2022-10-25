import React, { useState } from "react";
import PropTypes from "prop-types";

const CreateTaskInput = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    addTask(value);
    setValue("");
  };

  return (
    <div className="create-task">
      <input
        type="text"
        className="create-task__input"
        value={value}
        onChange={handleChange}
      />
      <button className="btn create-task__btn" onClick={handleClick}>
        Create
      </button>
    </div>
  );
};

CreateTaskInput.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default CreateTaskInput;
