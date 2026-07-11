import React from 'react';
import Hero from '../../components/Hero/Hero';
import NewArrivals from '../../components/NewArrivals/NewArrivals';
import FeaturedVehicles from '../../components/FeaturedVehicles/FeaturedVehicles';
import Experience from '../../components/Experience/Experience';
import WhyHonda from '../../components/WhyHonda/WhyHonda';

const Home = () => {
  return (
    <>
      <Hero />
      <NewArrivals />
      <FeaturedVehicles />
      <Experience />
      <WhyHonda />
    </>
  );
};

export default Home;