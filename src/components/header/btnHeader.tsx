import {
  Box,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export const BtnHeader = () => {
  const displayValue = useBreakpointValue({ base: "flex", md: "none" });
  return (
    <>
      <Menu>
        <MenuButton
          display={{ md: "none" }}
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList
          display={displayValue}
          flexDir={"column"}
          h={"181"}
          borderColor={"none"}
          w={"319px"}
          justifyContent={"center"}
          gap={"2rem"}
          margin={"0 -1.5rem"}
        >
          <MenuItem>
            <Link
              width={"90px"}
              colorScheme={"var(--gray-2)"}
              href="http://localhost:5173/login"
            >
              Fazer Login
            </Link>
          </MenuItem>
          <MenuItem _hover={{ bg: "none" }}>
            <Link
              w={"95%"}
              border={"solid 1px var(--gray-4)"}
              p={" .6rem 2rem"}
              color={"black"}
              textAlign={"center"}
              href="http://localhost:5173/register"
            >
              Register
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>

      <Flex gap={5} align={"center"} display={{ base: "none", md: "flex" }}>
        <Link
          fontWeight="600"
          _hover={{ color: "blue", transitionDuration: "400ms" }}
          width={"90px"}
          colorScheme={"var(--gray-2)"}
          href="http://localhost:5173/login"
        >
          Fazer Login
        </Link>
        <Link
          fontWeight="600"
          border={"solid 1px var(--gray-4)"}
          p={" .6rem 2rem"}
          color={"black"}
          href="http://localhost:5173/register"
        >
          Register
        </Link>
      </Flex>
    </>
  );
};
