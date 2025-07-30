import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Navbar.css';
import PopupMessage from './popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


export default function PasswordResetForm({ show, handleClose, contact, openLogin }) {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false); // loading state
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
  if (show) {
    setNewPassword('');
    setConfirmPassword('');
    setMessage('');
  }
    }, [show]);

  const toggleNewPasswordVisibility = () => setShowNewPassword(prev => !prev);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(prev => !prev);

  if (!show) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // activates the loading state
    if (newPassword !== confirmPassword) {
    setMessage("Passwords do not match.");
    setTimeout(() => setMessage(''), 2000);
    return; // Stop submission here
  }
    try {
      const res = await axios.post('http://localhost:5000/api/v1/password_reset/password-reset-confirmation', {
        contact,
        new_password: newPassword
      });

      setMessage(res.data.message);
      setNewPassword('');

      // Delay, then close and trigger login popup
      setTimeout(() => {
        handleClose();
        openLogin(); // opens the login popup
      }, 2000);
    } catch (err) {
      setMessage(err.response?.data?.error || 'Error resetting password.');
    }
    finally {
    setLoading(false);
    }
  };

  return (
    <div className="form-popup">
      <h3>Reset Password</h3>
      <form onSubmit={handleSubmit}>
        <label>New Password</label>
          <div className="password-input-wrapper">
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
              <FontAwesomeIcon
                icon={showNewPassword ? faEye : faEyeSlash}
                onClick={toggleNewPasswordVisibility}
                className="eye-icon"
              />
    </div>
        <label>Confirm Password</label>
    <div className="password-input-wrapper">
      <input
        type={showConfirmPassword ? "text" : "password"}
        placeholder="Re-enter new password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <FontAwesomeIcon
        icon={showConfirmPassword ? faEye : faEyeSlash}
        onClick={toggleConfirmPasswordVisibility}
        className="eye-icon"
      />
    </div>
        {loading && <div className="spinner"></div>}
        <button type="submit" className="btn" disabled={loading}>{loading ? 'Resetting...' : 'Reset Password'} </button>
        <button type="button" className="btn cancel" onClick={handleClose}>Cancel</button>
      </form>
      {message && <PopupMessage message={message} />}
    </div>
  );
}