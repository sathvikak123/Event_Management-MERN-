import React from 'react';
import { Link } from 'react-router-dom';
import './EventsPage.css';

const events = [
  { id: 1, title: 'Live Concert', description: 'An amazing live concert event.', date: '2024-06-10' },
  { id: 2, title: 'Stand-up Comedy', description: 'Laugh out loud with the best comedians.', date: '2024-06-15' },
  { id: 3, title: 'Pre-release Event', description: 'Get a sneak peek at upcoming releases.', date: '2024-06-20' },
];

const EventsPage = () => {
  return (
    <div className="events-container">
      <h2>Upcoming Events</h2>
      <div className="events-grid">
        {events.map(event => (
          <Link key={event.id} to={`/events/${event.id}`} className="event-card">
            <div className="event-card">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p><strong>Date:</strong> {event.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;

