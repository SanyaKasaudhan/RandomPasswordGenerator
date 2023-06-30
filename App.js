import "./styles.css";
import React, { useState } from "react";
import usePasswordGenerate from "./hooks/usePasswordGenerator";
export default function App() {
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false }
  ]);
  // const [password,setPassword]=useState("a62HS");
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
   setCopied(true);
    setTimeout(() => {
      setCopied(false)
    }, 2000); 
  };
  const [length, setLength] = useState(4);
  const handleCheckBox = (i) => {
    const updatedCheckBoxData = [...checkboxData];
    updatedCheckBoxData[i].state = !updatedCheckBoxData[i].state;
    setCheckboxData(updatedCheckBoxData);
  };

  const {password, errorMessage, generatePassword} = usePasswordGenerate();

  const passwordStrengthIndicator = (password) => {
    const getPasswordStrength = () => {
      const passwordLength = password.length;
  
      if (passwordLength < 1) {
        return "";
      } else if (passwordLength < 4) {
        return "Very Weak";
      } else if (passwordLength < 8) {
        return "Poor";
      } else if (passwordLength < 12) {
        return "Medium";
      } else if (passwordLength < 16) {
        return "Strong";
      } else {
        return "Very Strong";
      }
    };
  
    const passwordStrength = getPasswordStrength();
  
    if (!passwordStrength) return <React.Fragment />;
  
    return passwordStrength;
  };
  
  const stren = passwordStrengthIndicator(password) ;
  return (
    <div className="App">
      {/* passwod text and copy  */}
      {password && 
      <div className="header">
        <div className="title">{password}</div>
        <button
          className="copyBtn"
          onClick={ handleCopy}>
          {copied ? "COPIED" : "COPY"}
         </button>
      </div>}
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
        {/* Error */}
       {errorMessage &&  <div style={{color:"red"}}>{errorMessage}</div>}
      {/* Strength */}
      
      <div className="password-strength">
        Strength: <span style={{ fontWeight: "bold" }}> {stren}</span>
      </div>
      {/* Generate password */}
      <button className="copyBtn" onClick={() => generatePassword(checkboxData, length)}>Generate Password
        </button>
    </div>
  );
}
