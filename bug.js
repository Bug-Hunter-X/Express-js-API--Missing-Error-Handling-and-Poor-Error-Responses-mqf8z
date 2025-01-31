const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Missing error handling for missing user data
  db.createUser(user, (err, result) => {
    if (err) {
      // Improper error handling, not sending proper error response
      console.error(err);
      res.status(500).send('Something went wrong');
    } else {
      res.status(201).send(result);
    }
  });
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});