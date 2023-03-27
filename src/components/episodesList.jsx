import React from "react";
import { episodes } from "../fakeStorage/episodes";
import Episode from "./episode";
import Pagination from "./pagination";

const EpisodesList = () => {
  const totalItems = episodes.length;
  const itemsPerPage = 8;

  const handlePageChange = (pageNumber) => {
    console.log(`active page: ${pageNumber}`);
  };

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
          />
        </div>
      </div>
    </>
  );
};

export default EpisodesList;
