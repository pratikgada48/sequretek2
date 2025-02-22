import React, { useState } from "react";
import Component1 from "./Component1";
import { useNavigate } from "react-router-dom";
import { removeSessionData } from "../helpers/storagehandler";

const Dashboard = (props) => {
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();

  const handleAboutUs = () => {
    navigate("/about");
  };

  const handleLogout = () => {
    removeSessionData("token");
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <button className="btn aboutBtn" onClick={handleAboutUs}>
          About US
        </button>
        <button className="btn logoutBtn" onClick={handleLogout}>
          Logout
        </button>
        <div className={`${theme}`}>
          <div className="heading">
            <h2>Dashboard</h2>
          </div>
          <Component1 theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
