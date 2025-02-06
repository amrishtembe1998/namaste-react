import { useRouteError } from "react-router";

const Error = () => {
  const data = useRouteError();
  console.log(data);
  return (
    <div>
      <h1>{data.data}</h1>
      <h2>Something went wrong</h2>
      <h2>{data.status}</h2>
    </div>
  );
};

export default Error;
