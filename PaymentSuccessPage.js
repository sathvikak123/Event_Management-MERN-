import React from 'react';

const PaymentSuccessPage = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Payment Successful</h2>
      <p style={styles.text}>Thank you for your purchase!</p>
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
  text: {
    fontSize: '18px',
    color: '#666',
  },
};

export default PaymentSuccessPage;