import {
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
import { FilterAside } from ".";

export const ModalFilter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        bg={"var(--brand2)"}
        color={"var(--white-fixed)"}
        onClick={onOpen}
        w={"279px"}
        h={"48px"}
        margin={"1rem 0"}
        display={{ base: "blcok", md: "none" }}
      >
        Filtros
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Menu</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FilterAside />
          </ModalBody>
          <ModalFooter justifyContent={"center"}>
            <Button
              bg={"var(--brand2)"}
              color={"var(--white-fixed)"}
              p={"1rem 5rem"}
              onClick={onClose}
            >
              Ver anúncios
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
