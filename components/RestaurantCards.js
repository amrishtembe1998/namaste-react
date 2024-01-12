import { CDN_URL } from "../utils/constants";

const RestaurantCard = (prop) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } =
    prop.restData.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime + "min"}</h4>
    </div>
  );
};

export default RestaurantCard;
