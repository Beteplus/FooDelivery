import React, { useState } from "react";
import "./Loginpop.css";
import { assets } from "../assets/assets";
function LoginPop({ setShowLogin }) {
  const [currstate, setCurrState] = useState("login");
  return (
    <>
      <div className="login-popup">
        <form className="login-popup-cotainer">
          <div className="login-popup-title">
            <h2>{currstate}</h2>
            <img
              onClick={() => setShowLogin(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <div className="login-popup-input">
            {currstate === "Login" ? (
              <></>
            ) : (
              <input type="text" placeholder="Name" required />
            )}

            <input type="text" placeholder="Email" required />
            <input type="text" placeholder="Password" required />
          </div>
          <button>
            {currstate === "sign up" ? "Create Account" : "Log In"}
          </button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing i agree to the terms of use & privacy policy</p>
          </div>
          {currstate === "Login" ? (
            <p>
              Create a new account?<span onClick={()=>setCurrState("sign up")}>Click Here</span>
            </p>
          ) : (
            <p>
              Already An Account?<span onClick={()=>setCurrState("Login")}>login here</span>
            </p>
          )}
        </form>
      </div>
    </>
  );
}

export default LoginPop;
