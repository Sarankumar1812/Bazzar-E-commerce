import React, { useState, useEffect } from "react";
import { useCart } from "../components/CartContext";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, cartItems, removeFromCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const handleCartAction = (product) => {
    const isInCart = cartItems.find((item) => item.id === product.id);

    if (isInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-10 mr-10 my-8">
      {products.map((product) => {
        const isInCart = cartItems.find((item) => item.id === product.id);
        return (
          <div
            key={product.id}
            className="relative max-w-xs mx-auto border rounded-sm shadow-lg flex flex-col justify-between items-center bg-white transition-all duration-300 hover:border-white hover:shadow-2xl hover:bg-white"
            style={{ height: "450px", width: "350px" }}
          >
            <div className="absolute top-2 right-2 flex flex-col space-y-2">
              <button className="text-gray-400 hover:text-gray-600">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4.5C7.305 4.5 3.463 7.375 1.685 12c1.778 4.625 5.62 7.5 10.315 7.5s8.537-2.875 10.315-7.5C20.537 7.375 16.695 4.5 12 4.5zm0 12c-2.8 0-5.25-2.25-5.25-5s2.45-5 5.25-5 5.25 2.25 5.25 5-2.45 5-5.25 5z" />
                  <circle cx="12" cy="12" r="2.5" />
                </svg>
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>
            </div>

            <div className="p-4 flex-grow flex justify-center items-center">
              <img
                className="mx-auto h-48 object-contain"
                src={product.image}
                alt={product.title}
              />
            </div>

            <hr className="border-gray-700 w-full opacity-10 transition-opacity hover:" />

            <div className="text-center p-4 flex flex-col justify-center items-center w-full">
              <h3
                className="text-gray-800 text-lg font-semibold truncate overflow-hidden text-ellipsis whitespace-nowrap"
                style={{ maxWidth: "100%" }}
              >
                {product.title}
              </h3>
              <p className="text-gray-600 text-xl font-bold mt-2">
                ${product.price}
              </p>

              <button
                className={`font-semibold py-2 px-4 mt-4 border rounded-sm w-full transition-all duration-300 ${
                  isInCart
                    ? "bg-red-300 text-white border-red-300 hover:bg-red-300"
                    : "bg-white text-gray-800 border-gray-600 hover:bg-slate-700 hover:text-white"
                }`}
                onClick={() => {
                  if (isInCart) {
                    removeFromCart(product.id); 
                  } else {
                    handleCartAction(product); 
                  }
                }}
              >
                {isInCart ? "Remove From Cart" : "Add To Cart"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
