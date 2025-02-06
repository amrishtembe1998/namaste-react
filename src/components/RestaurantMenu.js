import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const params = useParams();
  console.log(params.reqId);
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${MENU_API}${params.reqId}`);
    const json = await data.json();
    console.log(
      "*************************",
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
    );
    console.log(
      "*****",
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
    setResInfo(json.data);
  };
  if (resInfo === null) {
    return <Shimmer></Shimmer>;
  }
  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const menus =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines?.join(", ")} {costForTwoMessage}
      </h3>
      <h2>Menu</h2>
      <ul>
        {menus?.map((menu) => (
          <li key={menu?.card?.info?.id}>
            {menu?.card?.info?.name} - Rs.
            {Number(menu?.card?.info?.price) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
