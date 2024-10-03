import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ProductList from "./Pages/ProductList";
import Men from "./components/Men";
import Women from "./components/Women";
import Others from "./components/Others";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <header className="sticky top-0 z-50">
            <Navbar />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product-list" element={<ProductList />} />
              <Route path="/men" element={<Men />} />
              <Route path="/women" element={<Women />} />
              <Route path="/others" element={<Others />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
