import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { MainSection, Banner, Content } from "../../styles/dashboard";
import { AnnouncementCard } from "../../components/announcementList.tsx";
import { UnorderedList, useMediaQuery } from "@chakra-ui/react";
import G33 from "../../assets/icon_g33.png";
import { FilterAside } from "../../components/filterAside";
import { ModalFilter } from "../../components/filterAside/model.filter";
import { Pagination } from "../../components/pagination";

export const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargerThan750] = useMediaQuery("(min-width: 750px)");
  const { filterproduct } = useContext(UserContext);

  function toggleModal(e: any) {
    setIsOpen(!isOpen);
  }
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

          {isLargerThan750 ? (
            <UnorderedList
              w={"70%"}
              display={"flex"}
              flexWrap={"wrap"}
              justifyContent={"space-evenly"}
              gap={"24px"}
            >
              {filterproduct?.map((product) => (
                <AnnouncementCard
                  key={product.id}
                  id={product.id}
                  img={product.avatar}
                  title={product.model}
                  description={product.description}
                  year={product.year}
                  price={product.price}
                  fipe={product.fipe}
                  milage={product.milage}
                  user={product.user}
                ></AnnouncementCard>
              ))}
            </UnorderedList>
          ) : (
            <UnorderedList
              w={"100%"}
              display={"flex"}
              flexWrap={"nowrap"}
              overflowX={"scroll"}
              gap={"24px"}
            >
              {filterproduct?.map((product) => (
                <AnnouncementCard
                  key={product.id}
                  id={product.id}
                  img={product.avatar}
                  title={product.model}
                  description={product.description}
                  year={product.year}
                  price={product.price}
                  fipe={product.fipe}
                  milage={product.milage}
                  user={product.user}
                ></AnnouncementCard>
              ))}
            </UnorderedList>
          )}
        </Content>
        <ModalFilter />
        <Pagination />
      </MainSection>
    </>
  );
};
