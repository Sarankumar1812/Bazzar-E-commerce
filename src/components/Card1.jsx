import React, { useEffect, useState } from "react";

const CategoryCards = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        const orderedCategories = [
          "men's clothing",
          "women's clothing",
          "jewelery",
          "electronics",
        ];
        setCategories(orderedCategories);
      })
      .catch((error) => console.log("Error fetching products: ", error));
  }, []);

  const toCamelCase = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="grid grid-cols-4 gap-6 pt-8 pb-8 px-8">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-md shadow-lg transition-transform duration-200 transform hover:scale-105 group"
        >
          <img
            src={
              products.find((product) => product.category === category)?.image
            }
            alt={category}
            className="h-40 w-40 object-contain mx-auto mb-4"
          />
          <h2 className="text-center text-lg font-semibold transition-colors duration-200 p-2 rounded group-hover:bg-slate-600  group-hover:text-white">
            {toCamelCase(category)}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default CategoryCards;
