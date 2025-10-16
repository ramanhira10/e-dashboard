const express = require('express');
require('./db/config');
const User = require('./db/User');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/register', async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
