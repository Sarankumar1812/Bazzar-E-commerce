import React from "react";
import B1 from "../assets/B1.png";
import B2 from "../assets/B2.png";
import B3 from "../assets/B3.png";
import B4 from "../assets/B4.png";
import B5 from "../assets/B5.png";
const BrandLogos = () => {
  const brands = [
    { name: "Alibaba", imgSrc: B1 },
    { name: "Levi's", imgSrc: B2 },
    { name: "Lotto", imgSrc: B3 },
    { name: "Raymond", imgSrc: B4 },
    { name: "Samsung", imgSrc: B5 },
  ];

  return (
    <div className="bg-white py-6 ml-10 mr-10">
      <div className="flex justify-center gap-24 ">
        {brands.map((brand, index) => (
          <div key={index} className="flex justify-around items-center gap-20 ">
            <img
              src={brand.imgSrc}
              alt={brand.name}
              className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandLogos;
