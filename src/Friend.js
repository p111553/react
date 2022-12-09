import React from "react";

const friend = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Name:{props.name}</h1>
      <h2>Age:{props.age}</h2>
      <p>{props.desc}</p>
    </div>
  );
};

export default friend;
