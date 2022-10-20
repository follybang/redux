import React from "react";

const Options = ({ title, options }) => {
  return (
    <div className="options">
      <div className="options__title">{title}</div>
      <ul className="options__list">
        {options.map((option) => (
          <li key={option.id}>
            <button className="options__list-item">{option.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Options;
