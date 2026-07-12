import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LoginPage.css';
import { API_BASE_URL } from './config';

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Use API_BASE_URL here
      const response = await fetch(`${API_BASE_URL}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      if (response.ok) {
        alert('Login successful!');
        navigate('/');
      } else {
        alert(result.message);
      }
    } catch (err) {
      alert("Server error, please try again.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input 
          className="login-input" type="text" placeholder="Username" 
          onChange={(e) => setFormData({...formData, username: e.target.value})} 
        />
        <input 
          className="login-input" type="password" placeholder="Password" 
          onChange={(e) => setFormData({...formData, password: e.target.value})} 
        />
        <button type="submit" className="login-button">Sign In</button>
        <p style={{ color: '#aaa', marginTop: '15px', textAlign: 'center', fontSize: '14px' }}>
          Don't have an account? <Link to="/signup" style={{ color: '#e60012' }}>Sign up here</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;