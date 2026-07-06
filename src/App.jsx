// Make sure Navbar is imported at the top!
import Navbar from "./components/Navbar/Navbar"; 
import Hero from "./components/Hero/Hero";
import FeaturedVehicles from "./components/FeaturedVehicles/FeaturedVehicles";
import Experience from "./components/Experience/Experience";
import WhyHonda from "./components/WhyHonda/WhyHonda";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      {/* THIS IS THE CRITICAL LINE WE WERE MISSING! */}
      <Navbar /> 
      
      <Hero />
      <FeaturedVehicles /> 
      <Experience />
      <WhyHonda />
      <Footer />
    </div>
  );
};

export default App;