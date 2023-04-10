import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import { MainSection, Banner, Content } from "../../styles/dashboard";
import G33 from "../../../public/icon_g33.png"

export const Dashboard = () => {
  const { count, setCount } = useContext(UserContext);

  return (
    <><MainSection>
        
        <Banner>
          <div>
          <img src={G33} width={80} height={80} alt="G33 Motorshop Logo"/>
          <h1>MOTORSHOP</h1>
            <span>A melhor plataforma de anúncios de carros do país.</span>
          </div>          
        </Banner>

        <Content>
          <aside>
            <div>
              <Link to={"/register"}>Registro</Link>
            </div>
            <div>
              <Link to={"/login"}>Login</Link>
            </div>
          </aside>

          <section>
            <button onClick={() => setCount(count + 1)}>Aumentar </button>
            <button onClick={() => setCount(count - 1)}>Diminuir </button>
            <hr />
            <h2>Contador {count}</h2>
          </section>
        </Content>

      </MainSection>
    </>
  );
};
