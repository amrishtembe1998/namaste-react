import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="flex justify-between">
          <div className="p-2 m-2 border-b-2 border-gray-200 text-left w-9/12">
            <div>
              <span className="text-lg font-bold">{item.card.info.name}</span>
            </div>
            <span className="text-sm font-bold">
              ₹{" "}
              {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </span>
            <p className="text-xs w-11/12">{item.card.info.description}</p>
          </div>
          <div className="p-4 w-3/12">
            <div className="absolute">
              <button
                className="p-2 mx-12 bg-gray-400 rounded-lg"
                onClick={() => addItemToCart(item)}
              >
                Add +
              </button>
            </div>
            <img
              className="w-full"
              src={`${CDN_URL}${item.card.info.imageId}`}
              alt={`${item.card.info.name}`}
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
