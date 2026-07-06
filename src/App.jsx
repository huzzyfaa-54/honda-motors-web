// Example of how your Home.jsx should look:
import Hero from "./components/Hero/Hero";
import FeaturedVehicles from "./components/FeaturedVehicles/FeaturedVehicles";
import Experience from "./components/Experience/Experience";
import WhyHonda from "./components/WhyHonda/WhyHonda";
import Footer from "./components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* Ensure your FeaturedVehicles title says "New Arrivals" in its own component! */}
      <FeaturedVehicles /> 
      <Experience />
      <WhyHonda />
      <Footer />
    </div>
  );
};

export default Home;