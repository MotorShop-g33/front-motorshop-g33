import {
  Box,
  Button,
  Flex,
  List,
  ListItem,
  Text,
  background,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { IAnnouncements } from "../../interfaces/announcements";
import { Button_big_text } from "../../styles/buttons";

export const FilterAside = () => {
  const { productsList, setFilterValue, filterValue } = useContext(UserContext);
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

  // const handlePrice = () => {
  //   const valores = productsList
  //     .map((p) => p.price)
  //     .sort((a: any, b: any) => a - b);

  //   return valores;
  // };
  // handlePrice();
  const { onClose } = useDisclosure();
  const handleFilter = (e: string | number) => {
    setFilterValue(e);
  };

  return (
    <Flex flexDir={"column"} gap={"1rem"}>
      <Box>
        {/*====Marcas ==== */}
        <List>
          <Text className="titleFilter" as={"h3"}>
            Marcas
          </Text>
          {singleBrand?.map((item, i) => (
            <ListItem key={i}>
              <Text onClick={(e) => handleFilter(item)} color={"var(--gray-3)"}>
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
              <Text onClick={(e) => handleFilter(item)} color={"var(--gray-3)"}>
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
              <Text onClick={(e) => handleFilter(item)} color={"var(--gray-3)"}>
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
              <Text onClick={(e) => handleFilter(item)} color={"var(--gray-3)"}>
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

          <Flex>
            <Button_big_text set_background_color="red">Minimo</Button_big_text>
            <Button_big_text>Máxma</Button_big_text>
          </Flex>
        </List>
        {/*====Proço ==== */}
        <List>
          <Text className="titleFilter" as={"h3"}>
            Proço
          </Text>
          <Flex>
            <Button_big_text set_background_color="red">Minimo</Button_big_text>
            <Button_big_text>Máxma</Button_big_text>
          </Flex>
        </List>
      </Box>

      <Box>
        <Button p={"1rem 5rem"}>Limpar filtros</Button>
      </Box>
    </Flex>
  );
};
