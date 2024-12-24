import React from 'react';
import AboutBanner from './Banner/AboutBanner';
import Content from './MiddleSection/Content';
import TeamSection from './TeamSection/TeamSection';
import Section from './Section/Section';
const AboutUs = () => {
  return (
    <>
      <div>
        <AboutBanner />
        <Content />
        <TeamSection />
        <Section />
      </div>
    </>
  );
}

export default AboutUs;