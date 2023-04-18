import React from "react";

import {
	Button,
	FormControl,
	FormLabel,
	HStack,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Stack,
	Text,
	Textarea,
	useDisclosure,
} from "@chakra-ui/react";

export const CreateAnnouncementModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const initialRef = React.useRef(null);
	const finalRef = React.useRef(null);

	return (
		<>
			<Button onClick={onOpen}>Criar anúncio</Button>

			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader paddingY={4}>Criar anúncio</ModalHeader>
					<ModalCloseButton />

					<ModalBody pb={6}>
						<Text fontSize="14px" fontFamily="Inter" fontWeight={500} lineHeight="24px" color="#000">Infomações do veículo</Text>
						<FormControl mt={3}>
							<FormLabel>Marca</FormLabel>
							<Input
								ref={initialRef}
								placeholder="Mercedes Benz"
							/>
						</FormControl>

						<FormControl mt={4}>
							<FormLabel>Modelo</FormLabel>
							<Input placeholder="A 200 CGI ADVANCE SEDAN" />
						</FormControl>

						<Stack>
							<HStack mt={4}>
								<FormControl>
									<FormLabel>Ano</FormLabel>
									<Input placeholder="2018" />
								</FormControl>

								<FormControl>
									<FormLabel>Combustível</FormLabel>
									<Input placeholder="Gasolina / Etanol" />
								</FormControl>
							</HStack>

							<HStack mt={4}>
								<FormControl>
									<FormLabel>Quilometragem</FormLabel>
									<Input placeholder="30.000" />
								</FormControl>

								<FormControl>
									<FormLabel>Cor</FormLabel>
									<Input placeholder="Branco" />
								</FormControl>
							</HStack>

							<HStack mt={4}>
								<FormControl>
									<FormLabel>Preço tabela FIPE</FormLabel>
									<Input placeholder="R$ 48.000,00" />
								</FormControl>

								<FormControl>
									<FormLabel>Preço</FormLabel>
									<Input placeholder="R$ 50.000,00" />
								</FormControl>
							</HStack>
						</Stack>

						<FormControl mt={4}>
							<FormLabel>Descrição</FormLabel>
							<Textarea
								resize="none"
								placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
							/>
						</FormControl>

						<FormControl mt={4}>
							<FormLabel>Imagem da capa</FormLabel>
							<Input placeholder="https://image.com" />
						</FormControl>

						<FormControl mt={4}>
							<FormLabel>1° Imagem da galeria</FormLabel>
							<Input placeholder="https://image.com" />
						</FormControl>

						<FormControl mt={4}>
							<FormLabel>2° Imagem da galeria</FormLabel>
							<Input placeholder="https://image.com" />
						</FormControl>

						<Button mt={3}>
							Adicionar campo para imagem da galeria
						</Button>
					</ModalBody>

					<ModalFooter>
						<Button onClick={onClose} mr={3}>
							Cancelar
						</Button>
						<Button colorScheme="purple">Criar anúncio</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
