import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from './users';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleLogin() {
    const user = users.find(u => u.email === email && u.password === password);
    navigate('/' + user.role + '/dashboard');
  }

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
            <input id="email" type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>


          <div className="form-row">
            <label className="check-label"><input type="checkbox" /> Remember me</label>
            <a href="#" className="forgot">Forgot password?</a>
          </div>

          <button className="btn-login" onClick={handleLogin}>Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
