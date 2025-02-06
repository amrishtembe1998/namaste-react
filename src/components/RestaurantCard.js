import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRatingString,
    sla,
    costForTwo,
  } = resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
      ></img>
      <h3 className="res-name">{name}</h3>
      <h4 className="res-menu">{cuisines.join(", ")}</h4>
      <h4 className="res-rating">{avgRatingString}</h4>
      <h4 className="res-cost">Rs.{costForTwo}</h4>
      <h4 className="res-delivery">{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
