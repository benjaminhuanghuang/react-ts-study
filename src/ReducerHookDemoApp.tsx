import React from "react";

export default function RecuderHookDemoApp(): JSX.Element {
  function reducer(state: any, action: any) {
    switch (action) {
      case "ADD":
        return state + 1;
      case "SUB":
        return state - 1;
      case "RESET":
        return 0;
      default:
        return state;
    }
  }
  const [count, dispatch] = React.useReducer(reducer, 0);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch("ADD")}>+</button>
      <button onClick={() => dispatch("SUB")}>-</button>
      <button onClick={() => dispatch("RESET")}>Reset</button>
    </>
  );
}
