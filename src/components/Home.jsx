import React, { useState, useEffect } from "react";
import Banner1 from "../assets/banner-01.jpg";
import Banner2 from "../assets/banner-02.jpg";
import Banner3 from "../assets/banner-03.jpg";
import Banner4 from "../assets/banner-04.jpg";
import T1 from "../assets/T1.svg";
import T2 from "../assets/T2.svg";
import T3 from "../assets/T3.svg";
import T4 from "../assets/T4.svg";
import Card1 from "./Card1";
import Card2 from "./Card2";
import DealsOfTheDay from "./DealsOfTheDay";
import PromoCards from "./PromoCards";
import Brands from "./Brands";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: Banner1,
      title: "Lifestyle Collection",
      heading: "Men",
      saleText: "Sale Up to 30% OFF",
      description: "Get Free Shipping on orders over $99.00",
      buttonText: "Shop Now",
    },
    {
      image: Banner2,
      title: "Exclusive Offer",
      heading: "Women",
      saleText: "Sale Up to 50% OFF",
      description: "Save big on the latest trends.",
      buttonText: "Explore",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const { image, title, heading, saleText, description, buttonText } =
    slides[currentIndex];

  return (
    <div className="font-opensans bg-[#f3f5f9] ">
      <div className="grid grid-cols-3 gap-4 p-8">
        <div
          className="col-span-2 p-10 flex items-center bg-cover bg-center transition-all duration-700 ease-in-out"
          style={{ backgroundImage: `url(${image})`, height: "500px" }}
        >
          <div className="bg-opacity-80 p-8 rounded">
            <h3 className="text-3xl uppercase">{title}</h3>
            <h1 className="text-6xl font-bold my-4">{heading}</h1>
            <p className="text-2xl mb-4 text-red-600">{saleText}</p>
            <p className="mb-4 text-xl">{description}</p>
            <button className="bg-black text-white py-3 px-5">
              {buttonText}
            </button>
          </div>
        </div>

        <div className="col-span-1 space-y-4">
          <div
            className="bg-gray-100 p-6 bg-cover bg-center h-[240px] flex flex-col justify-between"
            style={{ backgroundImage: `url(${Banner3})` }}
          >
            <div>
              <h4 className="uppercase font-bold text-lg">New Arrivals</h4>
              <p className="text-md mb-2 text-red-600">
                Sale Up to <br />{" "}
                <span className="text-3xl font-bold pt-3">30% OFF</span>
              </p>
            </div>
            <button className="text-white self-start bg-black py-2 px-2">
              Shop Now →
            </button>
          </div>

          <div
            className="bg-gray-100 p-6 bg-cover bg-center h-[240px] flex flex-col justify-between"
            style={{ backgroundImage: `url(${Banner4})` }}
          >
            <div>
              <h4 className="uppercase font-bold text-lg">Electronic Items</h4>
              <p className="text-md mb-2 text-red-600">
                Sale Up to <br />{" "}
                <span className="text-3xl font-bold">50% OFF</span>
              </p>
            </div>
            <button className="text-white self-start bg-black py-2 px-2">
              Shop Now →
            </button>
          </div>
        </div>
      </div>

      <div className=" bg-white flex flex-row justify-center items-center gap-20 py-4 ml-8 mr-8">
        <li className="flex  gap-5 justify-center items-center border-r  border-r-slate-500 pr-20">
          <img src={T1} alt="img" className="h-16 " />
          <div>
            <h3>Fast Delivery</h3>
            <p className="text-slate-500">Start from $10</p>
          </div>
        </li>
        <li className="flex  gap-5 justify-center items-center  border-r  border-r-slate-500 pr-20">
          <img src={T2} alt="img" className="h-16 " />
          <div>
            <h3>Money Guarantee</h3>
            <p className="text-slate-500">7 Days Back</p>
          </div>
        </li>
        <li className="flex  gap-5 justify-center items-center border-r  border-r-slate-500 pr-20">
          <img src={T3} alt="img" className="h-16 " />
          <div>
            <h3>365 Days</h3>
            <p className="text-slate-500">For free return</p>
          </div>
        </li>
        <li className="flex  gap-5 justify-center items-center ">
          <img src={T4} alt="img" className="h-16 " />
          <div>
            <h3>Payment</h3>
            <p className="text-slate-500">Secure system</p>
          </div>
        </li>
      </div>

      <Card1 />
      <Card2 />

      <div className="text-2xl text-slate-700 font-bold pl-10 flex items-center  h-ful mt-8">
        DEALS OF THE DAY !
      </div>
      <DealsOfTheDay />
      <PromoCards />
      <div className="text-2xl text-slate-700 font-bold pl-10 flex items-center  h-ful mt-8">
        Summar Sale!
      </div>
      <DealsOfTheDay />

      <div className="text-2xl text-slate-700 font-bold pl-10 flex items-center  h-ful mt-8 mb-8">
      Featured Brands
      </div>
      <Brands />
      <div className="text-2xl text-slate-700 font-bold pl-10 flex items-center  h-ful mt-8">
        Similar Products
      </div>
      <DealsOfTheDay  />
    </div>
  );
};

export default HomePage;
