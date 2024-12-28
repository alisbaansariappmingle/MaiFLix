import React from 'react';
import AboutBanner from './Banner/AboutBanner';
import Content from './AboutMaiflix/Content';
import TeamSection from './TeamSection/TeamSection';
import Vision from './OurObjectives/Vision';
import Mission from './OurObjectives/Mission';
const AboutUs = () => {
  return (
    <>
      <div>
        <AboutBanner />
        <Content />
        <TeamSection />
        <Vision />
        <Mission/>
      </div>
    </>
  );
}

export default AboutUs;