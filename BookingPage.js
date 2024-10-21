import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const { eventId } = useParams();
  const randomTexts = [
    'Get ready for an amazing event!',
    'Book your tickets now!',
    'Don’t miss out on the fun!',
    'Secure your spot today!',
  ];

  const ticketOptions = [
    { price: 1000, description: 'Standard Entry' },
    { price: 1500, description: 'Standard Entry with Welcome Drink' },
    { price: 2500, description: 'VIP Entry' },
    { price: 3000, description: 'VIP Entry with Reserved Seating' },
    { price: 5000, description: 'Gold Entry' },
    { price: 10000, description: 'Gold Entry with Backstage Access' },
    { price: 50000, description: 'Platinum Entry with Meet and Greet' },
    { price: 65000, description: 'Diamond Entry with All Access' },
  ];

  const [eventName, setEventName] = useState('Event Name');
  const [ticketQuantities, setTicketQuantities] = useState(
    Array(ticketOptions.length).fill(0)
  );

  const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    return randomTexts[randomIndex];
  };

  const navigate = useNavigate();

  const handleTicketBooking = (price, index) => {
    if (ticketQuantities[index] === 0) {
      alert("Please select at least 1 ticket.");
      return;
    }
    navigate(`/payment/${eventId}`, { state: { price, quantity: ticketQuantities[index] } });
  };

  const handleIncrement = (index) => {
    const updatedQuantities = [...ticketQuantities];
    updatedQuantities[index]++;
    setTicketQuantities(updatedQuantities);
  };

  const handleDecrement = (index) => {
    const updatedQuantities = [...ticketQuantities];
    if (updatedQuantities[index] > 0) {
      updatedQuantities[index]--;
      setTicketQuantities(updatedQuantities);
    }
  };

  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    card: {
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      margin: '10px',
      textAlign: 'left',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '300px',
      display: 'inline-block',
      verticalAlign: 'top',
    },
    button: {
      padding: '8px 12px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: 'black',
      color: 'white',
      cursor: 'pointer',
      marginRight: '5px',
    },
    quantity: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '10px',
    },
  };

  useEffect(() => {
    const fetchEventName = async () => {
      const eventDetails = await new Promise((resolve) =>
        setTimeout(() => resolve({ name: 'Stand-up Comedy' }), 500)
      );
      setEventName(eventDetails.name);
    };

    fetchEventName();
  }, [eventId]);

  return (
    <div style={styles.container}>
      <h2>{getRandomText()}</h2>
      <p>Booking for: {eventName}</p>
      <div>
        {ticketOptions.map((option, index) => (
          <div key={index} style={styles.card}>
            <h3>₹{option.price}/person</h3>
            <p>{option.description}</p>
            <div style={styles.quantity}>
              <button
                style={styles.button}
                onClick={() => handleDecrement(index)}
              >
                -
              </button>
              <span>{ticketQuantities[index]}</span>
              <button
                style={styles.button}
                onClick={() => handleIncrement(index)}
              >
                +
              </button>
            </div>
            <button
              style={styles.button}
              onClick={() => handleTicketBooking(option.price, index)}
            >
              Book Tickets
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingPage;
