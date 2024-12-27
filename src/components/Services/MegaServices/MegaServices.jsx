import React from 'react';
import HeroSection from './HeroSection';
import ServiceList from './ServiceList';
import PackageList from './PackageList';
import CartSection from './CartSection';

const MegaServices = () => {
  return (
    <>
      <HeroSection />
      <div className="flex flex-wrap gap-4 p-4">
        <ServiceList />
        <PackageList />
        <CartSection />
      </div>
    </>
  );
};

export default MegaServices;
