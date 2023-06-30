import "./styles.css";
import React, {useState} from "react"
export default function App() {
  const  [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: true },
    { title: "Include Symbols", state: false }
  ]);
  
  const handleCheckBox = ()=>{
    
  }
  return (
    <div className="App">
    {/* passwod text and copy  */}
      <div className="header">
        <div className="title">gsjw23#0)</div>
        <button className="copyBtn" onClick={()=>{}}>copy</button>
      </div>
      {/* character length */}
      <div className="charLength">
        <span>
          <label>Character Length</label>
          <label>4</label>
          </span>
          <input type="range" min="4" max="10"/>
        </div>
        <div className="checkboxes">
          {
            checkboxData.map((e,i)=>{
              return(
                <div key={i}>
                  <input onChange={handleCheckBox} checked={e.state} type="checkbox" />
          <label>{e.title}</label>
                  </div>
              )
            })
          }
          
          
          </div>
    </div>
  );
}
