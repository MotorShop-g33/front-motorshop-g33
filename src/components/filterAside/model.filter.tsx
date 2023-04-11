import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
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
      <Text
        bg={"var(--gray-9)"}
        color={"black"}
        onClick={onOpen}
        display={{ base: "blcok", md: "none" }}
      >
        Open Modal
      </Text>
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
        </ModalContent>
      </Modal>
    </>
  );
};
