import React from 'react';
import './Navbar.css';  // Use existing styles

export default function RegisterDropdown({ show, handleClose }) {
  if (!show) return null;

  return (
        <div className="form-popup">
      <h3>Signup Form</h3>
      <form>
        {/* First & Last Name side by side */}
        <div className="name-row">
          <div className="name-field">
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" type="text" placeholder="First name" required />
          </div>

          <div className="name-field">
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" type="text" placeholder="Last name" required />
          </div>
        </div>

        {/* Email & Contact side by side */}
        <div className="name-row">
          <div className="name-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Email" required />
          </div>

          <div className="name-field">
            <label htmlFor="contact">Contact</label>
            <input id="contact" type="text" placeholder="Contact" required />
          </div>
        </div>

        {/* Password & User Type side by side */}
        <div className="name-row">
          <div className="name-field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Password" required />
          </div>

          <div className="name-field">
            <label htmlFor="userType">User Type</label>
            <input
                id="userType"
                type="text"
                defaultValue="Customer"
                required
                style={{ backgroundColor: '#fff', cursor: 'text' }}  // normal editable style
            />
          </div>
        </div>

        <button type="submit">Signup</button>
        <button type="button" onClick={handleClose}>Close</button>
      </form>
    </div>
  );
}