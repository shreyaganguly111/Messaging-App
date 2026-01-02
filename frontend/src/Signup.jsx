import { Link } from "react-router-dom";
import { useState } from "react";
import "./Signup.css";

function Signup() {
  // state variables store user input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // signup function to send data to backend
  const signup = async () => {
    try {
      // await waits until fetch is complete and stores response in res
      // post is used to send data to backend
      // headers tells the server req.body JSON
      // .stringify converts JS object to JSON string
      const res = await fetch("http://localhost:5001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      // convert JSON back into JS object
      const data = await res.json();
      // in inspect console, it will print "Authentication: {succes: true}"
      console.log("Authentication:", data);
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <>
      <div className="signup-box">
        <h1>Create Account</h1>

        {/* Value = sets the username UI */}
        {/* onChange = updates the username value */}
        <div className="container">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Sign Up is a button that calls signup() when cicked*/}
          <button onClick={signup}>Sign Up</button>
          <p> Have an account?{" "} <Link to="/login" className="link">Log in</Link> </p>
        </div>
      </div>
    </>
  );
}

export default Signup;