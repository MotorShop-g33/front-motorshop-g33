import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
	Button,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Select,
	Stack,
	Text,
	Textarea,
	useDisclosure,
} from "@chakra-ui/react";

import { DivModal } from "../../styles/createAnnouncementModal";
import {
	IAnnouncementsRequest,
	ITableFipe,
} from "../../interfaces/announcements";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateAnnouncementSchema } from "../../validateSchemas/validateAnnouncementSchema";
import { UserContext } from "../../context/UserContext";
import { api } from "../../services";

export const CreateAnnouncementModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [inputs, setInputs] = useState<any[]>([]);
	const [count, setCount] = useState<number>(0);

	const [filterAnnunc, setFlterAnnunc] = useState<any | []>([]);
	const [annunc, setAnnunc] = useState<any>();
	const [name, setName] = useState<any>();
	const [brand, setbrand] = useState<any>();
	const [fuel, setFuel] = useState<any>();
	const [year, setYear] = useState<any>();
	const [fipe, setfipe] = useState<any>();
	const baseURL = "https://kenzie-kars.herokuapp.com/cars";

	// const tableFipe = async () => {
	//   try {
	//     const { data } = await api.get(`${baseURL}`);
	//     const obj = Object.keys(data);
	//     setFlterAnnunc(obj);
	//   } catch (error) {
	//     console.log(error);
	//   }
	// };
	const yearFipe = [2019, 2020, 2021, 2022];
	const objAnnunc = [
		"citroën",
		"fiat",
		"ford",
		"chevrolet",
		"honda",
		"hyundai",
		"nissan",
		"peugeot",
		"renault",
		"toyota",
		"volkswagen",
	];

	const table = async (brand: any) => {
		try {
			const { data } = await api.get(`${baseURL}?brand=${brand}`);
			setAnnunc(data);
		} catch (error) {
			console.log(error);
		}
	};

	const getFipe = () => {
		const obj = annunc?.find((item: any) => item.name == name);
		return obj?.value;
	};

	const getfuel = () => {
		const fuel = annunc?.map((item: any) => {
			return item.fuel;
		});
		return [...new Set(fuel)];
	};

	useEffect(() => {
		if (brand) {
			table(brand);
		}
		// tableFipe();
	}, [brand]);

	const addInput = () => {
		if (count < 5) {
			setInputs([...inputs, ""]);
			setCount(count + 1);
		}
	};

	const handleInputChange = (event: any, index: any) => {
		const newInputs: any = [...inputs];
		newInputs[index] = event.target.value;
		setInputs(newInputs);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<IAnnouncementsRequest>({
		resolver: yupResolver(CreateAnnouncementSchema),
	});

	const { newAd } = useContext(UserContext);

	const [addPhotos, setAddPhotos] = useState<[] | any>([]);
	const submitAd = (data: any) => {
		data.fipe = getFipe();
		newAd(data);
		onClose();		
		location.reload();
	};
	
	const isError = getFipe() === "";

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

			<Modal isOpen={isOpen} onClose={onClose} size="xl">
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
								<FormControl
									isRequired
									mt={4}
									isInvalid={Boolean(errors.brand)}
								>
									<FormLabel className="label">
										Marca
									</FormLabel>
									<Select
										{...register("brand")}
										onChange={(e) => {
											setbrand(e.target.value);
										}}
									>
										<option value="" disabled selected>
											Selecione a marca
										</option>
										{objAnnunc.map(
											(option: string, i: number) => (
												<option key={i} value={option}>
													{option}
												</option>
											)
										)}
									</Select>
									<FormErrorMessage>
										{errors.brand?.message}
									</FormErrorMessage>
								</FormControl>

								<FormControl
									isRequired
									mt={4}
									isInvalid={Boolean(errors.model)}
								>
									<FormLabel className="label">
										Modelo
									</FormLabel>
									<Select
										{...register("model")}
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
									>
										<option value="" disabled selected>
											Selecione o modelo
										</option>
										{annunc?.map((option: any) => (
											<option
												key={option.id}
												value={option.name}
											>
												{option.name}
											</option>
										))}
									</Select>
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
										<FormControl
											isRequired
											isInvalid={Boolean(errors.year)}
										>
											<FormLabel className="label">
												Ano
											</FormLabel>
											<Select
												{...register("year")}
												onChange={(e) =>
													setYear(e.target.value)
												}
											>
												<option
													value=""
													disabled
													selected
												>
													Selecione o ano
												</option>
												{yearFipe?.map(
													(
														option: any,
														i: number
													) => (
														<option
															key={i}
															value={option}
														>
															{option}
														</option>
													)
												)}
											</Select>
											<FormErrorMessage>
												{errors.year?.message}
											</FormErrorMessage>
										</FormControl>

										<FormControl
											isRequired
											isInvalid={Boolean(errors.fuel)}
										>
											<FormLabel className="label">
												Combustível
											</FormLabel>
											<Select
												{...register("fuel")}
												onChange={(e) =>
													setFuel(e.target.value)
												}
											>
												<option
													value=""
													disabled
													selected
												>
													Selecione o combustível
												</option>
												{getfuel()?.map(
													(
														option: any,
														i: number
													) => (
														<option
															key={i}
															value={option}
														>
															{option === 1
																? "Flex"
																: option === 2
																? "Híbrido"
																: option === 3
																? "Elétrico"
																: undefined}
															{option.name}
														</option>
													)
												)}
											</Select>
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
										<FormControl
											isInvalid={Boolean(errors.milage)}
										>
											<FormLabel className="label">
												Quilometragem
											</FormLabel>
											<Input
												id="milage"
												type="text"
												className="input"
												placeholder="30.000"
												{...register("milage")}
											/>
											<FormErrorMessage>
												{errors.milage?.message}
											</FormErrorMessage>
										</FormControl>

										<FormControl
											isInvalid={Boolean(errors.color)}
										>
											<FormLabel className="label">
												Cor
											</FormLabel>
											<Input
												id="color"
												type="text"
												className="input"
												placeholder="Branco"
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
										<FormControl
											isInvalid={Boolean(errors.fipe)}
										>
											<FormLabel className="label">
												Preço tabela FIPE
											</FormLabel>
											<InputGroup>
												<InputLeftElement
													color="gray.300"
													fontSize="1.2em"
													children="R$"
												/>
												<Input
													isDisabled
													value={Number(getFipe())}
													id="fipe"
													type="number"
													className="input"
													placeholder="48.000,00"
													{...register("fipe")}
												/>
											</InputGroup>
											{!isError ? (
												<FormHelperText color="gray.500">
													*Campo preenchido de forma
													automática.
												</FormHelperText>
											) : (
												<FormErrorMessage>
													{errors.fipe?.message}
												</FormErrorMessage>
											)}
										</FormControl>

										<FormControl
											isInvalid={Boolean(errors.price)}
										>
											<FormLabel className="label">
												Preço
											</FormLabel>
											<InputGroup>
												<InputLeftElement
													pointerEvents="none"
													color="gray.700"
													fontSize="1.2em"
													children="R$"
												/>
												<Input
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
									<FormLabel className="label">
										Descrição
									</FormLabel>
									<Textarea
										id="description"
										className="textArea"
										resize="none"
										placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
										{...register("description")}
									/>
									<FormErrorMessage>
										{errors.description?.message}
									</FormErrorMessage>
								</FormControl>

								<FormControl
									mt={4}
									isInvalid={Boolean(errors.avatar)}
								>
									<FormLabel className="label">
										Imagem da capa
									</FormLabel>
									<Input
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

								<FormControl
									mt={4}
									isInvalid={Boolean(errors.photos)}
								>
									<FormLabel className="label">
										1° Imagem da galeria
									</FormLabel>
									<Input
										id="photos"
										type="text"
										className="input"
										placeholder="https://image.com"
										onChange={(e) => {
											setAddPhotos([
												...addPhotos,
												e.target.value,
											]);
											setValue("photos", [
												e.target.value,
											]);
										}}
									/>
								</FormControl>

								<>
									{inputs.map((value, index) => (
										<FormControl
											mt={4}
											isInvalid={Boolean(errors.photos)}
										>
											<FormLabel className="label">
												{index + 2}° Imagem da galeria
											</FormLabel>
											<Input
												id="photos"
												type="text"
												key={index}
												value={value}
												onChange={(event) => {
													handleInputChange(
														event,
														index
													);
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
									onClick={handleSubmit(submitAd)}
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
							</ModalFooter>{" "}
					</ModalContent>
				</DivModal>
			</Modal>
		</>
	);
};
