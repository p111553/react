import React from "react";

const App = () => {
  // const buttonHandler = (e) => {
  //   e.preventDefault();
  //   let date = new Date().toLocaleDateString();
  //   alert(date);
  // };
  const buttonHandler = (msg) => {
    alert(msg);
  };
  return (
    <div>
      {/* <form action="">
        <input type="text" />
        <button onClick={buttonHandler}> Submit</button>
      </form> */}
      <button
        onClick={() => {
          buttonHandler("Hello,how are you?");
        }}
      >
        Hello
      </button>
      <p></p>
    </div>
  );
};

export default App;
