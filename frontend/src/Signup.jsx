import "./Signup.css";

function Signup() {
  return (
    <>
      <div className="signup-box">
        <h1>Create Account</h1>

        <div className="container">
          <input type="text" placeholder="Username"/>
          <input type="password" placeholder="Password"/>
          <button>Sign Up</button>
        </div>
      </div>
    </>
  );
}

export default Signup;
