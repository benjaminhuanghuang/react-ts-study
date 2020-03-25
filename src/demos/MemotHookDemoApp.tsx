import React, { useState, createContext, useMemo } from "react";

function Counter(props) {
  return <h1>{props.count}</h1>;
}

export default function() {
  const [count, setCount] = useState(0);

  const double = useMemo(() => {
    return count * 2;
  }, [count]);

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
      <Counter count={count} />
    </div>
  );
}
