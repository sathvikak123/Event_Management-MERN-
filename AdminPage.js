// AdminPage.js
/*import React from 'react';

const AdminPage = () => {
  const randomText = "Welcome to the Admin Dashboard!";

  return (
    <div>
      <h1>{randomText}</h1>
    </div>
  );
};

export default AdminPage;*/


/*import React, { useState } from 'react';

const AdminPage = () => {
  const [events, setEvents] = useState([]);
  const [hostName, setHostName] = useState('');

  const handleHostSearch = () => {
    const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
    const filteredEvents = savedEvents.filter(event => event.host === hostName);
    setEvents(filteredEvents);
  };

  return (
    <div>
      <h1>Events for Host</h1>
      <input type="text" value={hostName} onChange={(e) => setHostName(e.target.value)} placeholder="Enter Host Name" />
      <button onClick={handleHostSearch}>Search</button>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <h2>{event.name}</h2>
            <p>Date: {event.date}</p>
            <p>Description: {event.description}</p>
            <p>Host: {event.host}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;*/

/*import React, { useState } from 'react';

const AdminPage = () => {
  const [events, setEvents] = useState([]);
  const [hostName, setHostName] = useState('');

  const handleHostSearch = () => {
    const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
    const filteredEvents = savedEvents.filter(event => event.host === hostName);
    setEvents(filteredEvents);
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
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
      backgroundColor: '#28a745',
      color: 'white',
      cursor: 'pointer',
    },
    eventsList: {
      listStyleType: 'none',
      padding: '0',
    },
    eventItem: {
      marginBottom: '20px',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
  };

  return (
    <div style={styles.container}>
      <h1>Events for Host</h1>
      <input
        type="text"
        value={hostName}
        onChange={(e) => setHostName(e.target.value)}
        placeholder="Enter Host Name"
        style={styles.input}
      />
      <button onClick={handleHostSearch} style={styles.button}>Search</button>
      <ul style={styles.eventsList}>
        {events.map((event, index) => (
          <li key={index} style={styles.eventItem}>
            <h2>{event.name}</h2>
            <p>Date: {event.date}</p>
            <p>Description: {event.description}</p>
            <p>Host: {event.host}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;*/


/*import React, { useState } from 'react';

const AdminPage = () => {
  const [events, setEvents] = useState([]);
  const [hostName, setHostName] = useState('');

  const handleHostSearch = () => {
    const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
    const filteredEvents = savedEvents.filter(event => event.host === hostName);
    setEvents(filteredEvents);
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
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
      backgroundColor: '#28a745',
      color: 'white',
      cursor: 'pointer',
    },
    eventsList: {
      listStyleType: 'none',
      padding: '0',
    },
    eventItem: {
      marginBottom: '20px',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    eventImage: {
      width: '100%',
      height: 'auto',
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h1>Events for Host</h1>
      <input
        type="text"
        value={hostName}
        onChange={(e) => setHostName(e.target.value)}
        placeholder="Enter Host Name"
        style={styles.input}
      />
      <button onClick={handleHostSearch} style={styles.button}>Search</button>
      <ul style={styles.eventsList}>
        {events.map((event, index) => (
          <li key={index} style={styles.eventItem}>
            <h2>{event.name}</h2>
            <p>Date: {event.date}</p>
            <p>Description: {event.description}</p>
            <p>Host: {event.host}</p>
            {event.image && <img src={event.image} alt={event.name} style={styles.eventImage} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;*/


import React, { useState, useEffect } from 'react';

const AdminPage = () => {
  const [events, setEvents] = useState([]);
  const [hostName, setHostName] = useState('');

  const handleHostSearch = () => {
    const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
    const filteredEvents = savedEvents.filter(event => event.host.toLowerCase() === hostName.toLowerCase());
    setEvents(filteredEvents);
    console.log('Filtered Events:', filteredEvents); // Debugging log
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
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
      backgroundColor: '#28a745',
      color: 'white',
      cursor: 'pointer',
    },
    eventsList: {
      listStyleType: 'none',
      padding: '0',
    },
    eventItem: {
      marginBottom: '20px',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    eventImage: {
      width: '100%',
      height: 'auto',
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h1>Events for Host</h1>
      <input
        type="text"
        value={hostName}
        onChange={(e) => setHostName(e.target.value)}
        placeholder="Enter Host Name"
        style={styles.input}
      />
      <button onClick={handleHostSearch} style={styles.button}>Search</button>
      <ul style={styles.eventsList}>
        {events.length > 0 ? (
          events.map((event, index) => (
            <li key={index} style={styles.eventItem}>
              <h2>{event.name}</h2>
              <p>Date: {event.date}</p>
              <p>Description: {event.description}</p>
              <p>Host: {event.host}</p>
              {event.image && <img src={event.image} alt={event.name} style={styles.eventImage} />}
            </li>
          ))
        ) : (
          <p>No events found for this host.</p>
        )}
      </ul>
    </div>
  );
};

export default AdminPage;




