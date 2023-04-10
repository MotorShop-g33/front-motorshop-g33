import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import { FooterComponents } from "../../components/footer";

export const Dashboard = () => {
  const { count, setCount } = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(e: any) {
    setIsOpen(!isOpen);
  }

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
