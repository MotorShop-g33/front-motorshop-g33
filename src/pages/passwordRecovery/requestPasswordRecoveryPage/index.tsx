import { Box, Flex } from "@chakra-ui/react";
import { RequestPasswordRecoveryForm } from "../../../components/formPasswordRecovery/requestPasswordRecoveryForm";

export const RequestPasswordRecoveryPage = () => {
  return (
    <Flex
      bg={"var(--gray-8)"}
      h={"100vh"}
      justifyContent={"center"}
      alignItems="center"
    >
      <RequestPasswordRecoveryForm></RequestPasswordRecoveryForm>
    </Flex>
  );
};