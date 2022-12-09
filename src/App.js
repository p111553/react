import React from "react";

const App = () => {
  const buttonHandler = () => {
    let date = new Date().toLocaleDateString();
    alert(date);
  };
  return (
    <div>
      <form action="">
        <input type="text" />
        <button onClick={buttonHandler}> Submit</button>
      </form>
      <p></p>
    </div>
  );
};

export default App;
