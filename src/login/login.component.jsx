import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithGoogle , auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import './login.styles.css';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading,navigate]);
  return (
    <div className="login">
      <div className="board">
        <h1 className="header">Board.</h1>
      </div>
      <div className="login__container">
        <h2 className="sign-header">Sign In</h2>
        <h3>Sign in to your account</h3>
        <button className="google-button" onClick={signInWithGoogle}>
        Sign In With Google
        </button>
        <button className="apple-button">
          Sign in with Apple
        </button>
        <br/>
        <input
          type="text"
          className="login__textBox1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <br/>
        <input
          type="password"
          className="login__textBox2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br/>
        <button
          className="login__btn"
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Sign In
        </button>
        <br/>
        <div>
          <Link to="/reset" className="reset-button">Forgot Password ?</Link>
        </div>
        <br/>
        <div>
          Don't have an account? <Link to="/register" className="register-button">Register Here</Link>
        </div>
      </div>
    </div>
  );
}
export default Login;