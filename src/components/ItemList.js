import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/store/cartSlice";
function ItemList({ data }) {
  const dispatch = useDispatch();
  console.log(dispatch);
  function handleAddItem(item) {
    dispatch(addItem(item));
  }
  return (
    <div className="">
      {data.categories.map((item) => {
        return (
          <div key={item.title} className="">
            {item.itemCards.map((itemcard) => {
              return (
                <div
                  key={itemcard.card.info.id}
                  className="p-2 m-2 border-gray-200 border-b-2 flex justify-between"
                >
                  <div className="w-9/12 flex-grow">
                    <span className="font-bold">{itemcard.card.info.name}</span>
                    <span className="mx-2 font-bold text-gray-600">
                      {itemcard.card.info.price / 100} Rs
                    </span>
                    <p className="text-xs">{itemcard.card.info.description}</p>
                  </div>
                  <div className="relative w-3/12 ">
                    <img
                      src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                        itemcard.card.info.imageId
                      }
                      className="rounded-md w-auto"
                    />
                    <button
                      className="absolute bottom-2 right-2 bg-white text-green-500 px- py-2 rounded-md w-32"
                      onClick={() => handleAddItem(item, itemcard.card.info.id)}
                    >
                      ADD +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default ItemList;
