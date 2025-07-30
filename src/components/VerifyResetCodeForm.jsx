import React, { useState, useEffect } from 'react';
import './Navbar.css';
import PopupMessage from './popup';

export default function VerifyResetCodeForm({ show, onClose, contact: initialContact, onNext }) {
  const [contact, setContact] = useState(initialContact || '');
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); //   loading state

  // Clear inputs every time the form opens
  useEffect(() => {
    if (show) {
      setContact(initialContact || '');
      setCode('');
      setMessage('');
    }
  }, [show, initialContact]);

  if (!show) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // activates loading state

    try {
      const response = await fetch('http://localhost:5000/api/v1/password_reset/password-reset-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contact, code }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Code valid. Proceeding...');
        // Clear inputs
        setContact('');
        setCode('');
        // After short delay, move to next step
        setTimeout(() => {
          setMessage('');
          onNext();
        }, 2000);
      } else {
        setMessage(data.error || 'Invalid or expired code.');
      }
    } catch (err) {
      setMessage('Something went wrong. Please try again.');
    }
    finally {
    setLoading(false); // diactivates loading state
  }
  };

  return (
    <div className="form-popup">
      <h3>Verify Reset Code</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
          autoFocus
        />
        <input
          type="text"
          placeholder="Reset Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        {loading && <div className="spinner"></div>}
        <button type="submit" disabled={loading}> {loading ? 'Verifying...' : 'Verify'} </button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
      
      {message && (
        <PopupMessage message={message} onClose={() => setMessage('')} />
      )}
    </div>
  );
}
