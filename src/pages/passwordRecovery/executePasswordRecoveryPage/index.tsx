import { Box, Flex } from "@chakra-ui/react";
import { ExecutePasswordRecoveryForm } from "../../../components/formPasswordRecovery/executePasswordRecoveryForm";

export const ExecutePasswordRecoveryPage = () => {
  return (
    <Flex
      bg={"var(--gray-8)"}
      h={"100vh"}
      justifyContent={"center"}
      alignItems="center"
    >
      <ExecutePasswordRecoveryForm></ExecutePasswordRecoveryForm>
    </Flex>
  );
};