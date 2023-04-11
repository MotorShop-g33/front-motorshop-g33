import { List, ListItem, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const FilterAside = () => {
  const list = {
    Marca: [
      "Citroën",
      "Fiat",
      "Ford",
      "Fiat",
      "Honda",
      "Hyundai",
      "Nissan",
      "Peugeot",
      "Renault,",
      "Toyota",
      "Volkswagen",
      "Honda",
    ],
  };

  const { productsList } = useContext(UserContext);
  console.log(productsList);
  const marca = [...new Set(list.Marca)];

  return (
    <List>
      <Text className="titleFilter" as={"h3"}>
        Marcas
      </Text>
      {productsList?.map((item, i) => (
        <ListItem key={i}>
          <Text color={"var(--gray-3)"}>{item.brand}</Text>
        </ListItem>
      ))}
    </List>
  );
};
