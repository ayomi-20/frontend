import React, { useState, useEffect } from 'react';
import './Navbar.css';
import PopupMessage from './popup';

export default function ResetRequestForm({ show, onClose, onNext }) {
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); //   loading state tracks whether form is submitting
    // Auto-clear inputs when form opens
  useEffect(() => {
    if (show) {
      setContact('');
      setEmail('');
      setMessage('');
    }
  }, [show]);

  if (!show) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // activates form loading state by setting form loading to true

    try {
      const response = await fetch('http://localhost:5000/api/v1/password_reset/password-reset-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contact, email })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Reset code sent to email.');
        setContact('');  // <-- clear contact input
        setEmail('');    // <-- clear email input
        setTimeout(() => {
          onNext(contact); // Pass contact to next step
        }, 2000);
      } else {
        setMessage(data.error || 'Failed to send code.');
      }
    } catch (err) {
      setMessage('Something went wrong.');
    }
    finally {setLoading(false);}// sets loading state back to false or deactivates form loading
  };

  return (
    <div className="form-popup">
      <h3>Password Reset</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {loading && <div className="spinner"></div>}
        <button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Code'}</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>

      {message && (
        <PopupMessage message={message} onClose={() => setMessage('')} />
      )}
    </div>
  );
}