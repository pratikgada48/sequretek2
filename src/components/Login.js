import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setSessionData } from "../helpers/storagehandler";

const Login = (props) => {
  const [uname, setUname] = useState("");
  const [psw, setPsw] = useState("");
  const [errorText, setErrorText] = useState(false);
  const navigate = useNavigate();

  const handleChange = (val) => {
    if (uname === "" || psw === "") setErrorText(false);
    val.name === "psw" ? setPsw(val.value) : setUname(val.value);
  };
  const handleClick = () => {
    if (uname === "pratik" && psw === "pratik") {
      setSessionData("token", "abcdefghijklmnop");
      navigate("/dashboard");
    } else {
      setErrorText(true);
    }
  };

  const handleAboutUs = () => {
    navigate("/about");
  };

  return (
    <>
      <div className="container">
        <button className="btn aboutBtn" onClick={handleAboutUs}>
          About US
        </button>
        <div className="heading">
          <h2>Login Page</h2>
        </div>
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          required
          onChange={(e) =>
            handleChange({ name: "uname", value: e.target.value })
          }
        />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          onChange={(e) => handleChange({ name: "psw", value: e.target.value })}
        />

        <button className="loginBtn" type="submit" onClick={handleClick}>
          Login
        </button>
        {errorText && (
          <p className="errorText">*Note : Please enter correct details</p>
        )}
      </div>
    </>
  );
};

export default Login;
