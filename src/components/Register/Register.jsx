import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="main-Register">
        <div className="top">
          <p>
            Already have an Account?
            <Link id="Links-signin" to="/">
              Sign In
            </Link>
          </p>
        </div>
          <div className="container">
            <h1>Create Account!</h1>
            <form >
              <div className="input-group">
                <h5> First Name</h5>
                <input type="text" name="Fname"  id="fname" />
              </div>
              <div className="input-group">
                <h5> Last Name</h5>
                <input type="text" name="lname"></input>
              </div>
              <div className="input-group">
                <h5> Email</h5>
                <input type="Email" name="email" ></input>
              </div>
              <div className="input-group">
                <h5> Password</h5>
                <input type="password"  name="pwd" id="pwd1" />
              </div>
              <div className="input-group">
                <h5> Confirm Password</h5>
                <input type="password"  name="pwd" id="pwd2" />
              </div>
              <input type="submit" id="sbtn" value="Submit" />
            </form>
          </div>
        </div>
  );
}

export default Register;
