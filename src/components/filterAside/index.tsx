import { Box, Button, Flex, List, ListItem, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { IAnnouncements } from "../../interfaces/announcements";
import { Button_medium_text } from "../../styles/buttons";

export const FilterAside = () => {
  const {
    productsList,
    setFilterValue,
    handlePriceMin,
    handlePriceMax,
    handleMaxKm,
    handleMinKm,
    setFilterProduct,
    SetCurrentPage,
  } = useContext(UserContext);
  //provisorio
  const singleBrand: string[] = [];
  const uniqueModel: string[] = [];
  const singleColor: string[] = [];
  const singleyear: number[] = [];
  const singleFuel: string[] = [];

  productsList.forEach((carro: IAnnouncements) => {
    if (!singleBrand.includes(carro.brand)) {
      singleBrand.push(carro.brand);
    }
    if (!uniqueModel.includes(carro.model)) {
      uniqueModel.push(carro.model);
    }

    if (!singleColor.includes(carro.color)) {
      singleColor.push(carro.color);
    }
    if (!singleyear.includes(carro.year)) {
      singleyear.push(carro.year);
    }
    if (!singleFuel.includes(carro.fuel)) {
      singleFuel.push(carro.fuel);
    }
  });

  const handleFilter = (e: string | number) => {
    setFilterValue(e);
  };

  const ClearFilter = () => {
    console.log(productsList);
    setFilterProduct(productsList);
  };

  return (
    <Flex flexDir={"column"}>
      <Flex flexDir={"column"} gap={"1rem"}>
        {/*====Marcas ==== */}
        <List>
          <Text className="titleFilter" as={"h3"}>
            Marcas
          </Text>
          {singleBrand?.map((item, i) => (
            <ListItem key={i}>
              <Text
                _hover={{ color: "var(--brand2)" }}
                cursor={"pointer"}
                onClick={(e) => {
                  handleFilter(item);
                }}
                color={"var(--gray-3)"}
              >
                {item}
              </Text>
            </ListItem>
          ))}
        </List>
        {/*====Modelo ==== */}
        <List>
          <Text className="titleFilter" as={"h3"}>
            Modelo
          </Text>
          {uniqueModel?.map((item, i) => (
            <ListItem key={i}>
              <Text
                _hover={{ color: "var(--brand2)" }}
                cursor={"pointer"}
                onClick={(e) => handleFilter(item)}
                color={"var(--gray-3)"}
              >
                {item}
              </Text>
            </ListItem>
          ))}
        </List>
        {/*====Cor ==== */}
        <List>
          <Text className="titleFilter" as={"h3"}>
            Cor
          </Text>
          {singleColor?.map((item, i) => (
            <ListItem key={i}>
              <Text
                _hover={{ color: "var(--brand2)" }}
                cursor={"pointer"}
                onClick={(e) => handleFilter(item)}
                color={"var(--gray-3)"}
              >
                {item}
              </Text>
            </ListItem>
          ))}
        </List>
        {/*====Ano ==== */}
        <List>
          <Text className="titleFilter" as={"h3"}>
            Ano
          </Text>
          {singleyear?.map((item, i) => (
            <ListItem key={i}>
              <Text
                _hover={{ color: "var(--brand2)" }}
                cursor={"pointer"}
                onClick={(e) => handleFilter(item)}
                color={"var(--gray-3)"}
              >
                {item}
              </Text>
            </ListItem>
          ))}
        </List>
        <List>
          <Text className="titleFilter" as={"h3"}>
            Combustível
          </Text>
          {singleFuel?.map((item, i) => (
            <ListItem key={i}>
              <Text
                _hover={{ color: "var(--brand2)" }}
                cursor={"pointer"}
                onClick={(e) => handleFilter(item)}
                color={"var(--gray-3)"}
              >
                {item}
              </Text>
            </ListItem>
          ))}
        </List>
        {/*====Km ==== */}
        <List>
          <Text className="titleFilter" as={"h3"}>
            Km
          </Text>

          <Flex justifyContent={"space-around"} maxW={"210px"} gap={"1rem"}>
            <Button_medium_text onClick={() => handleMinKm()}>
              Minimo
            </Button_medium_text>
            <Button_medium_text onClick={() => handleMaxKm()}>
              Máxima
            </Button_medium_text>
          </Flex>
        </List>
        {/*====Proço ==== */}
        <List>
          <Text className="titleFilter" as={"h3"}>
            Preço
          </Text>
          <Flex justifyContent={"space-around"} maxW={"210px"} gap={"1rem"}>
            <Button_medium_text onClick={() => handlePriceMin()}>
              Minimo
            </Button_medium_text>
            <Button_medium_text onClick={() => handlePriceMax()}>
              Máxima
            </Button_medium_text>
          </Flex>
        </List>
      </Flex>

      <Box
        display={{ base: "none", md: "flex" }}
        justifyContent={"center"}
        maxW={"210px"}
      >
        <Button
          bg={"var(--brand2)"}
          color={"var(--white-fixed)"}
          p={"1rem 5rem"}
          onClick={() => {
            SetCurrentPage(0);
            ClearFilter();
          }}
        >
          Limpar filtros
        </Button>
      </Box>
    </Flex>
  );
};
