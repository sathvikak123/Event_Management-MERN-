const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Create an instance of Express
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parses incoming requests with JSON payloads

// MongoDB Connection
const uri = 'mongodb://localhost:27017/myDatabase'; // Change to your database name
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define a schema and model for events
const eventSchema = new mongoose.Schema({
  name: String,
  date: String,
  description: String,
  host: String,
  image: String,
});

const Event = mongoose.model('Event', eventSchema);

// Route to create an event
app.post('/events', async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ error: 'Error creating event' });
  }
});

// Route to get all events
app.get('/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Error fetching events' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
