import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Task = ({ id, done, text, onDelete, onCheckboxChange }) => {
  return (
    <li className={classNames("list-item", { "list-item_done": done })}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => onCheckboxChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button
        className="list-item__delete-btn"
        onClick={() => onDelete(id)}
      ></button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
};

export default Task;
