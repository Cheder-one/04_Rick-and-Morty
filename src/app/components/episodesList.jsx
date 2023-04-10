import React, { useEffect, useState } from "react";
import Episode from "./episode";
import Pagination from "./pagination";
import { getPageItems } from "../utils/paginate";
import GroupList from "./groupList";
import { fetchAll, fetchYears } from "../fakeApi/episodesApi";

const EpisodesList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [episodes, setEpisodes] = useState([]);
  const [years, setYears] = useState([]);
  const [filter, setFilter] = useState();

  const totalItems = episodes.length;
  const pageSize = 6;

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

  useEffect(() => {
    fetchYears().then((response) => setYears(response));
  }, []);

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const itemsCurntPage = getPageItems(episodes, currentPage, pageSize);
  return (
    <>
      <div className="container pt-2">
        <div className="row">
          <div className="col-4">
            <GroupList
              items={years}
              filter={filter}
              valueProperty="id"
              contentProperty="text"
              onFilterChange={handleFilterChange}
            />
          </div>
          <div className="col-8">
            <div style={{ height: "400px" }}>
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
