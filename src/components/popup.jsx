// PopupMessage.jsx
import React, { useState, useEffect } from 'react';
import './popup.css'

export default function PopupMessage({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Auto-hide after 5 seconds

    return () => clearTimeout(timer); // Clean up
  }, [onClose]);
  if (!message) return null;

  return (
    <div className="popup-message">
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onClose}>✕</button>
      </div>
    </div>
  );
}