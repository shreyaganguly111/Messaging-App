import { Link } from "react-router-dom";
import "./Signup.css";

function Login() {
  return (
    <>
      <div className="signup-box">
        <h1>Messaging App</h1>

        <div className="container">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
          {/* Span forces inline */}
          {/* Links the signup link to the /signup page*/}
          <p> Don't have an account?{" "} <Link to="/signup" className="link">Sign up</Link> </p>
        </div>
      </div>
    </>
  );
}

export default Login;