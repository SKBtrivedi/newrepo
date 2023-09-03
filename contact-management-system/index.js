const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let phoneBook = [];

app.get('/api/contacts', (req, res) => {
  res.json(phoneBook);
});

app.post('/api/contacts', (req, res) => {
  const { name, phoneNumber } = req.body;
  if (!name || !phoneNumber) {
    return res.status(400).json({ error: 'Name and phone number are required.' });
  }

  phoneBook.push({ name, phoneNumber });
  res.status(201).json({ message: 'Contact added successfully.' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
