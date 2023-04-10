import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <>
      <h1>Eu sou o LoginPage</h1>
      <Link to={"/"}>Home page</Link><br />
      <Link to={"/register"}>Register</Link>
    </>
  );
};
