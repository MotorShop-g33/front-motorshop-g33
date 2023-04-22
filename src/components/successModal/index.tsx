import {
	Text,
	Modal,
	useDisclosure,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
} from "@chakra-ui/react";

export const SuccessModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent w={"95%"} maxW={"500px"}>
				<ModalHeader>Sucesso!</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Text as={"h3"} fontSize={"1em"} fontWeight={500}>
						Sua anúncio foi criado com sucesso!
					</Text>
					<Text mt={"1rem"}>
						Agora você poderá ver seus negócios crescendo em grande
						escala
					</Text>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
