import {
	Button,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	HStack,
	Input,
	InputGroup,
	InputLeftAddon,
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
import { ToastContainer, toast } from "react-toastify";
import React, { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContext";
import { IAnnouncementsRequest } from "../../interfaces/announcements";
import { CreateAnnouncementSchema } from "../../validateSchemas/validateAnnouncementSchema";

export const EditAnnouncModal = () => {
	const notify = (message: string) =>
		toast.success(message, {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
	} = useForm<IAnnouncementsRequest>({
		resolver: yupResolver(CreateAnnouncementSchema),
	});
	const submitEdit = async (data: IAnnouncementsRequest) => {
		onClose();
		notify("Anúncio atualizado!");
	};

	const { isOpen, onOpen, onClose } = useDisclosure();

	const [addPhotos, setAddPhotos] = useState<string[]>([]);
	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		index: number
	) => {
		const newInputs: string[] = [...inputs];
		newInputs[index] = event.target.value;
		setInputs(newInputs);
	};

	const addInput = () => {
		if (count < 5) {
			setInputs([...inputs, ""]);
			setCount(count + 1);
		}
	};

	const [inputs, setInputs] = useState<string[]>([]);
	const [count, setCount] = useState<number>(0);

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
				Editar anúncio
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent w={"95%"} maxW={"xl"}>
					<ModalHeader
						fontFamily="Lexend"
						fontWeight={500}
						fontSize="16px"
						paddingY={4}
						color="var(--gray-1)"
						lineHeight="20px"
					>
						Editar anúncio
					</ModalHeader>
					<ModalCloseButton
						color="var(--gray-4)"
						_hover={{
							color: "var(--gray-0)",
							bgColor: "var(--gray-4)",
						}}
					/>

					<ModalBody
						pb={6}
						pt={0}
						fontFamily="Inter"
						fontWeight={500}
						fontSize="14px"
					>
						<Text lineHeight="24px" color="var(--gray-0)">
							Informações do veículo
						</Text>

						<FormControl isInvalid={Boolean(errors.brand)} mt={4}>
							<FormLabel
								htmlFor="brand"
								fontFamily="Inter"
								fontWeight={500}
								fontSize="14px"
							>
								Marca
							</FormLabel>
							<Input
								id="brand"
								type="text"
								h={"48px"}
								//placeholder="68900000"
								focusBorderColor="purple.500"
								//defaultValue={user.brand}
								{...register("brand")}
							/>
							<FormErrorMessage>
								{errors.brand?.message}
							</FormErrorMessage>
						</FormControl>

						<FormControl isInvalid={Boolean(errors.model)} mt={4}>
							<FormLabel
								htmlFor="model"
								fontFamily="Inter"
								fontWeight={500}
								fontSize="14px"
							>
								Modelo
							</FormLabel>
							<Input
								id="model"
								type="model"
								h={"48px"}
								//placeholder="Amapá"
								focusBorderColor="purple.500"
								//defaultValue={user.model}
								{...register("model")}
							/>
							<FormErrorMessage>
								{errors.model?.message}
							</FormErrorMessage>
						</FormControl>

						<Stack>
							<HStack
								display="flex"
								alignItems="flex-start"
								mt={4}
							>
								<FormControl isInvalid={Boolean(errors.year)}>
									<FormLabel
										htmlFor="year"
										fontFamily="Inter"
										fontWeight={500}
										fontSize="14px"
									>
										Ano
									</FormLabel>
									<Input
										id="year"
										type="text"
										h={"48px"}
										//placeholder="Macapá"
										focusBorderColor="purple.500"
										//defaultValue={user.year}
										{...register("year")}
									/>
									<FormErrorMessage>
										{errors.year?.message}
									</FormErrorMessage>
								</FormControl>

								<FormControl
									isInvalid={Boolean(errors.fuel)}
									mt={4}
								>
									<FormLabel
										htmlFor="fuel"
										fontFamily="Inter"
										fontWeight={500}
										fontSize="14px"
									>
										Combustível
									</FormLabel>
									<Input
										id="fuel"
										type="text"
										h={"48px"}
										//placeholder="Rua Janary Nunes"
										focusBorderColor="purple.500"
										//defaultValue={user.fuel}
										{...register("fuel")}
									/>
									<FormErrorMessage>
										{errors.fuel?.message}
									</FormErrorMessage>
								</FormControl>
							</HStack>

							<HStack
								display="flex"
								alignItems="flex-start"
								mt={4}
							>
								<FormControl isInvalid={Boolean(errors.milage)}>
									<FormLabel
										htmlFor="milage"
										fontFamily="Inter"
										fontWeight={500}
										fontSize="14px"
									>
										Quilometragem
									</FormLabel>
									<Input
										h={"48px"}
										id="milage"
										type="milage"
										//placeholder="308"
										focusBorderColor="purple.500"
										//defaultValue={user.milage}
										{...register("milage")}
									/>
									<FormErrorMessage>
										{errors.milage?.message}
									</FormErrorMessage>
								</FormControl>

								<FormControl isInvalid={Boolean(errors.color)}>
									<FormLabel
										htmlFor="color"
										fontFamily="Inter"
										fontWeight={500}
										fontSize="14px"
									>
										Cor
									</FormLabel>
									<Input
										id="color"
										h={"48px"}
										type="text"
										//placeholder="Apart 12"
										focusBorderColor="purple.500"
										//defaultValue={user.color}
										{...register("color")}
									/>
									<FormErrorMessage>
										{errors.color?.message}
									</FormErrorMessage>
								</FormControl>
							</HStack>

							<HStack
								display="flex"
								alignItems="flex-start"
								mt="2rem"
							>
								<FormControl isInvalid={Boolean(errors.fipe)}>
									<FormLabel className="label">
										Preço tabela FIPE
									</FormLabel>
									<InputGroup>
										<InputLeftAddon
											color="var(--random-13)"
											bg="var(--brand-4)"
											fontSize="1.2em"
											children="R$"
										/>
										<Input
											isDisabled
											isReadOnly
											focusBorderColor="purple.500"
											//value={Number(getFipe() || 0)}
											id="fipe"
											type="number"
											className="input"
											placeholder="48.000,00"
											{...register("fipe")}
										/>
									</InputGroup>
									{/* {!isError ? (
										<FormHelperText color="gray.500">
											*Campo preenchido de forma
											automática.
										</FormHelperText>
									) : (
										<FormErrorMessage>
											{errors.fipe?.message}
										</FormErrorMessage>
									)} */}
								</FormControl>

								<FormControl isInvalid={Boolean(errors.price)}>
									<FormLabel className="label">
										Preço
									</FormLabel>
									<InputGroup>
										<InputLeftAddon
											color="var(--random-13)"
											bg="var(--brand-4)"
											fontSize="1.2em"
											children="R$"
										/>
										<Input
											focusBorderColor="purple.500"
											id="price"
											type="number"
											className="input"
											placeholder="50.000,00"
											{...register("price")}
										/>
									</InputGroup>
									<FormErrorMessage>
										{errors.price?.message}
									</FormErrorMessage>
								</FormControl>
							</HStack>
						</Stack>

						<FormControl
							mt={4}
							isInvalid={Boolean(errors.description)}
						>
							<FormLabel className="label">Descrição</FormLabel>
							<Textarea
								focusBorderColor="purple.500"
								id="description"
								className="textArea"
								resize="none"
								placeholder="Descrição do anúncio"
								{...register("description")}
							/>
							<FormErrorMessage>
								{errors.description?.message}
							</FormErrorMessage>
						</FormControl>

						<FormControl mt={4}>
							<FormLabel className="label">Publicado</FormLabel>
							<Stack>
								<HStack>
									<Button
										colorScheme="white"
										color={"var(--gray-2)"}
										//bg={"var(--gray-6)"}
										border={"solid 1px"}
										h={"48px"}
										w={"50%"}
										pl={"28px"}
										pr={"28px"}
									>
										Sim
									</Button>
									<Button
										colorScheme="purple"
										color={"var(--white-fixed)"}
										bg={"var(--random-13)"}
										h={"48px"}
										w={"50%"}
										pl={"28px"}
										pr={"28px"}
									>
										Não
									</Button>
								</HStack>
							</Stack>
						</FormControl>

						<FormControl mt={4} isInvalid={Boolean(errors.avatar)}>
							<FormLabel className="label">
								Imagem da capa
							</FormLabel>
							<Input
								focusBorderColor="purple.500"
								id="avatar"
								type="text"
								className="input"
								placeholder="https://image.com"
								{...register("avatar")}
							/>
							<FormErrorMessage>
								{errors.avatar?.message}
							</FormErrorMessage>
						</FormControl>

						<FormControl mt={4} isInvalid={Boolean(errors.photos)}>
							<FormLabel className="label">
								1° Imagem da galeria
							</FormLabel>
							<Input
								focusBorderColor="purple.500"
								id="photos"
								type="text"
								className="input"
								placeholder="https://image.com"
								onChange={(e) => {
									setAddPhotos([
										...addPhotos,
										e.target.value,
									]);
									setValue("photos", [e.target.value]);
								}}
							/>
							<FormErrorMessage>
								{errors.photos?.message}
							</FormErrorMessage>
						</FormControl>

						<>
							{inputs.map((value: string, index: number) => (
								<FormControl
									mt={4}
									isInvalid={Boolean(errors.photos)}
								>
									<FormLabel className="label">
										{index + 2}° Imagem da galeria
									</FormLabel>
									<Input
										focusBorderColor="purple.500"
										id="photos"
										type="text"
										key={index}
										value={value}
										onChange={(event) => {
											handleInputChange(event, index);
											setAddPhotos([
												...addPhotos,
												event.target.value,
											]);
											setValue("photos", [
												...addPhotos,
												event.target.value,
											]);
										}}
										className="input"
										placeholder="https://image.com"
									/>
								</FormControl>
							))}
						</>

						<Button
							onClick={addInput}
							isDisabled={count >= 5}
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

					<ModalFooter gap={3}>
						<Button
							colorScheme="gray"
							color={"var(--gray-2)"}
							bg={"var(--gray-6)"}
							h={"48px"}
							w={"auto"}
							pl={"28px"}
							pr={"28px"}
							onClick={onClose}
						>
							Excluir anúncio
						</Button>
						<Button
							colorScheme="purple"
							color={"var(--white-fixed)"}
							bg={"var(--random-13)"}
							h={"48px"}
							w={"auto"}
							pl={"28px"}
							pr={"28px"}
							onClick={handleSubmit(submitEdit)}
						>
							Salvar Alterações
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>

			<ToastContainer
				position="top-right"
				autoClose={4000}
				limit={3}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</>
	);
};
