import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import "./Login.css";
const Login = () => {
  const auth = getAuth();
  const { signInUsingGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin1, setIsLogin1] = useState(false);

  const toggleLogin = (e) => {
    setIsLogin1(e.target.checked);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email).then((result) => {});
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError("Password Must Be 6 Character");
      return;
    }
    if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError("Password Must contain 2 digit");
      return;
    }
    if (isLogin1) {
      processLogin(email, password);
    } else {
      registerNewUser(email, password);
    }
  };
  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        verifyEmail();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
    });
  };

  return (
    <form action="" onSubmit={handleRegistration}>
      <div className="wrapper rounded bg-white">
        <div className="h3 fs-1 fw-semibold">BANGLADESH MEDICAL</div>
        <h5 className="text-primary justify-content-center">
          Please {isLogin1 ? "Login" : "Register"}
        </h5>

        <div className="form">
          <div className="row">
            <div className="col mt-md-0 mt-3">
              {" "}
              <label className="text-start">Email</label>{" "}
              <input
                onBlur={handleEmailChange}
                type="email"
                className="form-control"
                placeholder="abc@gmail.com"
                required
              />{" "}
            </div>
          </div>
          <div className="row">
            <div className="col mt-md-0 mt-3">
              {" "}
              <label className="text-start">Password</label>{" "}
              <input
                onBlur={handlePasswordChange}
                type="password"
                className="form-control"
                placeholder="*****"
                required
              />{" "}
            </div>
          </div>
          <div className="d-flex mx-1 justify-content-center">
            <input
              onChange={toggleLogin}
              className="form-check-input mx-2"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" for="gridCheck">
              Already Registred ??!??
            </label>
          </div>
          <div className="text-danger fw-bold">{error}</div>
          <button className="btn btn-outline-dark mt-3 mx-2">
            {isLogin1 ? "Login" : "Register"}
          </button>{" "}
          <br /> <br />
          <button
            type="button"
            onClick={handleResetPassword}
            className="btn btn-info btn-sm"
          >
            Reset Password
          </button>{" "}
          <br />
          <button
            onClick={signInUsingGoogle}
            className="btn btn-outline-warning mt-3 mx-2"
          >
            Google Sign In
          </button>
        </div>
      </div>
    </form>
  );
};
export default Login;
