import { CDN_URL } from "../utils/constants";

const RestaurantCard = (prop) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } =
    prop.restData.info;
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-300 rounded">
      <img
        className="rounded-xl min-w-50 max-w-50 max-h-40 min-h-40"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h2 className="font-bold py-2 text-lg hover:text-purple-600">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{`${sla.deliveryTime} mins`}</h4>
    </div>
  );
};

export default RestaurantCard;
