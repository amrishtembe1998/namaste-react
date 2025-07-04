import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (reqId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${MENU_API}${reqId}`);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
