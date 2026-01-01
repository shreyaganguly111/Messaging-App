// https://www.geeksforgeeks.org/node-js/express-js/
// Express.js is a Node.js framework used to build backend servers, web applications, and APIs

// Import express for backend server
const express = require("express");
const app = express();

// Import cors to allow frontend requests
const cors = require("cors");

// Allows frontend running on localhost:5173 to access backend
app.use(cors({ origin: "http://localhost:5173" }));

// Parse JSON data in incoming request bodies
app.use(express.json());

// Test route to confirm backend is running, prints on localhost:5001
app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  console.log("SIGNUP:", username, password);
  res.json({ success: true });
});

app.post("/login", (req, res) => {                        // Login route, must match fetch call in Login.jsx
  const { username, password } = req.body;
  console.log("LOGIN:", username, password);              // logs login info to backend console
  res.json({ success: true });                            // sends JSON response back to frontend
});

// Backend listens on port 5001 because macOS uses port 5000
app.listen(5001, () => {
  console.log("Backend running on http://localhost:5001");
});