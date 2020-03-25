import React, { Component, createContext } from "react";
import { render } from "@testing-library/react";

// the dafaule value passed to createContext will be used when
// consumer can not find provider
// can be used for UT
const BattaryContext = createContext(0);
const OnlineContext = createContext(false);

function Leaf() {
  // Return a function
  return (
    <BattaryContext.Consumer>
      {battery => <h1>Battery: {battery}</h1>}
    </BattaryContext.Consumer>
  );
}

class Leaf2 extends Component {
  static contextType = BattaryContext;
  render() {
    const battery = this.context;
    return (
      <h1>Battery: {battery}</h1>
    );
  }
}

function Middle() {
  return (
    <>
      <Leaf /> 
      <Leaf2 />
    </>
  );
}

export default class ContextDemoApp extends Component {
  state = {
    battery: 60,
    online: false
  };

  render() {
    const { battery, online } = this.state;
    return (
      <>
        <button
          type="button"
          onClick={() => this.setState({ battery: battery - 1 })}
        >
          Parss
        </button>
        <button
          type="button"
          onClick={() => this.setState({ online: !online })}
        >
          Parss
        </button>
        <BattaryContext.Provider value={battery}>
          <OnlineContext.Provider value={online}>
            <Middle />
          </OnlineContext.Provider>
        </BattaryContext.Provider>
      </>
    );
  }
}
