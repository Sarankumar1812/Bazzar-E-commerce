import React, { useState, useEffect } from "react";
import ProductCard1 from "./ProductCard1"; 

const DealsOfTheDay = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        const shuffledProducts = json.sort(() => Math.random() - 0.5);
        setDeals(shuffledProducts.slice(0, 4)); 
      });
  }, []);

  return (
    <div className="my-8 max-w-screen-lg mx-auto">
      <div className="flex flex-row justify-center items-center gap-32 mr-10 ">
        {deals.map((product) => (
          <div key={product.id} className="w-1/4 p-2">
            <ProductCard1 product={product} /> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsOfTheDay;
