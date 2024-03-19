import React, { useContext } from "react";
import { AppContext } from "../AppContext";

const HomePage = () => {
  const { getTheme } = useContext(AppContext);
  const [theme] = getTheme;

  return (
    <div style={{ background: theme === "light" ? "#fff" : "#000" }}>
      HomePage
    </div>
  );
};

export default HomePage;
