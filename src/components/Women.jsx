import React, { useState, useEffect } from "react";
import ProductCard1 from "./ProductCard1";
import { useCart } from "../components/CartContext"; 

const Women = () => {
  const [deals, setDeals] = useState([]);
  const { addToCart, removeFromCart, cartItems } = useCart(); 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        const womenProducts = json.filter(product => product.category === "women's clothing");
        setDeals(womenProducts);
      });
  }, []);

  const isProductInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  return (
    <div className="my-8 max-w-screen-lg mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-48 gap-y-6 -ml-40">
        {deals.map((product) => (
          <div key={product.id} className="p-2">
            <ProductCard1 
              product={product}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              isInCart={isProductInCart(product.id)} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Women;
