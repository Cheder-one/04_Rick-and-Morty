import React, { useEffect, useState } from "react";
import Episode from "./episode";
import Pagination from "./pagination";
import { getPageItems } from "../utils/paginate";
import FilterList from "./filterList";
import { fetchAll, fetchYears } from "../fakeApi/episodesApi";

const EpisodesList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [episodes, setEpisodes] = useState([]);
  const [years] = useState([]);
  const [filter, setFilter] = useState();

  const totalItems = episodes.length;
  const pageSize = 8;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Запрашиваем список эпизодов когда...
  const getFilteredEpisodes = (year) => {
    fetchAll(year).then((response) => setEpisodes(response));
    setCurrentPage(1);
  };
  // ...меняется фильтр годов
  useEffect(() => {
    getFilteredEpisodes(filter);
  }, [filter]);

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const itemsCurntPage = getPageItems(episodes, currentPage, pageSize);
  return (
    <>
      <div className="container pt-2">
        <div className="row">
          <div className="col-4">
            <FilterList
              yearsEpisodes={years}
              filter={filter}
              onFilterChange={handleFilterChange}
            />
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
