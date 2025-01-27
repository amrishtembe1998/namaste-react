import React from "react";
import ReactDOM from "react-dom/client";

//React.createElemet => Javascript object => HTML element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);
console.log(heading);

//JSX Element => React.createElement => Javascript object => HTML element
// Babel(Present in Parcel) converts code from JSX element to React.createElement

const jsxHeading = <h1 id="heading">Hello World from React</h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
