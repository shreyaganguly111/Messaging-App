import { Link } from "react-router-dom";
import { useState } from "react";
import "./Signup.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="signup-box">
        <h1>Messaging App</h1>

        {/* Value = sets the username UI */}
        {/* onChange = updates the username value */}
        <div className="container">
          <input
            type = "text"
            placeholder = "Username"
            value = {username}                                  
            onChange = {(e) => setUsername(e.target.value)}
          />

          <input 
            type = "password" 
            placeholder = "Password" 
            value = {password} 
            onChange = {(e) => setPassword(e.target.value)}
          />

          <button onClick={loginButton}>Login</button>

          {/* Span forces inline */}
          {/* Links the signup link to the /signup page*/}
          <p>
            Don't have an account?{" "}
            <Link to = "/signup" className = "link">Sign up</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;