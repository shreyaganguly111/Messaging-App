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
          <p> Don't have an account?{" "} <span className="link">Sign up</span> </p> {/* Span forces inline */}
        </div>
      </div>
    </>
  );
}

export default Login;