import React from 'react';
import Hero from '../components/Hero';
import BordersSection from '../components/BordersSection';
import BentoGrid from '../components/BentoGrid';
import MetricsSection from '../components/MetricsSection';
import Testimonial from '../components/Testimonial';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <>
      <Hero />
      <BordersSection />
      <BentoGrid />
      <MetricsSection />
      <Testimonial />
      <CTASection variant="dark" />
    </>
  );
};

export default Home;
