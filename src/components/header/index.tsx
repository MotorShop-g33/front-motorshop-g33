import {
  Box,
  Flex,
  Avatar,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { BtnHeader } from "./btnHeader";

export const HeaderMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { token, navigate } = useContext(UserContext);

  //user para teste token ou isStaff
  const user = {
    token: "token",
    isStaff: true,
  };

  const logout = () => {
    localStorage.removeItem("@tokenName:token");
    localStorage.removeItem("@userId:id");
    navigate("/");
  };

  return (
    <>
      <Box bg={"var(--gray-10)"} border={"solid 1px var(--gray-6) "}>
        <Flex
          h={16}
          w={"95%"}
          m={"0 auto"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <Text fontWeight={"bold"} fontSize={16} color={"var(--gray-0)"}>
              <a href="/">G33</a>
            </Text>
          </Box>

          <Flex
            borderLeft={"solid 2px var(--gray-6) "}
            p={"1rem"}
            h={"100%"}
            alignItems={"center"}
            css={{
              "@media (max-width: 769px)": {
                borderLeft: "none",
              },
            }}
          >
            {" "}
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            {user.token ? (
              <Menu>
                <MenuButton
                  display={{ base: "none", md: "block" }}
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar size={"sm"} name={"douglas borger"} src={"img"} />
                </MenuButton>

                <MenuList
                  display={{ base: "none", md: "block" }}
                  bg={"var(--gray-9)"}
                  m={"10px -4rem"}
                  boxShadow={"0px 4px 40px -10px var(--boxShdown)"}
                >
                  <MenuItem
                    bg={"var(--gray-9)"}
                    color={"black"}
                    onClick={() => navigate("/register")}
                  >
                    Editar perfil
                  </MenuItem>
                  <MenuItem
                    bg={"var(--gray-9)"}
                    color={"black"}
                    onClick={() => navigate("/login")} // exemplo ao clicar trocar /p login
                  >
                    Editar endereço
                  </MenuItem>
                  {user.isStaff == true && (
                    <MenuItem
                      bg={"var(--gray-9)"}
                      color={"black"}
                      onClick={() => navigate("/announcement")} // pagina não existe ainda
                    >
                      Meus Anúncios
                    </MenuItem>
                  )}

                  <MenuItem
                    bg={"var(--gray-9)"}
                    color={"black"}
                    onClick={() => logout()}
                  >
                    Sair
                  </MenuItem>
                </MenuList>
                <Text
                  display={{ base: "none", md: "block" }}
                  color={"var(--gray-2)"}
                  ml={"10px"}
                >
                  {"user name "}
                </Text>
              </Menu>
            ) : (
              <div>
                <BtnHeader />
              </div>
            )}
          </Flex>
        </Flex>

        {isOpen == true && (
          <Flex
            pb={4}
            display={{ md: "none" }}
            color={"var( --gray-0: #0B0D0D)"}
          >
            <Link> Edita perfil</Link>
            <Link> Editar endereço</Link>
            <Link>sair </Link>
          </Flex>
        )}
      </Box>
    </>
  );
};
