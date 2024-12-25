import React from "react";
import Banner from "./Banner/Banner";
import HomeService from "./Service Tailored/HomeService";
import OurSpecializedServices from "./OurSpecializedServices/OurSpecializedServices";
import Cards from "./Cards/Cards";
import Carousel from "./Carousel/Carousel";
import CategorySlider from "./Slider/CategorySlider";
import Faq from "./FAQ/Faq";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <OurSpecializedServices />
        <HomeService />
        <CategorySlider />
        <Cards />
        <Carousel />
        <Faq />
        {/* <Footer/> */}
      </div>
    </>
  );
};

export default Home;