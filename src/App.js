import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleEvaluate = () => {
    try {
      if (input.trim() === '') {
        setResult('Error');
      } else {
        const evaluationResult = eval(input);
        setResult(evaluationResult);
      }
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 0, 'C', '=', '/'].map((button) => (
          <button key={button} onClick={() => {
            if (button === 'C') {
              handleClear();
            } else if (button === '=') {
              handleEvaluate();
            } else {
              handleButtonClick(button);
            }
          }}>
            {button}
          </button>
        ))}
      </div>
    
    </div>
  );
};

export default App;
