import React, { useState } from 'react';
import './Navbar.css'; 
import PopupMessage from './popup'; 

export default function LoginForm({ show, handleClose, onForgotPassword }) {
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // loading state

  if (!show) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // activates the loading state

    try {
      const response = await fetch('http://localhost:5000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ contact, password })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Login successful');
        localStorage.setItem('token', data.user.access_token);

        // Redirect logic (you can also use `navigate()` from react-router)
        window.location.href = data.user.redirect_url;
      } else {
        setMessage(data.Error || data.Message || 'Login failed');
      }

    } catch (err) {
      setMessage('Something went wrong.');
    }
    finally {
    setLoading(false);
    }
  };


  return (
    <div className="form-popup">
      <h3>Login Form</h3>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="form-actions">
          <button type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
          <span className="forgot-password" onClick={onForgotPassword}>
          Forgot password?
          </span>
        </div>

        <button type="button" onClick={handleClose}>Close</button>
      </form>

      {message && (<PopupMessage message={message} onClose={() => setMessage('')}/>)}
    </div>
  );
}