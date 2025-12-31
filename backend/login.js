// https://www.geeksforgeeks.org/node-js/express-js/

console.log("STARTING BACKEND FILE");

const express = require("express");
const app = express();

app.use(express.json());                // defines req.body

app.post("/login", (req, res) => {
  console.log("GOT STUFF")
  console.log(req.body);                // when post to login, print the reqest body to console
  res.json({ success: true });          // respond with success: true
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");      // starts the server on port 5000
});