import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      {/* Left Side: Branding */}
      <div className="login-left">
        <div className="brand-content">
          <h1>HONDA</h1>
          <h2>Honda Enterprise DBMS</h2>
          <p>The world's most sophisticated automotive management platform. Engineered for excellence.</p>
        </div>
      </div>

      {/* Right Side: Sign In Box */}
      <div className="login-right">
        <div className="auth-box">
          <h2>Welcome back</h2>
          <p className="subtitle">Sign in to your Honda account</p>
          
          <div className="input-group">
            <label>EMAIL ADDRESS</label>
            <input type="email" placeholder="your@email.com" />
          </div>
          
          <div className="input-group">
            <label>PASSWORD</label>
            <input type="password" placeholder="••••••••" />
          </div>
          
          <button className="signin-btn">Sign In →</button>
          
          <p className="footer-link">
            Don't have an account? <span>Create account</span>
          </p>
          
          {/* Back to Homepage Option */}
          <Link to="/" className="back-home">← Back to Homepage</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;