import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../utils/store/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  // const items = useSelector((state) => state.cart.items);
  console.log(cart);
  const totalPrice = cart.reduce((acc, it) => {
    return (
      acc +
      it.quantity *
        it.itemCards.reduce((acc, it) => {
          return acc + it.card.info.price / 100;
        }, 0)
    );
  }, 0);
  function removeHandle(index) {
    dispatch(removeItem(index));
  }
  return (
    <>
      <h1 className="font-bold text-center my-3 text-3xl text-slate-500">
        Your Cart -
        {cart.length === 0 ? (
          <span>Empty</span>
        ) : (
          <span className="text-slate-400-200">{Math.floor(totalPrice)}Rs</span>
        )}
      </h1>
      <div className="border-2  w-3/4 m-auto my-2 shadow-md	 rounded-md">
        {cart.map((item, i) =>
          item.itemCards.map((itemcard) => (
            <div
              key={itemcard.card.info.id}
              className="p-2 m-2 flex justify-between"
            >
              <div className="w-9/12 flex-grow">
                <span className="font-bold">{itemcard.card.info.name}</span>
                <span className="mx-2 font-bold text-gray-600">
                  {itemcard.card.info.price / 100} Rs
                </span>
                <p className="text-xs">{itemcard.card.info.description}</p>
              </div>
              <div className="relative w-3/12">
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                    itemcard.card.info.imageId
                  }
                  className="rounded-md w-auto"
                  alt={itemcard.card.info.name}
                />
                <button
                  className="absolute bottom-2 right-2 bg-white text-green-500 px-2 py-2 rounded-md w-32"
                  onClick={() => removeHandle(itemcard.card.info.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Cart;
