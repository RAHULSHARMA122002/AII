// backend/generateToken.js
const express = require('express');
const { StreamChat } = require('stream-chat');
const cors = require('cors');
const queryRoute = require('./routes/queryRoute');


const app = express();
app.use(cors());
app.use(express.json());
require('dotenv').config();

// const apiKey = process.env.APIKEY;
// const apiSecret = process.env.APISEC;

const serverClient = StreamChat.getInstance(process.env.APIKEY, process.env.APISEC);

app.get('/token', (req, res) => {
  const userId = req.query.userId;

  if (!userId) return res.status(400).send('User ID required');

  const token = serverClient.createToken(userId);
  res.json({ token });
  console.log(token);
});

app.use('/api/query', queryRoute);

app.listen(3001, () => console.log('Server running on port 3001'));
