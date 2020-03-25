import React, { Component, useState, createContext, useContext } from "react";

const CountContext = createContext(0);

class Foo extends Component {
  render() {
    return (<CountContext.Consumer>
      {
        count => <h1>count</h1>
      }
    </CountContext.Consumer>);
  }
}

class Bar extends Component {
  static contextType = CountContext;

  render() {
    const count = this.context;
    return (
    <h1>{count}</h1>
    )
  }
}

function Counter(){
  const count = useContext(CountContext);
  return (
    <h1>{count}</h1>
    )
}

export default function() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
      <CountContext.Provider value={count}>
        <Foo />
        <Bar/>
      </CountContext.Provider>
    </div>
  );
}
