import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Cart from "./Pages/Cart/Cart";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useState } from "react";
import LoginPop from "./LoginPopup/LoginPop";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPop setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
