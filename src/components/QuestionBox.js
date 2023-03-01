// Importing Necessary files
import React, { useEffect, useState } from "react";
import Result from "./Result";
import "../Styles/QuestionBox.css";

// Exporting the QuestionBox Component
export default function QuestionBox(props) {
  // Using useState, useEffect hooks to store the score and the Question Number
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);

  // using the same for highlighting the Question
  const [color, setColor] = useState("normal");
  // Function to do the same
  const highlightQuestion = () => {
    if (color === "normal") {
      setColor("highlighted");
    } else {
      setColor("normal");
    }
  };
  useEffect(() => {
    document.className = color;
  }, [color]);

  // Arrow Function for handling clicks to assess the question
  const handleClick = (e) => {
    setNumber(number + 1);

    if (e.target.getAttribute("istrue") === "true") {
      setScore(score + 1);
    }
  };

  // Arrow Function to reset the score and the question number
  const reset = () => {
    setNumber(0);
    setScore(0);
  };

  // Finally returning the necessary HTML code using JSX
  // Using KEY & VALUE pair to get all the options
  // Setting Up onclick function to highlight the question
  // Using the Result Component to display the Score obtained
  return (
    <div className="QuestionBox">
      {number < 5 ? (
        <div>
          <div className="current-question">Question: {number + 1} of 5</div>
          <div className={`question ${color}`}>{props.data[number].text}</div>

          <div className="all-options">
            {props.data[number].options.map((option, index) => (
              <button
                key={index}
                className="options-button"
                onClick={handleClick}
                istrue={`${option.isCorrect}`}
              >
                {option.text}
              </button>
            ))}
          </div>
          <div className="highlight">
            <button onClick={highlightQuestion}>Highlight</button>
          </div>
        </div>
      ) : (
        <Result score={score} reset={reset} />
      )}
    </div>
  );
}
