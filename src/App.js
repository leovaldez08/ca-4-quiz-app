// Importing Necessary files
import React, { useEffect, useState } from "react";
import "./Styles/App.css";
import questions from "./questions";
import QuestionBox from "./components/QuestionBox";

// Exporting the App component
export default function App() {
  // Using useState and useEffect hooks for switching between Modes
  const [theme, setTheme] = useState("light");

  // Function for Toggling
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Returning HTML the Nav-bar and the QuestionBox Component using JSX
  // Setting up the onclick function for toggling between Dark and Light Mode
  return (
    <div className={`App ${theme}`}>
      <nav>
        <div className="title">QuizzLand</div>
        <div className="mode" onClick={toggleTheme}>
          Mode 💡
        </div>
      </nav>
      <QuestionBox data={questions} />
    </div>
  );
}
