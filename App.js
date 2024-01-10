const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello React world!"
);

root.render(heading);
