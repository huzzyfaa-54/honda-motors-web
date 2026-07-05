// src/pages/Home/Home.jsx

// We import the specific components that make up the landing page
import Hero from '../../components/Hero/Hero.jsx';
import FeaturedVehicles from '../../components/FeaturedVehicles/FeaturedVehicles.jsx';

/**
 * Home Page View
 * This acts as a container assembling the landing page components.
 */
const Home = () => {
  return (
    // We use a React Fragment (<>) to group components without adding extra HTML divs
    <>
      <Hero />
      <FeaturedVehicles />
    </>
  );
};

export default Home;