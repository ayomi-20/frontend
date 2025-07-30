import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    const token = localStorage.getItem('token');
      if (!token) {
          window.location.href = '/';  // or redirect to login
        }
    }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/v1/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Backend response: { user, services_booked, reviews }
        setUser(res.data.user);
        setBookings(res.data.services_booked);
        setReviews(res.data.reviews);
      } catch (err) {
        console.error('Error fetching profile:', err);
      }
    };
    

    fetchProfile();
  }, []);

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="profile-container">
      <img src={`http://localhost:5000/uploads/${user.image}`} alt="Profile" width="120" />
      <h2>Welcome, {user.full_name}</h2>
      <p>Email: {user.email}</p>
      <p>Contact: {user.contact}</p>
      <p>Role: {user.user_type}</p>

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
  );
}