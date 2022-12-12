import React, { useState } from "react";

const App = () => {
  let [name, setName] = useState("Rui Lee");
  const changeNameHandler = () => {
    setName("mike huang");
  };
  return (
    <div>
      <h1>{name}</h1>
      <button onClink={changeNameHandler}>change Name</button>
    </div>
  );
};

export default App;
