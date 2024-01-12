import RestaurantCard from "./RestaurantCards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.0000992&lng=73.2905413&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    const dataToset = await json?.data?.cards[1]?.card?.card?.gridElements
      ?.infoWithStyle?.restaurants;
    setRestaurant(dataToset);
  };

  if (restaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = restaurant.filter(
              (res) => res.info.avgRating >= 4.4
            );
            setRestaurant(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurant.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} restData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
