import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div style={{ paddingTop: '150px', display: 'flex', justifyContent: 'center' }}>
      <form className="login-box" onSubmit={handleSignup} style={{ background: '#111', padding: '40px', borderRadius: '8px' }}>
        <h2 style={{ color: 'white' }}>Create Account</h2>
        
        <input 
          type="text" 
          placeholder="Username" 
          value={formData.username} // Added value
          onChange={(e) => setFormData({...formData, username: e.target.value})} 
          style={{ display: 'block', marginBottom: '10px', padding: '8px' }} 
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          value={formData.password} // Added value
          onChange={(e) => setFormData({...formData, password: e.target.value})} 
          style={{ display: 'block', marginBottom: '20px', padding: '8px' }} 
        />
        
        <button 
          type="submit" 
          disabled={loading}
          style={{ 
            background: loading ? '#555' : 'red', 
            color: 'white', 
            border: 'none', 
            padding: '10px 20px', 
            cursor: loading ? 'not-allowed' : 'pointer' 
          }}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default SignupPage;