// Import required libraries
const express = require('express');
const cors = require('cors');

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

app.get('/', (req, res) => {
  res.send('Hello World!')
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body.data;

  // Replace this with your database query to fetch user data
  const user = users.find((u) => u.username === username && u.password === password);

  // Simple mock response
  if (user) {
    res.status(200).json({ message: 'User is authenticated' });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
})

// Start the server
const port = 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));