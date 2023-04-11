import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
  items,
  filter,
  valueProperty,
  contentProperty,
  onFilterChange
}) => {
  return (
    <div className="list-group">
      {items.map((item) => (
        <button
          className={
            "list-group-item list-group-item-action" +
            (item[valueProperty] === filter ? " active" : "")
          }
          onClick={() => onFilterChange(item[valueProperty])}
          key={item[valueProperty]}
        >
          {item[contentProperty]}
        </button>
      ))}
    </div>
  );
};

GroupList.defaultProps = {
  valueProperty: "id",
  contentProperty: "text"
};

GroupList.propTypes = {
  items: PropTypes.array.isRequired,
  filter: PropTypes.string,
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired
};

export default GroupList;
