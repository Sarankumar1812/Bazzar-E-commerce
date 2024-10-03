import React from "react";
import { useCart } from "../components/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  return (
    <div className="container mx-auto my-10 pl-60 pr-60">
      <h2 className="text-2xl font-semibold mb-5">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-32 w-32  border px-4 py-2 border-slate-600 rounded-sm "
              />
              <div className="flex flex-col flex-grow mx-6 gap-2">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-slate-500 font-bold">${item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-gray-200 px-2"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-gray-200 px-2"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
          ))}
          <div className="mt-6 flex justify-between items-center ">
            <h3 className="font-semibold">Total: ${totalPrice()}</h3>
            <button className=" bg-green-500 text-white py-2 px-4">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
