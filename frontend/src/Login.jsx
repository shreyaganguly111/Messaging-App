import { Link } from "react-router-dom";
import { useState } from "react";
import "./Signup.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const login = async () => {
    const res = await fetch("http://localhost:5001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    console.log("Response from backend:", data);
  };

  return (
    <div className="signup-box">
      <h1>Messaging App</h1>

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

        <button onClick={login}>Log In</button>

        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="link">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;