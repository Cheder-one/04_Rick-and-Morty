import React, { useState } from "react";
import Episode from "./episode";
import Pagination from "./pagination";
import { getPageItems } from "../utils/paginate";
import GroupList from "./groupList";
import { episodes, fetchYears } from "../fakeApi/episodesApi";

const EpisodesList = () => {
  const totalItems = episodes.length;
  const pageSize = 8;

  const [currentPage, setCurrentPage] = useState(1);
  // const [episodes, setEpisodes] = useState([]);
  const [years] = useState(fetchYears);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const itemsCurntPage = getPageItems(episodes, currentPage, pageSize);
  return (
    <>
      <div className="container pt-2">
        <div className="row">
          <div className="col-4">
            <GroupList seriesYears={years} />
          </div>
          <div className="col-8">
            <div style={{ height: "500px" }}>
              <div className="row">
                {itemsCurntPage.map((episode) => (
                  <Episode key={episode.id} {...episode} />
                ))}
              </div>
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
        </div>
      </div>
    </>
  );
};

export default EpisodesList;
