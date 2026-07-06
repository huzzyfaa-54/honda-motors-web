import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import NewArrivals from './components/NewArrivals/NewArrivals';
import FeaturedVehicles from './components/FeaturedVehicles/FeaturedVehicles';
import Experience from './components/Experience/Experience';
import WhyHonda from './components/WhyHonda/WhyHonda';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <NewArrivals />
      <FeaturedVehicles />
      <Experience />
      <WhyHonda />
      <Footer />
    </div>
  );
};

export default App;