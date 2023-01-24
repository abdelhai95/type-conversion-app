import React, { useEffect } from "react";
import { useState } from "react";
import "./index.css";
import "./queries.css";
import transformer from "./transformer";
import addition from "./addition";
import equality from "../equality";
import multiplication from "./multiplication";
import srtictEquality from "./strictEquality";

function App() {
  const [type1, setType1] = useState("string");
  const [type2, setType2] = useState("string");
  const [value1, setValue1] = useState("hello");
  const [value2, setValue2] = useState("world");
  const [oper, setOper] = useState("addition");
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState("hello world");

// Reset button functionality
  const handleClick = () => {
    setOpen(false);
    setValue1("hello");
    setValue2("world");
  };

  useEffect(() => {
    const resetBtn = document.querySelector(".reset-btn");
    resetBtn.addEventListener("click", handleClick);
  });

  // Result button funcionality
  const handleOperation = function (e) {
    const el1 = transformer(value1, type1);
    const el2 = transformer(value2, type2);

    if (oper === "addition") {
      setOpen(true);
      return setResult(addition(el1, el2));
    }

    if (oper === "multiplication") {
      setOpen(true);
      return setResult(multiplication(el1, el2));
    }

    if (oper === "equality") {
      setOpen(true);
      return setResult(equality(el1, el2));
    }

    if (oper === "strictEquality") {
      setOpen(true);
      return setResult(srtictEquality(el1, el2));
    }
  };

  return (
    <section className="section">
      <div className="header">
        <h1>Learn JS type conversion</h1>
        <button className="reset-btn">Reset</button>
      </div>

      <article>
        <h3>First Variable</h3>
        <div className="value">
          <label htmlFor="first-input">Value:</label>
          <input
            type="text"
            id="first-input"
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
          ></input>
        </div>
        <div className="type">
          <label htmlFor="first-type" className="first-type">
            Type:
          </label>
          <select
            name="types"
            id="first-type"
            onChange={(e) => setType1(e.target.value)}
          >
            <option value="string">string</option>
            <option value="number">number</option>
            <option value="boolean">boolean</option>
            <option value="object">object</option>
            <option value="undefined">undefined</option>
          </select>
        </div>
      </article>
      <article className="second-value">
        <h3 className="second">Second Variable</h3>
        <div className="value">
          <label htmlFor="second-input">Value:</label>
          <input
            type="text"
            id="second-input"
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
          ></input>
        </div>
        <div className="type">
          <label htmlFor="second-type">Type:</label>
          <select
            name="types"
            id="second-type"
            onChange={(e) => setType2(e.target.value)}
          >
            <option value="string">string</option>
            <option value="number">number</option>
            <option value="boolean">boolean</option>
            <option value="object">object</option>
            <option value="undefined">undefined</option>
          </select>
        </div>
      </article>
      <article className="operator-container">
        <div className="operator">
          <h3 className="third">Choose the operator :</h3>
          <select
            name="operation"
            id="operation"
            onChange={(e) => setOper(e.target.value)}
          >
            <option className="option" value="addition">
              additon
            </option>
            <option className="option" value="multiplication">
              multiplication
            </option>
            <option className="option" value="equality">
              equlaity
            </option>
            <option className="option" value="strictEquality">
              strict equality
            </option>
          </select>
        </div>
        <button className="btn" onClick={handleOperation}>
          Result
        </button>
      </article>
      {open && <p>{result}</p>}
    </section>
  );
}

export default App;
