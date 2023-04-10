import React from "react";
import PropTypes from "prop-types";

const GroupList = ({ items, filter, onFilterChange }) => {
  return (
    <div className="list-group">
      {items.map((item) => (
        <button
          className={
            "list-group-item list-group-item-action" +
            (item.id === filter ? " active" : "")
          }
          onClick={() => onFilterChange(item.id)}
          key={item.id}
        >
          {item.text}
        </button>
      ))}
    </div>
  );
};

GroupList.propTypes = {
  items: PropTypes.array.isRequired,
  filter: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired
};

export default GroupList;
