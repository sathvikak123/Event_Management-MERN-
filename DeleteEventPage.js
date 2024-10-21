/*import React from 'react';

const DeleteEventPage = () => {
  const randomText = "This is a random text displayed on the Delete Event Page.";

  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    text: {
      fontSize: '18px',
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      <p style={styles.text}>{randomText}</p>
    </div>
  );
};

export default DeleteEventPage;*/


/*import React from 'react';

const DeleteEventPage = () => {
  const randomText = "This is a random text displayed on the Delete Event Page.";

  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    text: {
      fontSize: '18px',
      color: 'black',
    },
  };

  return (
    <div style={styles.container}>
      <p style={styles.text}>{randomText}</p>
    </div>
  );
};

export default DeleteEventPage;*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteEventPage = () => {
  const [eventName, setEventName] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleDeleteEvent = () => {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    const eventIndex = events.findIndex(event => event.name.toLowerCase() === eventName.toLowerCase());

    if (eventIndex !== -1) {
      const updatedEvents = [...events];
      updatedEvents.splice(eventIndex, 1);
      localStorage.setItem('events', JSON.stringify(updatedEvents));
      setMessage('Event deleted successfully!');
    } else {
      setMessage('Event not found.');
    }
  };

  const handleGoBack = () => {
    navigate('/');
  };

  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    input: {
      padding: '8px',
      margin: '10px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#dc3545',
      color: 'white',
      cursor: 'pointer',
      margin: '10px',
    },
    backButton: {
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
      margin: '10px',
    },
    message: {
      marginTop: '20px',
      fontSize: '18px',
      color: 'black',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Delete Event</h2>
      <input
        type="text"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        placeholder="Enter Event Name"
        style={styles.input}
      />
      <button onClick={handleDeleteEvent} style={styles.button}>Delete Event</button>
      <button onClick={handleGoBack} style={styles.backButton}>Go Back</button>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

export default DeleteEventPage;


