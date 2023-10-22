import React, { useRef } from "react";
import "./SignUpScreen.css";
import { auth } from "../firebase";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <div class="signUpScreen_help">
          <input type="checkbox" />
          <label>Remember me</label>
          <a
            className="signUpScreen_help_link"
            href="https://help.netflix.com/en/"
          >
            Need help?
          </a>
        </div>
        <h4>
          <span className="signUpScreen_gray">New to Netflix? </span>
          <span className="signUpScreen_link" onClick={register}>
            Sign up now.
          </span>
        </h4>
        <h5>
          <span className="signUpScreen_protected">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
          </span>
          <a
            className="signUpScreen_blue_link"
            href="https://policies.google.com/privacy"
          >
            Learn more.
          </a>
        </h5>
      </form>
    </div>
  );
}

export default SignUpScreen;
