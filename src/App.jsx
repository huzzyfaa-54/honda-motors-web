import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/Home'; // Ensure you have this
import ModelsPage from './pages/ModelsPage/ModelsPage';
import AboutPage from "./pages/AboutPage/AboutPage";
import DealershipsPage from './pages/DealershipsPage/DealershipsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';

const App = () => {
  return (
    <Router>
      <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: '#fff' }}>
        <Routes>
          {/* Public Routes with Navbar/Footer */}
          <Route path="/" element={<><Navbar /><HomePage /><Footer /></>} />
          <Route path="/models" element={<><Navbar /><ModelsPage /><Footer /></>} />
          <Route path="/about" element={<><Navbar /><AboutPage /><Footer /></>} />
          <Route path="/dealerships" element={<><Navbar /><DealershipsPage /><Footer /></>} />

          {/* Standalone Authentication Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;