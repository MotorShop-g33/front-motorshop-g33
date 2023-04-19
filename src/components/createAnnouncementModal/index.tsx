import React, { useState } from "react";

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

import { DivModal } from "../../styles/createAnnouncementModal";

export const CreateAnnouncementModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [inputs, setInputs] = useState<any[]>([]);
	const [count, setCount] = useState(0);

	const initialRef = React.useRef(null);
	const finalRef = React.useRef(null);

	const addInput = () => {
		if (count < 4) {
			setInputs([...inputs, ""]);
			setCount(count + 1);
		}
	};

	const handleInputChange = (event: any, index: any) => {
		const newInputs: any = [...inputs];
		newInputs[index] = event.target.value;
		setInputs(newInputs);
	};

	return (
		<>
			<Button
				className="buttonOpenModal"
				onClick={onOpen}
				color="var(--random-13)"
				borderRadius={3}
				colorScheme="purple"
				variant="outline"
			>
				Criar anúncio
			</Button>

			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}
				size="xl"
			>
				<DivModal>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader
							fontFamily="Lexend"
							fontWeight={500}
							fontSize="16px"
							lineHeight="20px"
							paddingY={4}
						>
							Criar anúncio
						</ModalHeader>
						<ModalCloseButton
							color="var(--gray-4)"
							_hover={{
								color: "var(--gray-0)",
								bgColor: "var(--gray-4)",
							}}
						/>

						<ModalBody
							pt={0}
							pb={6}
							fontFamily="Inter"
							fontWeight={500}
							fontSize="14px"
						>
							<Text lineHeight="24px" color="var(--gray-0)">
								Infomações do veículo
							</Text>
							<FormControl mt={4}>
								<FormLabel className="label">Marca</FormLabel>
								<Input
									ref={initialRef}
									className="input"
									placeholder="Mercedes Benz"
								/>
							</FormControl>

							<FormControl mt={4}>
								<FormLabel className="label">Modelo</FormLabel>
								<Input
									className="input"
									placeholder="A 200 CGI ADVANCE SEDAN"
								/>
							</FormControl>

							<Stack>
								<HStack mt={4}>
									<FormControl>
										<FormLabel className="label">
											Ano
										</FormLabel>
										<Input
											className="input"
											placeholder="2018"
										/>
									</FormControl>

									<FormControl>
										<FormLabel className="label">
											Combustível
										</FormLabel>
										<Input
											className="input"
											placeholder="Gasolina / Etanol"
										/>
									</FormControl>
								</HStack>

								<HStack mt={4}>
									<FormControl>
										<FormLabel className="label">
											Quilometragem
										</FormLabel>
										<Input
											className="input"
											placeholder="30.000"
										/>
									</FormControl>

									<FormControl>
										<FormLabel className="label">
											Cor
										</FormLabel>
										<Input
											className="input"
											placeholder="Branco"
										/>
									</FormControl>
								</HStack>

								<HStack mt={4}>
									<FormControl>
										<FormLabel className="label">
											Preço tabela FIPE
										</FormLabel>
										<Input
											className="input"
											placeholder="R$ 48.000,00"
										/>
									</FormControl>

									<FormControl>
										<FormLabel className="label">
											Preço
										</FormLabel>
										<Input
											className="input"
											placeholder="R$ 50.000,00"
										/>
									</FormControl>
								</HStack>
							</Stack>

							<FormControl mt={4}>
								<FormLabel className="label">
									Descrição
								</FormLabel>
								<Textarea
									className="textArea"
									resize="none"
									placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
								/>
							</FormControl>

							<FormControl mt={4}>
								<FormLabel className="label">
									Imagem da capa
								</FormLabel>
								<Input
									className="input"
									placeholder="https://image.com"
								/>
							</FormControl>

							<FormControl mt={4}>
								<FormLabel className="label">
									1° Imagem da galeria
								</FormLabel>
								<Input
									className="input"
									placeholder="https://image.com"
								/>
							</FormControl>

							<FormControl mt={4}>
								<FormLabel className="label">
									2° Imagem da galeria
								</FormLabel>
								<Input
									className="input"
									placeholder="https://image.com"
								/>
							</FormControl>

							<>
								{inputs.map((value, index) => (
									<FormControl mt={4}>
										<FormLabel className="label">
											{index + 3}° Imagem da galeria
										</FormLabel>
										<Input
											key={index}
											value={value}
											onChange={(event) =>
												handleInputChange(event, index)
											}
											className="input"
											placeholder="https://image.com"
										/>
									</FormControl>
								))}
							</>

							<Button
								onClick={addInput}
								isDisabled={count >= 4}
								className="buttonAddImage"
								whiteSpace="pre-wrap"
								color="var(--random-13)"
								bg="var(--brand-4)"
								borderRadius={3}
								_hover={{
									bg: "var(--brand-3)",
								}}
								_active={{
									color: "var(--brand-4)",
									bg: "var(--random-5)",
								}}
								mt={5}
							>
								Adicionar campo para imagem da galeria
							</Button>
						</ModalBody>

						<ModalFooter>
							<Button
								className="buttonFooter"
								onClick={onClose}
								color="var(--gray-2)"
								bg="var(--gray-6)"
								colorScheme="gray"
								mr={3}
							>
								Cancelar
							</Button>
							<Button
								className="buttonFooter"
								color="var(--brand-4)"
								bg="var(--brand-3)"
								_hover={{
									bg: "var(--random-4)",
								}}
								_active={{
									bg: "var(--random-5)",
								}}
							>
								Criar anúncio
							</Button>
						</ModalFooter>
					</ModalContent>
				</DivModal>
			</Modal>
		</>
	);
};
