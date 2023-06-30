import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: true },
    { title: "Include Symbols", state: false }
  ]);
  const [password,setPassword]=useState("a62HS");
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
   navigator.clipboard.writeText(password);
   setCopied(true);
    setTimeout(() => {
      setCopied(false)
    }, 2000); };
  const [length, setLength] = useState(0);
  const handleCheckBox = (i) => {
    const updatedCheckBoxData = [...checkboxData];
    updatedCheckBoxData[i].state = !updatedCheckBoxData[i].state;
    setCheckboxData(updatedCheckBoxData);
  };
  return (
    <div className="App">
      {/* passwod text and copy  */}
      <div className="header">
        <div className="title">{password}</div>
        <button
          className="copyBtn"
          onClick={
            handleCopy
          }
        >
          {copied ? "COPIED" : "COPY"}
         </button>
      </div>
      {/* character length */}
      <div className="charLength">
        <span>
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min="0"
          max="20"
          onChange={(e) => setLength(e.target.value)}
          value={length}
        />
      </div>
      <div className="checkboxes">
        {checkboxData.map((e, i) => {
          return (
            <div key={i}>
              <input
                onChange={() => handleCheckBox(i)}
                checked={e.state}
                type="checkbox"
              />
              <label>{e.title}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
