"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="option-item">
      <div 
        className="theme-btn" 
        onClick={toggleTheme}
        style={{
          cursor: "pointer",
          fontSize: "25px",
          color: "inherit",
          transition: "0.4s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "20px"
        }}
      >
        {theme === "light" ? (
          <i className="ri-moon-line"></i>
        ) : (
          <i className="ri-sun-line"></i>
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
