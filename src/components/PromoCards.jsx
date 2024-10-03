import React from "react";
import A1 from "../assets/A1.jpg"; 
import A2 from "../assets/A2.jpg";
import A3 from "../assets/A3.jpg";

const PromoCards = () => {
  const promoItems = [
    {
      title: "SKI CLOTHES SALE",
      description: "Up to 35% Off",
      buttonText: "Shop Now",
      img: A1,
      tag: "NEW ARRIVALS",
      tagColor: "text-gray-600",
      textColor: "text-red-500",
    },
    {
      title: "TRENDING WOMEN SUNGLASSES",
      description: "",
      buttonText: "Shop Now",
      img: A2,
      tag: "BEST SELLER",
      tagColor: "text-white",
      textColor: "text-white",
    },
    {
      title: "NEW LATEST BAG COLLECTION",
      description: "",
      buttonText: "Shop Now",
      img: A3,
      tag: "NEW ARRIVALS",
      tagColor: "text-gray-600",
      textColor: "text-gray-800",
    },
  ];

  return (
    <div className="grid grid-cols-1  md:grid-cols-3 gap-4 my-8 mx-10">
      {promoItems.map((item, index) => (
        <div
          key={index}
          className="relative bg-cover bg-center rounded-md shadow-lg overflow-hidden"
          style={{
            backgroundImage: `url(${item.img})`,
            height: "300px",
          }}
        >

          <div className="absolute inset-0 bg-black opacity-30"></div>

        
          <div className="relative z-10 p-6 h-full flex flex-col justify-center text-left">
            <span className={`uppercase text-sm mb-2 ${item.tagColor}`}>
              {item.tag}
            </span>
            <h3 className={`font-bold text-2xl mb-4 ${item.textColor}`}>
              {item.title}
            </h3>
            {item.description && (
              <p className={`text-lg mb-6 ${item.textColor}`}>
                {item.description}
              </p>
            )}
            <a
              href="#"
              className={`font-semibold ${item.textColor} hover:underline flex items-center`}
            >
              {item.buttonText}
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PromoCards;
