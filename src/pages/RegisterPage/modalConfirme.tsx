import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function ConfirmaRegisterUser() {
  const { navigate } = useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* trocar para o componente depois  */}
      <Box aria-label="Confirmação de registro"></Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sucesso!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text as={"h3"} fontSize={"1em"} fontWeight={500}>
              Sua conta foi criada com sucesso!
            </Text>
            <Text mt={"1rem"}>
              Agora você poderá ver seus negócios crescendo em grande escala
            </Text>
          </ModalBody>

          <ModalFooter justifyContent={"start"}>
            <Button
              colorScheme="blue"
              bg={"var(--random-13)"}
              onClick={() => {
                onClose();
                navigate("/login");
              }}
              width={"132px"}
            >
              Ir para o login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
