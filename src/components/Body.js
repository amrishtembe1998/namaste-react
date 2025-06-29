import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [inputText, setInputText] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);
  const RestaurantCardWithPromoted = withPromotedLabel(RestaurantCard);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.516078&lng=73.78161539999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    const resList =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurant(resList);
    setFilteredRestaurant(resList);
  }
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>User is Offline</h1>;
  return (
    <div className="bg-green-200">
      <div className="flex items-center">
        <div className="p-4">
          <input
            type="text"
            className="border-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            onClick={() => {
              filteredList = listOfRestaurant.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}
            type="button"
            className="mx-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4.4
            );
            setListOfRestaurant(filteredList);
          }}
          type="button"
          className="mx-4 max-h-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Top rated restaurant
        </button>
        <input
          className="border-2 m-2 p-2"
          type="text"
          value={loggedInUser}
          onChange={(e) => {setUserName(e.target.value)}}
        ></input>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.length > 0 ? (
          filteredRestaurant?.map((res) =>
            res.info.isOpen ? (
              <Link to={`/restaurants/${res.info.id}`} key={res.info.id}>
                <RestaurantCardWithPromoted
                  resData={res}
                ></RestaurantCardWithPromoted>
              </Link>
            ) : (
              <Link to={`/restaurants/${res.info.id}`} key={res.info.id}>
                <RestaurantCard resData={res}></RestaurantCard>
              </Link>
            )
          )
        ) : (
          <Shimmer></Shimmer>
        )}
      </div>
    </div>
  );
};

export default Body;
