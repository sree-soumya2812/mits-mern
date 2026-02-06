import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [Value, setValue] = useState(0);
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  useEffect(() => {
    console.log("useEffect Mounted");
  }, [count, Value]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>inc</button>
      <h1>{Value}</h1>
      <button onClick={() => setValue(Value + 1)}>inc</button>
    </div>
  );
};

export default UseEffect;
