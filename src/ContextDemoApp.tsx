import React from "react";

// {text:'test'} define the object type, fields
const StoreContext = React.createContext({text:'test'});

function Parent(props:any) {
  const obj = {text: "Random ddd"};

  return <StoreContext.Provider value={obj}>{props.children}</StoreContext.Provider>;
}

function Child() {
  const hook = React.useContext(StoreContext)
  return <div>{hook.text}</div>;
}

export default function TodoApp(): JSX.Element {
  return (
    <Parent>
      <Child />
    </Parent>
  );
}
