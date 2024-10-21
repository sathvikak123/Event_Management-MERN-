import React from 'react';

const PaymentSuccessPage = () => {
  const randomTexts = [
    "Payment Successful! Enjoy your purchase!",
    "Thank you for your payment!",
    "Your payment was processed successfully!",
    "Transaction complete! Have a great day!",
    "Payment done! Thank you for shopping with us!"
  ];

  const randomText = randomTexts[Math.floor(Math.random() * randomTexts.length)];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Payment Success</h2>
      <p style={styles.message}>{randomText}</p>
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
  message: {
    fontSize: '18px',
    color: '#555',
  },
};

export default PaymentSuccessPage;
