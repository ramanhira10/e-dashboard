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
  result = result.toObject();
  delete result.password;
  res.send(result);
});

app.post('/login', async (req, res) => {
  if (req.body.password && req.body.email) {
    
    let user = await User.findOne(req.body).select('-password');

    if (user) {
      res.send(user);
    } else {
      res.send({ result: 'No user found' });
    }
  } else {
    res.send({ result: 'Either username and/or password is not provided' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
