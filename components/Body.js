import restaurants from "../utils/mockData";
import RestaurantCard from "./RestaurantCards";
import { useState } from "react";

const Body = () => {
  const [restaurant, setRestaurant] = useState(restaurants);
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
