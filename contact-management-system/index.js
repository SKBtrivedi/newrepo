const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

// Mock data for contacts
let contacts = [];

// Create a new contact
app.post('/api/contacts', (req, res) => {
  const newContact = req.body;
  contacts.push(newContact);
  res.json(newContact);
});

// Get all contacts
app.get('/api/contacts', (req, res) => {
  res.json(contacts);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
