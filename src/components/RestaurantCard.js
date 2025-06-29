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
    <div className="m-4 p-2 w-60 max-h-[400px] min-h-[400px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="max-h-40 w-100 rounded-lg"
        alt="res-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
      ></img>
      <h3 className="text-2xl font-semibold my-2 text-red-500">{name}</h3>
      <h4 className="res-menu">{cuisines.join(", ")}</h4>
      <h4 className="res-rating">{avgRatingString}</h4>
      <h4 className="res-cost">Rs.{costForTwo}</h4>
      <h4 className="res-delivery">{sla.slaString}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}></RestaurantCard>
      </div>
    );
  };
};

export default RestaurantCard;
