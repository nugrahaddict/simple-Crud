// simple-Crud/backend/server.js
const express = require('express');
const cors = require('cors'); // Import CORS

const app = express();
const port = 3000;
const userRoutes = require('./routes/userRoutes');

// Use CORS middleware
app.use(cors()); // Allow all origins
app.use(express.json()); // For parsing application/json

app.get('/', (req, res) => {
  res.send('Welcome to the Express.js CRUD API');
});

app.use('/api', userRoutes)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
