import React, { useState } from "react";
import { episodes } from "../fakeStorage/episodes";
import Episode from "./episode";
import Pagination from "./pagination";
import { getPageItems } from "../utils/paginate";

const EpisodesList = () => {
  const totalItems = episodes.length;
  const pageSize = 8;

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const itemsCurntPage = getPageItems(episodes, currentPage, pageSize);

  return (
    <>
      <div className="container">
        <div className="row">
          {itemsCurntPage.map((episode) => (
            <Episode key={episode.id} {...episode} />
          ))}
        </div>
        <div className="row">
          <Pagination
            totalItems={totalItems}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
};

export default EpisodesList;
