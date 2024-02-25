// Import required libraries
const express = require('express');
const cors = require('cors');
// ### import jwtwebtoken here

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
// ### Set your key here

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
    // #### Add token generation here 
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
})

// Start the server
const port = 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));