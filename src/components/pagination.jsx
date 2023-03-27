import _ from "lodash";
import React from "react";

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);
  const pages = _.range(1, numberOfPages + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((pageNum) => (
          <li className="page-item" key={"page_" + pageNum}>
            <button className="page-link">{pageNum}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
