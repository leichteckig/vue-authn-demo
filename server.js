// Import required libraries
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

// Create an Express app
const app = express();
app.use(cors());
app.use(express.json());

const users = [{
    id: 1,
    username: 'test',
    password: 'test',
    role: 'tester'
}]; // Simple mock... :D

// Secret key to sign JWT
const secretKey = 'your_secret_key_here';

app.get('/', (req, res) => {
  res.send('Hello World!')
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body.data;

  // Replace this with your database query to fetch user data
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    // Generate JWT
    const token = jwt.sign({ userId: user.id, role: user.role }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
})

// Start the server
const port = 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));