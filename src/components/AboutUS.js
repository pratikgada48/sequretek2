import React from "react";
import { useNavigate } from "react-router-dom";
import { getSessionData } from "../helpers/storagehandler";

const AboutUS = (props) => {
  const token = getSessionData("token");
  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  const handleLoginBtn = () => {
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <h2>About Us</h2>
        {token ? (
          <button className="btn dashboardBtn" onClick={handleDashboard}>
            Dashboard
          </button>
        ) : (
          <button className="btn dashboardBtn" onClick={handleLoginBtn}>
            Login
          </button>
        )}
        <p>This is About us page.</p>
        <p>Sequretek is Reliable. Simple. Adaptive.</p>
        <p>Sequretek is an AI-Powered Continuous Threat Exposure Management</p>
        <p>Sequretek is an Enterprises Worldwide Trust Sequretek</p>
      </div>
    </>
  );
};

export default AboutUS;
