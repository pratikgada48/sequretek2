import React from "react";

const Component2 = (props) => {
  const { text, setText, theme, setTheme } = props;

  const handleChange = (val) => {
    setText(val.target.value);
  };

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div className={`${theme}`}>
        <h3>Component2</h3>
        <b>Input 2 :</b>
        <input
          type="text"
          placeholder="Write anything here.."
          onChange={handleChange}
          value={text}
        />
        <button className="themeBtn" onClick={handleTheme}>
          Theme : {theme}{" "}
        </button>
      </div>
    </>
  );
};

export default Component2;
