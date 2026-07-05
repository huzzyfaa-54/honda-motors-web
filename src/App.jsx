// src/App.jsx

import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Watermark from './components/Watermark/Watermark.jsx';
import FeaturedVehicles from './components/FeaturedVehicles/FeaturedVehicles.jsx';

const App = () => {
  return (
    <main>
      <Watermark />
      <Navbar />
      <Hero />
      <FeaturedVehicles />
    </main>
  );
};

export default App;