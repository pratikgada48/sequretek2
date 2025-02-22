import React, { useState } from "react";
import Component2 from "./Component2";

const Component1 = (props) => {
  const { theme, setTheme } = props;
  const [text, setText] = useState("");

  const handleChange = (val) => {
    setText(val.target.value);
  };

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div className={`${theme}`}>
        <h3>Component1</h3>
        <b>Input 1 :</b>
        <input
          type="text"
          placeholder="Write anything here.."
          onChange={handleChange}
          value={text}
        />
        <button className="themeBtn" onClick={handleTheme}>
          Theme : {theme}{" "}
        </button>
        <Component2
          text={text}
          setText={setText}
          theme={theme}
          setTheme={setTheme}
        />
      </div>
    </>
  );
};

export default Component1;
