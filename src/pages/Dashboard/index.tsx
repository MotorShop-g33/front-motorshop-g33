import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import { MainSection, Banner, Content } from "../../styles/dashboard";
import { AnnouncementCard } from "../../components/announcementList.tsx";
import { UnorderedList } from "@chakra-ui/react";
import G33 from "../../assets/icon_g33.png";
import { FilterAside } from "../../components/filterAside";

export const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(e: any) {
    setIsOpen(!isOpen);
  }

  // --> DADOS MOCKADOS APENAS PARA VISUALIZAÇÃO DO DESIGN DOS CARDS (NECESSÁRIO DELEÇÃO FUTURA) <--
  const exampleData = {
    img: "https://www.pngplay.com/wp-content/uploads/12/Donkey-From-Shrek-PNG-Pic-Background.png",
    title: "Burro do shrek",
    description: "Um novissimo burro com 0 km e manutenção em dia",
    userImg: "",
    username: "Felipe Bulhoes",
    milage: "0",
    year: 2006,
    price: 59990,
  };

  return (
    <>
      <MainSection>
        <Banner>
          <div>
            <img src={G33} width={80} height={80} alt="G33 Motorshop Logo" />
            <h1>MOTORSHOP</h1>
            <span>A melhor plataforma de anúncios de carros do país.</span>
          </div>
        </Banner>

        <Content>
          <aside>
            <FilterAside />
          </aside>

          <UnorderedList
            w={"70%"}
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"space-evenly"}
            gap={"24px"}
          >
            <AnnouncementCard
              img={exampleData.img}
              title={exampleData.title}
              description={exampleData.description}
              userImg={exampleData.userImg}
              username={exampleData.username}
              milage={exampleData.milage}
              year={exampleData.year}
              price={exampleData.price}
            ></AnnouncementCard>
            <AnnouncementCard
              img={exampleData.img}
              title={exampleData.title}
              description={exampleData.description}
              userImg={exampleData.userImg}
              username={exampleData.username}
              milage={exampleData.milage}
              year={exampleData.year}
              price={exampleData.price}
            ></AnnouncementCard>
            <AnnouncementCard
              img={exampleData.img}
              title={exampleData.title}
              description={exampleData.description}
              userImg={exampleData.userImg}
              username={exampleData.username}
              milage={exampleData.milage}
              year={exampleData.year}
              price={exampleData.price}
            ></AnnouncementCard>
          </UnorderedList>
        </Content>
      </MainSection>
    </>
  );
};
