import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.996466&lng=73.28980419999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    const resList =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurant(resList);
    setFilteredRestaurant(resList);
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              filteredList = listOfRestaurant.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4.4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top rated restaurant
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.length > 0 ? (
          filteredRestaurant?.map((res) => (
            <Link to={`/restaurants/${res.info.id}`} key={res.info.id}>
              <RestaurantCard resData={res}></RestaurantCard>
            </Link>
          ))
        ) : (
          <Shimmer></Shimmer>
        )}
      </div>
    </div>
  );
};

export default Body;
