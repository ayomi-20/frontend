import React, { useState } from 'react';
import './Navbar.css';
import axios from 'axios';
import PopupMessage from './popup.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function RegisterDropdown({ show, handleClose, openLoginForm }) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    contact: '',
    password: '',
    user_type: 'customer',
    image: null, // optional
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // password visibility state


  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
    };

  if (!show) return null;

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: files ? files[0] : value, // for image file input
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // START loading

    const data = new FormData();
    for (let key in formData) {
      if (formData[key]) {
        data.append(key, formData[key]);
      }
    }

    try {
      const res = await axios.post(
        'http://localhost:5000/api/v1/auth/register',
        data,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );
      setMessage('Registration successful!');
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        contact: '',
        password: '',
        user_type: 'customer',
        image: null,
      });
      setTimeout(() => {
      handleClose();      // closes the register form
      openLoginForm();    // opens the login form
      }, 2000);
    } catch (err) {
      setMessage(err.response?.data?.Error || 'Registration failed.');
    }
    finally {
    setLoading(false); // END loading
    }
  };

  return (
    <div className="form-popup">
      <h3>Signup Form</h3>
      <form onSubmit={handleSubmit}>
        {/* First & Last Name */}
        <div className="name-row">
          <div className="name-field">
            <label htmlFor="first_name">First Name</label>
            <input id="first_name" type="text" value={formData.first_name} onChange={handleChange} required />
          </div>
          <div className="name-field">
            <label htmlFor="last_name">Last Name</label>
            <input id="last_name" type="text" value={formData.last_name} onChange={handleChange} required />
          </div>
        </div>

        {/* Email & Contact */}
        <div className="name-row">
          <div className="name-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="name-field">
            <label htmlFor="contact">Contact</label>
            <input id="contact" type="text" value={formData.contact} onChange={handleChange} required />
          </div>
        </div>

        {/* Password & User Type */}
        <div className="name-field">
        <label htmlFor="password">Password</label>
          <div style={{ display: 'flex', alignItems: 'center' }}>
          <input id="password" type={showPassword ? 'text' : 'password'} value={formData.password} onChange={handleChange} required style={{ flex: 1 }} />
          <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} onClick={togglePasswordVisibility} />
          </div>
        </div>
          <div className="name-field">
            <label htmlFor="user_type">User Type</label>
            <input id="user_type" type="text" value={formData.user_type} readOnly />
          </div>

        {/* Image Upload */}
        <div className="name-field">
          <label htmlFor="image">Profile Image</label>
          <input id="image" type="file" accept="image/*" onChange={handleChange} />
        </div>

        {loading && <div className="spinner"></div>}
        <button type="submit" disabled={loading}>{loading ? 'Signing up...' : 'Signup'}</button>
        <button type="button" onClick={handleClose}>Close</button>

        <PopupMessage message={message} onClose={() => setMessage('')} />
      </form>
    </div>
  );
}