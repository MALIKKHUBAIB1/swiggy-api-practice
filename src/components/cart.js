import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../utils/store/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  console.log(cart);
  const totalPrice = cart?.reduce((acc, item) => {
    return acc + item.price / 100;
  }, 0);
  console.log(totalPrice);

  function removeHandle(id) {
    console.log(id);
    dispatch(removeItem(id));
  }

  return (
    <>
      <h1 className="font-bold text-center my-3 text-3xl text-slate-500">
        Your Cart -
        {cart.length === 0 ? (
          <span>Empty</span>
        ) : (
          <span className="text-slate-400-200">
            {Math.floor(totalPrice)} Rs
          </span>
        )}
      </h1>
      <div className="border-2 w-3/4 m-auto my-2 shadow-md rounded-md">
        {cart.map((itemcard, i) => (
          <div key={itemcard.id} className="p-2 m-2 flex justify-between">
            <div className="w-9/12 flex-grow">
              <span className="font-bold">{itemcard.name}</span>
              <span className="mx-2 font-bold text-gray-600">
                {itemcard.price / 100} Rs
              </span>
              <p className="text-xs">{itemcard.description}</p>
            </div>
            <div className="relative w-3/12">
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                  itemcard.imageId
                }
                className="rounded-md w-auto"
                alt={itemcard.name}
              />
              <button
                className="absolute bottom-2 right-2 bg-white text-green-500 px-2 py-2 rounded-md w-32"
                onClick={() => removeHandle(itemcard.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;
