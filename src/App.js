import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
      setOutput("");
    } else if (value === "=") {
      try {
        const result = eval(input);
        if (isNaN(result) || !isFinite(result)) {
          setOutput("Error");
        } else {
          setInput(result.toString());
        }
      } catch (error) {
        setOutput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <h1>React Calculator</h1>
        <input type="text" value={input} readOnly />
        <p>{output}</p>
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick("C")}>C</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
        <button onClick={() => handleButtonClick("=")}>=</button>
      </div>
    </div>
  );
}

export default App;
