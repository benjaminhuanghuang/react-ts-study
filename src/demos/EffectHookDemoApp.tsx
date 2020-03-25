import React, { useState, useEffect } from "react";

export default function() {
  const [count, setCount] = useState(0);
  const onResize = () => {};
  // 不使用第二个参数，每次渲染后都会调用
  useEffect(() => {
    document.title = String(count);
  });

  // 第二个参数是[], 只在第一次渲染后执行

  useEffect(() => {
    window.addEventListener("resize", onResize, false);

    return () => {
      window.removeEventListener("resize", onResize, false);
    };
  }, []);

  // 如果第二个参数改变，useEffect每次执行
  useEffect(() => {
    console.log(count);
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
      {count}
    </div>
  );
}
