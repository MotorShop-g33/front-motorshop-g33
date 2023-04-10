import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <>
      <h1>Eu sou a RegisterPage</h1>
      <Link to={"/"}>Home page</Link><br />
      <Link to={"/login"}>Login</Link>
    </>
  );
};
