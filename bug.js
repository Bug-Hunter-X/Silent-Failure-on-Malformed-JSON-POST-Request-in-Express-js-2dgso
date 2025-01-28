const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  const user = req.body;
  // Missing error handling for req.body parsing
  console.log('Received user:', user);
  res.send('User created');
});
app.listen(3000, () => console.log('Server listening on port 3000'));