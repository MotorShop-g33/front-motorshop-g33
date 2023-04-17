import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";

import { FormLogin } from "../../components/formLogin";

export const LoginPage = () => {
  return (
    <Flex bg={"var(--gray-8)"} h={"100vh"} alignItems="center">
      <FormLogin />
    </Flex>
  );
};
