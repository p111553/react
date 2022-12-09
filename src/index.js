// const React = require("react");
// const ReactDOM = require("react-dom");

// es6
import React from "react";
import ReactDOM from "react-dom";
// function App() {
//   return React.createElement("div", null, [
//     React.createElement("h1", { style: { color: "red" } }, "My Profile"),
//     React.createElement("p", null, "My name is rui lee."),
//     React.createElement("button", null, "Check my profile."),
//   ]);
// }

// jsx
function App() {
  return (
    <div>
      <h1>My Profile</h1>
      <p>My name is rui lee.</p>
      <button>Check my profile.</button>
    </div>
  );
}

ReactDOM.render(App(), document.querySelector("#root"));
