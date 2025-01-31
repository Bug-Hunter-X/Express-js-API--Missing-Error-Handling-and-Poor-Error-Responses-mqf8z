const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  if (!user || !user.name || !user.email) {
    return res.status(400).json({ error: 'Missing required user data' });
  }
  db.createUser(user, (err, result) => {
    if (err) {
      console.error(err);
      // Send more detailed error response
      return res.status(500).json({ error: 'Failed to create user', details: err.message });
    } else {
      res.status(201).json(result);
    }
  });
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});