import React from 'react';
import './Navbar.css';  // Reuse existing styles

export default function LoginForm({ show, handleClose }) {
  if (!show) return null;

  return (
    <div className="form-popup">
      <h3>Login Form</h3>
      <form>
        <input type="text" placeholder="Contact" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <button type="button" onClick={handleClose}>Close</button>
      </form>
    </div>
  );
}