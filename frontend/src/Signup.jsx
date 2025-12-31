import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  return (
    <>
      <div className="signup-box">
        <h1>Create Account</h1>

        {/* Value = sets the username UI */}
        {/* onChange = updates the username value */}
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

        <div className = "container">
          <input type = "text" placeholder="Username" />
          <input type = "password" placeholder="Password" />
          <button>Sign Up</button>
          <p> Have an account?{" "} <Link to = "/login" className = "link">Log in</Link> </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
