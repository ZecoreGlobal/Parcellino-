import React from 'react';
import Hero from '../components/Hero';
import BordersSection from '../components/BordersSection';
import BentoGrid from '../components/BentoGrid';
import MetricsSection from '../components/MetricsSection';
import Testimonial from '../components/Testimonial';
import ClientTestimonials from '../components/ClientTestimonials';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <>
      <Hero />
      <BordersSection />
      <BentoGrid />
      <MetricsSection />
      <ClientTestimonials />
      <Testimonial />
      <CTASection variant="dark" />
    </>
  );
};

export default Home;
