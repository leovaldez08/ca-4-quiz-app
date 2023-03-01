// Importing Necessary files
import React from "react";
import "../Styles/Result.css";

// Exporting the Result Component
export default function Result(props) {
  // Calling the Reset Function
  const handleClick = () => {
    props.reset();
  };

  //Returning the Score Page with the Final Score and a Restart button to play again
  return (
    <div className="result">
      <div>Final Results</div>
      <div>
        {props.score} out of 5 correct - ({(props.score / 5) * 100}%)
      </div>
      <div className="restart">
        <button onClick={handleClick}>Restart</button>
      </div>
    </div>
  );
}
