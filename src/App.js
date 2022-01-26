import { useState } from "react";

export default function App() {
  return (
    <div>
      <Hello></Hello>
    </div>
  );
}

//Hooks and State
function Hello() {
  let counter = 1000; //simple variable declaration

  //RHS :: Special function :: startwith, prefix, useState, useEffect
  //React Hooks -
  //useState : It works with Dom internally. it take care of DOM manipulation

  let [counter1, setCounter] = useState(1); // declaration using useState

  const like = () => {
    const newCount = counter1 + 1;
    setCounter(newCount);
  };

  return (
    <div>
      <h1>
        Counter : {counter1}
        <button onClick={like}> Like</button>
      </h1>
    </div>
  );
}
