import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/store/cartSlice";

function ItemList({ data }) {
  const dispatch = useDispatch();

  function handleAddItem(item) {
    dispatch(addItem(item));
  }

  return (
    <div className="p-4">
      {data?.categories?.map((category) => (
        <div key={category.title} className="my-4">
          <h2 className="text-lg font-bold mb-2">{category.title}</h2>
          {category.itemCards.map((itemCard) => (
            <div
              key={itemCard.card.info.id}
              className="p-4 border-b border-gray-200 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4"
            >
              <div className="w-full sm:w-9/12 flex-grow">
                <span className="font-bold text-lg">
                  {itemCard.card.info.name}
                </span>
                <span className="mx-2 font-semibold text-gray-600">
                  {itemCard.card.info.price / 100} Rs
                </span>
                <p className="text-sm text-gray-500 mt-1">
                  {itemCard.card.info.description}
                </p>
              </div>
              <div className="relative w-full sm:w-3/12 flex-shrink-0">
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                    itemCard.card.info.imageId
                  }
                  className="rounded-md w-full max-h-40 object-cover"
                  alt={itemCard.card.info.name}
                />
                <button
                  className="absolute bottom-2 right-2 bg-white text-green-500 px-4 py-2 rounded-md shadow-md"
                  onClick={() => handleAddItem(itemCard.card.info)}
                >
                  ADD +
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ItemList;
