import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LoginPage/LoginPage.css';
const SignupPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true); // Disable button to prevent double-submits
    
    try {
    const response = await fetch('http://localhost:5000/api/signup', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});
      const result = await response.json();
      
      if (response.ok) {
        alert('Account created! Please login.');
        navigate('/login');
      } else {
        alert(result.message || "Registration failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("Server is unreachable. Make sure your backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSignup}>
        <h2>Create Account</h2>
        
        <input 
          className="login-input"
          type="text" 
          placeholder="Username" 
          value={formData.username}
          onChange={(e) => setFormData({...formData, username: e.target.value})} 
        />
        
        <input 
          className="login-input"
          type="password" 
          placeholder="Password" 
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})} 
        />
        
        <button 
          type="submit" 
          className="login-button"
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default SignupPage;