import React, { useContext } from "react";
import { AppContext } from "../AppContext";

const Header = () => {
  const { getTheme } = useContext(AppContext);

  const [setTheme] = getTheme;

  const editTheme = () => {
    setTheme("dark");
  };

  return (
    <div>
      <button onClick={editTheme}>Edit theme</button>
    </div>
  );
};

export default Header;
