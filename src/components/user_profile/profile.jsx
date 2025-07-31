import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './profile.css';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [reviews, setReviews] = useState([]);

  // Redirect to home if no token found
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/';
    }
  }, []);

  // Fetch profile data (user info, bookings, reviews)
  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/v1/user/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(res.data.user);
      setBookings(res.data.services_booked);
      setReviews(res.data.reviews);
    } catch (err) {
      console.error('Error fetching profile:', err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!user) return <p>Loading profile...</p>;

  // Handle profile image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    console.log('Selected file:', file);

    const formData = new FormData();
    formData.append('image', file);
    formData.append('dummy', 'true');

    try {
      const token = localStorage.getItem('token');
      const res = await axios.put(
        'http://localhost:5000/api/v1/user/edit',
        formData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('Upload response:', res.data);
      setUser((prevUser) => ({
        ...prevUser,
        image: res.data.user.image,
      }));
    } catch (err) {
      console.error('Image upload failed:', err);
    }
  };

  return (
    
    <div className="profile-layout">
      <div className="user-container">
        <div className="user-profile">
          <div className="profile-image-section">
            <div className="profile-image-wrapper">
              <img
                src={`http://localhost:5000/uploads/${user.image}`}
                alt="Profile"
                className="profile-image"
              />
              <label htmlFor="imageUpload" className="image-upload-label">+</label>
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
            </div>
          <h2>Welcome, {user.full_name}</h2>
          </div>
        </div>

        <p>Email: {user.email}</p>
        <p>Contact: {user.contact}</p>
        <p>User Type: {user.user_type}</p>

        <h3>Booked Services</h3>
        {bookings.length === 0 ? (
          <p>No services booked yet.</p>
        ) : (
          <ul>
            {bookings.map((service, index) => (
              <li key={index}>
                <strong>{service.title}</strong> — {service.description}
              </li>
            ))}
          </ul>
        )}

        <h3>Your Reviews</h3>
        {reviews.length === 0 ? (
          <p>You haven't left any reviews.</p>
        ) : (
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>
                {review.content} — <em>{new Date(review.created_at).toLocaleDateString()}</em>
              </li>
            ))}
          </ul>
        )}
      </div>
    <ReviewCard onNewReview={fetchProfile} />
  </div>
  );
}

// ReviewCard component (outside Profile function!)
function ReviewCard({ onNewReview }) {
  const [content, setContent] = useState('');
  const [rating, setRating] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/v1/user/review',
        { content, rating: rating ? parseInt(rating) : null },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setContent('');
      setRating('');
      onNewReview(); // refresh profile (and reviews)
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to submit review');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="review-card">
      <h3>Leave a Review</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your review here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={4}
          cols={50}
        />
        <br />
        <input
          type="number"
          min="1"
          max="5"
          placeholder="Rating (optional 1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Review'}
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}