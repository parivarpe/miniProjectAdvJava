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

  let [username, setUserName] = useState(""); // declaration using useState
  let [password, setPass] = useState("");
  const handleUserName = (e) => {
    const newUname = e.target.value;
    setUserName(newUname);
  };

  const handlepass = (e) => {
    const newPass = e.target.value;
    setPass(newPass);
  };

  return (
    <div>
      <input type="text" value={username} onChange={handleUserName}></input>
      <input type="password" value={password} onChange={handlepass}></input>
      <h1>{username}</h1>
      <h1>{password}</h1>
    </div>
  );
}
