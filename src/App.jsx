import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AboutPage from "./pages/AboutPage/AboutPage";
import Hero from './components/Hero/Hero';
import NewArrivals from './components/NewArrivals/NewArrivals';
import FeaturedVehicles from './components/FeaturedVehicles/FeaturedVehicles';
import Experience from './components/Experience/Experience';
import WhyHonda from './components/WhyHonda/WhyHonda';
import Footer from './components/Footer/Footer';
import LoginPage from './pages/LoginPage';

const HomePage = () => (
  <div style={{ backgroundColor: '#050505', minHeight: '100vh' }}>
    <Navbar />
    <Hero />
    <NewArrivals />
    <FeaturedVehicles />
    <Experience />
    <WhyHonda />
    <Footer />
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dealerships" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;