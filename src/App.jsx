import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CommonLayout from "./components/Common/CommonLayout";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AboutBanner from "./components/AboutUs/AboutUs";
import Contact from "./components/ContactUs/Contact/Contact";
import PopupForm from "./components/PopupForm";
import MegaServices from "./components/Services/MegaServices/MegaServices";
import Policy from "./components/PrivacyPolicy/Policy";
import ShippingPolicy from "./components/PrivacyPolicy/ShippingPolicy";
import PricingTable from "./components/Pricing/PricingTable";

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); 

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true); 
    }, 5000); 

    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isPopupOpen && <PopupForm onClose={closePopup} />} {/* Show the popup if isPopupOpen is true */}
      <Routes>
        <Route index element={<Login />} />
        <Route element={<CommonLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutBanner />} />
          <Route path="/megamenu" element={<MegaServices/>}/>
          <Route path="/pricing" element={<PricingTable/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Policy/>}/>
          <Route path="/shipping-policy" element={<ShippingPolicy/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
