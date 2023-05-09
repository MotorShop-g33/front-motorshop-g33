import {
  Box,
  Flex,
  Avatar,
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
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { BtnHeader } from "./btnHeader";
import logoG33 from "../../assets/logo_g33.png";
import { EditProfileModal } from "../editProfileModal";
import { EditAddressModal } from "../editAddressModal";

export const HeaderMenu = () => {
  const { isOpen } = useDisclosure();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
	const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  const handleOpenModal = (modal: boolean) => {
    modal ? setIsProfileModalOpen(true) : setIsAddressModalOpen(true);
  };

  const handleCloseModal = (modal: boolean) => {
    modal ? setIsProfileModalOpen(false) : setIsAddressModalOpen(false);
  };

  const { token, navigate, user } = useContext(UserContext);

  const logout = () => {
    localStorage.removeItem("@tokenG33:token");
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
              <a href="/">
                <img src={logoG33} alt="G33 Motorshop Logo" />
              </a>
            </Text>
          </Box>

          <Flex
            borderLeft={"solid 2px var(--gray-6) "}
            p={"1rem"}
            minW={"240px"}
            h={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            css={{
              "@media (max-width: 769px)": {
                borderLeft: "none",
                justifyContent: "flex-end",
              },
            }}
          >
            {token ? (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <IconButton
                    color={"var(--gray-0)"}
                    p={"1em"}
                    as={"span"}
                    size={"md"}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={"Open Menu"}
                    display={{ md: "none" }}
                  />
                  <Avatar
                    size={"sm"}
                    name={user?.name}
                    src={"img"}
                    display={{ base: "none", md: "block" }}
                  />
                </MenuButton>

                <MenuList
                  position={"absolute"}
                  w={"200px"}
                  minW={0}
                  top={"6px"}
                  left={"-1rem"}
                  boxShadow={"0px 4px 40px -10px var(--boxShdown)"}
                  css={{
                    "@media (max-width: 769px)": {
                      width: "140px",
                      bg: "red",
                      left: "-5rem",
                    },
                  }}
                >
                  <MenuItem
                    bg={"var(--gray-9)"}
                    color={"black"}
                    onClick={() => handleOpenModal(true)}
                  >
                    Editar perfil
                  </MenuItem>
                  <EditProfileModal isOpen={isProfileModalOpen} onClose={() => handleCloseModal(true)} />
                  <MenuItem
                    bg={"var(--gray-9)"}
                    color={"black"}
                    onClick={() => handleOpenModal(false)}
                  >
                    Editar endereço
                  </MenuItem>
                  <EditAddressModal isOpen={isAddressModalOpen} onClose={() => handleCloseModal(false)}	/>
                  {user.isStaff == true && (
                    <MenuItem
                      bg={"var(--gray-9)"}
                      color={"black"}
                      onClick={() => navigate(`/profile?id=${user.id}`)}
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
                  {user?.name || "user name"}
                </Text>
              </Menu>
            ) : (
              <div>
                <BtnHeader />
              </div>
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
