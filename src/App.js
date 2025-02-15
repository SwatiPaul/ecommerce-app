import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";


const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Suspense fallback={
          <div className="cart-container">
            <h2 className="text-center">Loading...</h2>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Suspense>
      </Router>
    </CartProvider>
  );
};

export default App;