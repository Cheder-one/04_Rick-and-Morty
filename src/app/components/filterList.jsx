import React from "react";
import PropTypes from "prop-types";

const FilterList = ({ yearsEpisodes, filter, onFilterChange }) => {
  return (
    <div className="list-group">
      <button
        type="button"
        className="list-group-item list-group-item-action active"
        aria-current="true"
      >
        {"year"}
      </button>
    </div>
  );
};

// FilterList.propTypes = {
//   yearsEpisodes: PropTypes.string.isRequired,
//   filter: PropTypes.string.isRequired,
//   onFilterChange: PropTypes.func.isRequired
// };

export default FilterList;
