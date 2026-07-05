// src/App.jsx

import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Watermark from './components/Watermark/Watermark.jsx';
import FeaturedVehicles from './components/FeaturedVehicles/FeaturedVehicles.jsx';
// Import the new Footer component
import Footer from './components/Footer/Footer.jsx';

const App = () => {
  return (
    <main>
      <Watermark />
      <Navbar />
      <Hero />
      <FeaturedVehicles />
      {/* Footer goes at the very bottom */}
      <Footer />
    </main>
  );
};

export default App;