import Hero from '../../components/Hero/Hero.jsx';
import FeaturedVehicles from '../../components/FeaturedVehicles/FeaturedVehicles.jsx';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* We wrap the Hero in a Link, or ensure the button inside Hero points to /models */}
      {/* Option A: If your Hero component has a button, navigate to /models */}
      <Hero />
      
      <FeaturedVehicles />
    </>
  );
};

export default Home;