import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const { count, setCount } = useContext(UserContext);

  return (
    <>
      <h1>Eu sou a dashboard</h1>
      <h2>Contador {count}</h2>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
      <button onClick={() => setCount(count - 1)}>Diminuir</button>
      <div>
        <Link to={"/register"}>Registro</Link>
      </div>
      <div>
        <Link to={"/login"}>Login</Link>
      </div>
    </>
  );
};
