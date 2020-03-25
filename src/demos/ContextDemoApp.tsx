import React, { Component, createContext } from "react";

// the dafaule value passed to createContext will be used when 
// consumer can not find provider
// can be used for UT
const BattaryContext = createContext(0);
const OnlineContext = createContext(false);

function Leaf() {
  // Return a function
  return (
    <BattaryContext.Consumer>
      {battery => (
        <OnlineContext.Consumer>
          {online => (
            <h1>
              Battery: {battery}, Online: {String(online)}
            </h1>
          )}
        </OnlineContext.Consumer>
      )}
    </BattaryContext.Consumer>
  );
}

function Middle() {
  return <Leaf />;
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
