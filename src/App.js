import React from "react";

const App = () => {
  let name = "rui lee";
  return (
    <div>
      <h1 id="myName">{name}</h1>
      <button id="changeName">change Name</button>
    </div>
  );
};

export default App;
