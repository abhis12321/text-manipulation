import React from "react";
import { useState } from "react";
import './App.css'

export default function TextForm() {
  const [text, setText] = useState("");
  const [size, setSize] = useState(18);
  const [max, setMax] = useState(50);

  
  const handleOnChange = (event) => {
    let len = text.split(" ").filter((word)=>{return word.length > 0;}).length - '0';
    if(len < max) 
    setText(event.target.value);
  };

  const handleSize = (e) => {
    setSize(e.target.value);
    document.getElementById('cant').style.fontSize = `${size}px`
    document.getElementById('max').style.fontSize = `${size}px`
    document.getElementById('inp').style.fontSize = `${size}px`
  }

  const handleMax = e=> {
    if(max > e.target.value)
    setText("");
    
    setMax(e.target.value);
  }

  return (
    <div id="cant">
      <div className="cant-in">
        <div className="slidecontainer">
          <input type="range" min="8" max="40" placeholder="18" className="slider" id="myRange" value={size} onChange={handleSize}/>
        </div>
        <h2 className="p-10">Enter the text to Analyze</h2>
        <div className="p-10">
          <label htmlFor="">Number of words you wanna enter</label>
          <input type="Number" className="p-10" value={max} onChange={handleMax} id="max"/>
        </div>
        <div className="p-10">
          <textarea
            className="input"
            rows="10"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter the text"
            spellCheck='false'
            id="inp"
          ></textarea>
        </div>
      </div>
      <div className="count flex">
        <p className="p-10 " >
          Tolat no. of words written words <strong>: {text.split(" ").filter((word)=>{return word.length > 0;}).length}</strong>
        </p>
        <p className="p-10 ">
        Tolat no. of characters written characters <strong>:{text.length}</strong>
        </p>
      </div>
    </div>
  );
}
