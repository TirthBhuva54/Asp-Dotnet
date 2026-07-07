import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-header">
          <h1>SPMS</h1>
          <p>Student Project Management System</p>
        </div>

        <div className="login-form">
          <h2>Welcome back</h2>
          <p className="login-sub">Sign in to your account</p>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Enter your email details " />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-row">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your Password details"
              />
              <button
                type="button"
                className="toggle-pass"
                onClick={() => setShowPassword(!showPassword)}
              >
               
              </button>
            </div>
          </div>

          <div className="form-row">
            <label className="check-label">
              <input
                type="checkbox"
              />
              Remember me
            </label>
            <a href="#" className="forgot">Forgot password?</a>
          </div>

          <button className="btn-login" onClick={() => navigate('/dashboard')}>Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
