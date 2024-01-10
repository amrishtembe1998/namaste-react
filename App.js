import React from "react";
import ReactDOM from "react-dom/client";

const TopHeading = () => <h1 id="heading">Hello React world!🚀</h1>;
const BottomHeading = () => {
  return <h3 id="heading">This is ReactJS my dear friends</h3>;
};

const HeadingComponent = () => (
  <div className="demo">
    <TopHeading />
    <BottomHeading />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
