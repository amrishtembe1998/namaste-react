import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const { title, itemCards } = data;
  // const [showItems, setShowItems] = useState(false);
  const onClickHandler = () => {
    setShowIndex();
    // setShowIndex(() => )
  };
  return (
    <div>
      <div className="shadow-lg bg-gray-100 w-1/2 p-2 mx-auto my-2">
        <div
          className="flex justify-between cursor-pointer"
          onClick={onClickHandler}
        >
          <span className="font-bold text-lg p-2">
            {title} ({itemCards?.length})
          </span>
          <span className="font-bold text-lg px-2">⇓</span>
        </div>
        {showItems ? <ItemList items={itemCards}></ItemList> : null}
      </div>
    </div>
  );
};

export default RestaurantCategory;
