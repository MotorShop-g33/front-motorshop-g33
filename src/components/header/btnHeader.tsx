import {
  Box,
  Flex,
  IconButton,
  // Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

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
              style={{
                width: "90px",
              }}
              to="/login"
            >
              Fazer Login
            </Link>
          </MenuItem>
          <MenuItem _hover={{ bg: "none" }}>
            <Link
              style={{
                width: "95%",
                border: "solid 1px var(--gray-4)",
                padding: " .6rem 2rem",
                color: "black",
                textAlign: "center",
              }}
              to="/register"
            >
              Register
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>

      <Flex gap={5} align={"center"} display={{ base: "none", md: "flex" }}>
        <Link
          style={{
            fontWeight: "600",
            width: "90px",
          }}
          to="/login"
        >
          Fazer Login
        </Link>
        <Link
          style={{
            fontWeight: "600",
            border: "solid 1px var(--gray-4)",
            padding: " .6rem 2rem",
            color: "black",
          }}
          to="/register"
        >
          Register
        </Link>
      </Flex>
    </>
  );
};
