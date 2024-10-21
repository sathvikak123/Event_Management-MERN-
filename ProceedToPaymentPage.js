/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProceedToPaymentPage = () => {
  const [cardType, setCardType] = useState('debit');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');

  const navigate = useNavigate();

  const handlePayment = () => {
    // Handle payment logic here
    alert('Payment processing...');
    navigate('/payment-success');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Payment Details</h2>
      <form style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            Card Type:
            <select
              value={cardType}
              onChange={(e) => setCardType(e.target.value)}
              style={styles.input}
            >
              <option value="debit">Debit Card</option>
              <option value="credit">Credit Card</option>
            </select>
          </label>
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            Card Holder Name:
            <input
              type="text"
              value={cardHolderName}
              onChange={(e) => setCardHolderName(e.target.value)}
              style={styles.input}
              required
            />
          </label>
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            Expiry Date:
            <div style={styles.expiryDate}>
              <input
                type="text"
                placeholder="MM"
                value={expiryMonth}
                onChange={(e) => setExpiryMonth(e.target.value)}
                style={styles.inputSmall}
                required
              />
              <span style={styles.separator}>/</span>
              <input
                type="text"
                placeholder="YY"
                value={expiryYear}
                onChange={(e) => setExpiryYear(e.target.value)}
                style={styles.inputSmall}
                required
              />
            </div>
          </label>
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            CVV:
            <input
              type="password"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              style={styles.input}
              required
            />
          </label>
        </div>
        <button type="button" onClick={handlePayment} style={styles.button}>
          Make Payment
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  inputSmall: {
    width: '45%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    marginRight: '10px',
  },
  expiryDate: {
    display: 'flex',
    alignItems: 'center',
  },
  separator: {
    margin: '0 10px',
    fontSize: '18px',
    color: '#333',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'black',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default ProceedToPaymentPage;*/


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProceedToPaymentPage = () => {
  const [cardType, setCardType] = useState('debit');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');

  const navigate = useNavigate();

  const handlePayment = () => {
    // Handle payment logic here
    alert('Payment processing...');
    navigate('/payment-success');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Payment Details</h2>
      <form style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            Card Type:
            <select
              value={cardType}
              onChange={(e) => setCardType(e.target.value)}
              style={styles.input}
            >
              <option value="debit">Debit Card</option>
              <option value="credit">Credit Card</option>
            </select>
          </label>
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            Card Holder Name:
            <input
              type="text"
              value={cardHolderName}
              onChange={(e) => setCardHolderName(e.target.value)}
              style={styles.input}
              required
            />
          </label>
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            Expiry Date:
            <div style={styles.expiryDate}>
              <input
                type="text"
                placeholder="MM"
                value={expiryMonth}
                onChange={(e) => setExpiryMonth(e.target.value)}
                style={styles.inputSmall}
                required
              />
              <span style={styles.separator}>/</span>
              <input
                type="text"
                placeholder="YY"
                value={expiryYear}
                onChange={(e) => setExpiryYear(e.target.value)}
                style={styles.inputSmall}
                required
              />
            </div>
          </label>
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            CVV:
            <input
              type="password"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              style={styles.input}
              required
            />
          </label>
        </div>
        <button type="button" onClick={handlePayment} style={styles.button}>
          Make Payment
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  inputSmall: {
    width: '45%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    marginRight: '10px',
  },
  expiryDate: {
    display: 'flex',
    alignItems: 'center',
  },
  separator: {
    margin: '0 10px',
    fontSize: '18px',
    color: '#333',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'black',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default ProceedToPaymentPage;


// ProceedToPaymentPage.js
/*import React from 'react';

const ProceedToPaymentPage = () => {
  // Generate random text
  const randomText = "Thank you for proceeding to payment. Your payment is being processed.";

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Payment Processing</h2>
      <p>{randomText}</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
};

export default ProceedToPaymentPage;*/
