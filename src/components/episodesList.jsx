import React, { useState } from "react";
import { episodes } from "../fakeStorage/episodes";
import Episode from "./episode";
import Pagination from "./pagination";

const EpisodesList = () => {
  const totalItems = episodes.length;
  const itemsPerPage = 8;

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    console.log(`pageNumber: ${pageNumber}`);
    setCurrentPage(pageNumber);
  };

  // const startIndex = (pageNumber - 1) * itemsPerPage;

  return (
    <>
      <div className="container">
        <div className="row">
          {episodes.map((episode) => (
            <Episode key={episode.id} {...episode} />
          ))}
        </div>
        <div className="row">
          <Pagination
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
};

export default EpisodesList;
