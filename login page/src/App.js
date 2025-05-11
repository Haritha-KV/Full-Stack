import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setErrorMessage("Please fill in both fields.");
      setSuccessMessage("");
    } else {
      console.log("Logged in with:", { email, password });
      setSuccessMessage("Login successful!");
      setErrorMessage("");

      setEmail("");
      setPassword("");
    }
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "" || confirmPassword === "") {
      setErrorMessage("Please fill in all fields.");
      setSuccessMessage("");
    } else if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      setSuccessMessage("");
    } else {
      console.log("Signed up with:", { email, password });
      setSuccessMessage("Sign up successful!");
      setErrorMessage("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  const switchToSignUp = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={isLogin ? handleLoginSubmit : handleSignUpSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        {isLogin === false && (
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>
        )}
        {errorMessage && <p className="error">{errorMessage}</p>}
        {successMessage && <p className="success">{successMessage}</p>}{" "}
        {/* Success message */}
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>

      <p>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <button onClick={isLogin ? switchToSignUp : switchToLogin}>
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
}

export default App;
