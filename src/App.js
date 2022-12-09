import React from "react";
import "./style/style.css";
import Friend from "./Friend";
const App = () => {
  let friend = [
    { name: "Harry", age: 17, desc: "HARRY IS A GOOD GUY." },
    { name: "Ron", age: 17, desc: "Ron is a good boy" },
  ];
  return (
    <div>
      <h1>MY Profile</h1>
      <p>My friend are:</p>

      {friend.map((friend) => (
        <Friend name={friend.name} age={friend.age} desc={friend.desc} />
      ))}
    </div>
  );
};

export default App;
