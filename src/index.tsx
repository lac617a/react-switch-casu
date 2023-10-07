import "./style.css"
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Switch from "./lib";

const root = document.getElementById("root");

const SIMPLE = ["one", "two", "three", "Default"];
const EXPRESSION = ["Car", "Home", "Bar", "Code", "Dev", SIMPLE[3]];
const App = () => {
  const [simple, setSimple] = useState<string>(SIMPLE[0]);
  const [expression, setExpression] = useState<string>();

  const prexiExpression = (value: string) => {
    // window.location.href = `${window.location.pathname}?expression=${value}`;
    setExpression(value);
  }

  // useEffect(() => {
  //   const query = new URLSearchParams(window.location.search);
  //   setExpression(query.get('expression') as string || EXPRESSION[0]);
  // }, []);

  return (
    <div className="main">
      <div className="items">
        <h2>Simple validacion</h2>
        <div>
          <div className="wrap-btn">
            {SIMPLE.map(item => (
              <button
                key={item}
                className="btn btn-case"
                onClick={() => setSimple(item)}>{item}</button>
            ))}
          </div>
          <Switch>
            <Switch.Case condition={simple === SIMPLE[0]}>
              <h3>Case: {SIMPLE[0]}</h3>
            </Switch.Case>
            <Switch.Case condition={simple === SIMPLE[1]}>
              <h3>Case: {SIMPLE[1]}</h3>
            </Switch.Case>
            <Switch.Case condition={simple === SIMPLE[2]}>
              <h3>Case: {SIMPLE[2]}</h3>
            </Switch.Case>
            <Switch.Default>
              <h3>{SIMPLE[3]}</h3>
            </Switch.Default>
          </Switch>
        </div>
      </div>
      <div className="items">
        <h2>Validacion con expresion</h2>
        <div>
          <div className="wrap-btn">
            {EXPRESSION.map(item => (
              <button
                key={item}
                className="btn btn-case"
                onClick={() => prexiExpression(item)}>{item}</button>
            ))}
          </div>
          <Switch expression={expression}>
            <Switch.Case condition={EXPRESSION[0]}>
              <h3>Case: {EXPRESSION[0]}</h3>
            </Switch.Case>
            <Switch.Case condition={EXPRESSION[1]}>
            <h3>Case: {EXPRESSION[1]}</h3>
            </Switch.Case>
            <Switch.Case condition={EXPRESSION[2]}>
              <h3>Case: {EXPRESSION[2]}</h3>
            </Switch.Case>
            <Switch.Case condition={EXPRESSION[3]}>
              <h3>Case: {EXPRESSION[3]}</h3>
            </Switch.Case>
            <Switch.Case condition={EXPRESSION[4]}>
              <h3>Case: {EXPRESSION[4]}</h3>
            </Switch.Case>
            <Switch.Default>
              <h3>{EXPRESSION[5]}</h3>
            </Switch.Default>
          </Switch>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  root
);