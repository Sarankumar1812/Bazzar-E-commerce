import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/logo2.svg";
import Play from "../assets/play.png";

const Footer = () => {
  return (
    <footer className="bg-slate-600 text-white py-8 px-4">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex flex-col gap-4 items-start">
            <img src={Logo} alt="Logo" className="h-16 w-auto" />
            <p className="text-sm">
              You can explore and shop many different <br /> collections from
              various brands here.
            </p>
            <div className="flex space-x-4">
              <a href="#">
                <FontAwesomeIcon icon={faFacebookF} className="h-7" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} className="h-7" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} className="h-7" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} className="h-7" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Stores
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Cares
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Track Your Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Corporate & Bulk Purchasing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Return & Refunds
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <p>
                  70 Washington Square South, New York, <br /> NY 10012, United
                  States
                </p>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Email: bazaar.help@gmail.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Phone: +1 1123 456 780
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
              <img
                src="https://www.pngitem.com/pimgs/m/179-1792550_payment-methods-images-png-transparent-png.png"
                alt="Payment Methods"
                className="h-8"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Download Our App</h3>
              <img src={Play} alt="Download App" className="h-24" />
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-600 pt-6">
          <p className="text-center">© 2024 Coral, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
