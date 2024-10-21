import React, { useState } from 'react';
import EventCreationForm from './EventCreationForm';

const EventCreationPage = () => {
  const [message, setMessage] = useState('');

  const handleEventCreation = (eventDetails) => {
    // Store event details in local storage
    const events = JSON.parse(localStorage.getItem('events')) || [];
    events.push(eventDetails);
    localStorage.setItem('events', JSON.stringify(events));

    // Display a success message
    setMessage('Event created successfully!');
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      backgroundColor: '#f9f9f9',
    },
    heading: {
      fontSize: '24px',
      marginBottom: '20px',
    },
    message: {
      fontSize: '16px',
      color: 'green',
      marginBottom: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create Event</h2>
      <EventCreationForm onSubmit={handleEventCreation} />
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

export default EventCreationPage;
