// src/App.jsx
import Configurator from './pages/Configurator/Configurator.jsx';
// Import the Route components from the library
import { Routes, Route } from 'react-router-dom';

// Import our Global/Layout Components
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';

// Import our Page Views
import Home from './pages/Home/Home.jsx';
import VehicleDetails from './pages/VehicleDetails/VehicleDetails.jsx';

const App = () => {
  return (
    <div className="app-container">
      
      {/* Our new sleek global watermark goes right here at the top! */}
      <div className="global-watermark">HONDA</div>
      
      <Navbar />
      
      {/* The <Routes> tag tells React to look at the URL and only render 
        the ONE <Route> that matches. Everything outside of <Routes> 
        (like Navbar and Footer) stays on the screen permanently! 
      */}
      <Routes>
        {/* The root URL ("/") renders the Home page */}
        <Route path="/" element={<Home />} />
        <Route path="/build" element={<Configurator />} />
        {/* The "/vehicle/:id" URL renders our dynamic details page */}
        <Route path="/vehicle/:id" element={<VehicleDetails />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;