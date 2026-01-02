// https://www.geeksforgeeks.org/node-js/express-js/
// Express.js is a Node.js framework used to build backend servers, web applications, and APIs

const users = new Map();

const express = require("express");                             // Import express for backend server
const app = express();

const cors = require("cors");                                   // Import cors to allow frontend requests

app.use(cors({ origin: "http://localhost:5173" }));             // Allows frontend running on localhost:5173 to access backend

app.use(express.json());                                        // Parse JSON data in incoming request bodies

app.get("/", (req, res) => {                                    // Root route to test if backend is running (prints on localhost:5001)
  res.send("Backend is running");
});


app.post("/signup", (req, res) => {                             // Signup route, must match fetch call in Login.jsx
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({                               // error 400 for request syntax issues
      success: false,
      message: "Need username and password",
    });
  }

  if (users.has(username)) {                                    // if username exists, don't allow signup
    return res.status(409).json({                               // error 409 for conflict
      success: false,
      message: "Username already exists",
    });
  }

  users.set(username, password);                                // Store the user in the Map

  res.json({ success: true });  
});


app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Need username and password",
    });
  }

  const userPassword = users.get(username);

  if (!userPassword || userPassword !== password) {
    return res.status(401).json({                               // error 401 for unauthorized access
      success: false,
      message: "Invalid credentials. Please create an account or try again.",
    });
  }

  res.json({ success: true });
});


app.listen(5001, () => {                                        // Start backend server on port 5001 because macOS uses port 5000    
  console.log("Backend is running on http://localhost:5001");
});