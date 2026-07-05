// src/App.jsx

// Import the Route components from the library
import { Routes, Route } from 'react-router-dom';

// Import our Global/Layout Components
import Navbar from './components/Navbar/Navbar.jsx';
import Watermark from './components/Watermark/Watermark.jsx';
import Footer from './components/Footer/Footer.jsx';

// Import our Page Views
import Home from './pages/Home/Home.jsx';
import VehicleDetails from './pages/VehicleDetails/VehicleDetails.jsx';

const App = () => {
  return (
    <main>
      <Watermark />
      <Navbar />
      
      {/* The <Routes> tag tells React to look at the URL and only render 
        the ONE <Route> that matches. Everything outside of <Routes> 
        (like Navbar and Footer) stays on the screen permanently! 
      */}
      <Routes>
        {/* The root URL ("/") renders the Home page */}
        <Route path="/" element={<Home />} />
        
        {/* The "/vehicle" URL renders our placeholder details page */}
        <Route path="/vehicle/:id" element={<VehicleDetails />} />
      </Routes>

      <Footer />
    </main>
  );
};

export default App;