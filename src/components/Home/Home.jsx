import React from "react";
import Banner from "./Banner/Banner";
import HomeService from "./Service Tailored/HomeService";
import OurSpecializedServices from "./OurSpecializedServices/OurSpecializedServices";
// import TeamSlider from "./Slider/CategorySlider";
import Cards from "./Cards/Cards";
import Carousel from "./Carousel/Carousel";
import CategorySlider from "./Slider/CategorySlider";
import Faq from "./FAQ/Faq";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <OurSpecializedServices />
        <HomeService />
        <CategorySlider/>
        <Cards/>
        <Carousel/>
        <Faq/>
      </div>
    </>
  );
};

export default Home;