import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faSearch,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <header className="bg-gray-800 text-white px-10">
      <div className="container mx-auto flex justify-between items-center py-2 ">
        <div className="flex items-center space-x-2">
          <span className="bg-red-500 text-xs px-2 py-1 rounded">HOT</span>
          <span>Free Express Shipping </span>
        </div>
        <div className="flex space-x-4">
          <select className="bg-transparent border-none text-[#4b566b]">
            <option>EN</option>
            <option>FR</option>
            <option>ES</option>
          </select>
          <div className="flex space-x-3">
            <a href="#" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white px-10 py-4 -ml-10 -mr-10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center ">
            <img src={logo} alt="Bazaar Logo" className="h-10" />
          </div>
          <div className="w-1/2 px-4 rounded-sm">
            <div className="flex bg-slate-200 items-center rounded-sm ">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-gray-600 px-4 border border-r-slate-500"
              />
              <input
                type="text"
                className="w-full bg-slate-200 px-4 py-2 focus:outline-none text-gray-600"
                placeholder="Searching for..."
              />
              <select className="bg-slate-200 text-gray-600 border border-l-slate-500 justify-center items-center px-3 py-2 rounded-r-sm ">
                <option>All Categories</option>
                <option>Male</option>
                <option>Women</option>
                <option>Kids</option>
                <option>Electronics</option>
              </select>
            </div>
          </div>

          <div className="flex space-x-4 gap-2">
            <FontAwesomeIcon icon={faUser} className="text-gray-600 h-5 w-5" />
            <Link to="/cart" className="relative">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-gray-600 h-5 w-5"
              />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>

        <hr className="mt-3" />

        <div className="pt-5 pb-3 px-2 flex justify-center items-center gap-16 bg-white">
          <Link to="/" className="text-gray-600 ">
            Home
          </Link>
          <Link to="/product-list" className="text-gray-600">
            Products
          </Link>
          <Link to="/men" className="text-gray-600">
            Men
          </Link>
          <Link to="/women" className="text-gray-600">
            Women
          </Link>
          <Link to="/others" className="text-gray-600">
            Gadgets
          </Link>
          <Link
            to="/user-login"
            className="text-gray-600 flex gap-3 justify-center items-center"
          >
            User Login
            <FontAwesomeIcon icon={faUser} className="text-gray-600 h-4 w-4" />
          </Link>
          <Link
            to="/admin-login"
            className="text-gray-600 flex gap-3 justify-center items-center"
          >
            Admin Login
            <FontAwesomeIcon icon={faUser} className="text-gray-600 h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
