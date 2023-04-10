import { Box, Flex, Link } from "@chakra-ui/react";
import { Button_medium_text } from "../../styles/buttons";
import { IUserContextProps, UserContext } from "../../context/UserContext";
import { useContext } from "react";

export const BtnHeader = () => {
  const { navigate } = useContext(UserContext);

  return (
    <Flex gap={5} align={"center"} display={{ base: "none", md: "flex" }}>
      <Link
        width={"90px"}
        colorScheme={"var(--gray-2)"}
        href="http://localhost:5173/login"
      >
        Fazer Login
      </Link>
      <Link
        border={"solid 1px var(--gray-4)"}
        p={" .6rem 2rem"}
        color={"black"}
        href="http://localhost:5173/register"
      >
        Register
      </Link>
    </Flex>
  );
};
