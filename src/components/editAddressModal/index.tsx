import {
	Button,
	FormControl,
	FormErrorMessage,
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
	Text,
	Textarea,
	useDisclosure,
} from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import React, { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IUserAddressRequest } from "../../interfaces/user";
import { UserContext } from "../../context/UserContext";
import { EditAddressUserSchema } from "../../validateSchemas/validateUserSchema";

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

export const EditAddressModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
	} = useForm<IUserAddressRequest>({
		resolver: yupResolver(EditAddressUserSchema),
	});
	const { user, editUser } = useContext(UserContext);
	const submitEdit = async (data: IUserAddressRequest) => {
		editUser(data);
		onClose();
		notify("Endereço atualizado!");
	};

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader
						fontFamily="Lexend"
						fontWeight={500}
						fontSize="16px"
						paddingY={4}
						color="var(--gray-1)"
						lineHeight="20px"
					>
						Editar Endereço
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
							Informações do endereço
						</Text>

						<FormControl isInvalid={Boolean(errors.cep)} mt={4}>
							<FormLabel
								htmlFor="cep"
								fontFamily="Inter"
								fontWeight={500}
								fontSize="14px"
							>
								CEP
							</FormLabel>
							<Input
								id="cep"
								type="text"
								h={"48px"}
								placeholder="68900000"
								focusBorderColor="purple.500"
								defaultValue={user.cep}
								{...register("cep")}
							/>
							<FormErrorMessage>
								{errors.cep?.message}
							</FormErrorMessage>
						</FormControl>

						<HStack display="flex" alignItems="flex-start" mt={4}>
							<FormControl isInvalid={Boolean(errors.state)}>
								<FormLabel
									htmlFor="state"
									fontFamily="Inter"
									fontWeight={500}
									fontSize="14px"
								>
									Estado
								</FormLabel>
								<Input
									id="state"
									type="state"
									h={"48px"}
									placeholder="Amapá"
									focusBorderColor="purple.500"
									defaultValue={user.state}
									{...register("state")}
								/>
								<FormErrorMessage>
									{errors.state?.message}
								</FormErrorMessage>
							</FormControl>

							<FormControl isInvalid={Boolean(errors.city)}>
								<FormLabel
									htmlFor="city"
									fontFamily="Inter"
									fontWeight={500}
									fontSize="14px"
								>
									Cidade
								</FormLabel>
								<Input
									id="city"
									type="text"
									h={"48px"}
									placeholder="Macapá"
									focusBorderColor="purple.500"
									defaultValue={user.city}
									{...register("city")}
								/>
								<FormErrorMessage>
									{errors.city?.message}
								</FormErrorMessage>
							</FormControl>
						</HStack>

						<FormControl isInvalid={Boolean(errors.street)} mt={4}>
							<FormLabel
								htmlFor="street"
								fontFamily="Inter"
								fontWeight={500}
								fontSize="14px"
							>
								Rua
							</FormLabel>
							<Input
								id="street"
								type="text"
								h={"48px"}
								placeholder="Rua Janary Nunes"
								focusBorderColor="purple.500"
								defaultValue={user.street}
								{...register("street")}
							/>
							<FormErrorMessage>
								{errors.street?.message}
							</FormErrorMessage>
						</FormControl>

						<HStack display="flex" alignItems="flex-start" mt={4}>
							<FormControl isInvalid={Boolean(errors.number)}>
								<FormLabel
									htmlFor="number"
									fontFamily="Inter"
									fontWeight={500}
									fontSize="14px"
								>
									Número
								</FormLabel>
								<Input
									h={"48px"}
									id="number"
									type="number"
									placeholder="308"
									focusBorderColor="purple.500"
									defaultValue={user.number}
									{...register("number")}
								/>
								<FormErrorMessage>
									{errors.number?.message}
								</FormErrorMessage>
							</FormControl>

							<FormControl isInvalid={Boolean(errors.complement)}>
								<FormLabel
									htmlFor="complement"
									fontFamily="Inter"
									fontWeight={500}
									fontSize="14px"
								>
									Complemento
								</FormLabel>
								<Input
									id="complement"
									h={"48px"}
									type="text"
									placeholder="Apart 12"
									focusBorderColor="purple.500"
									defaultValue={user.complement}
									{...register("complement")}
								/>
								<FormErrorMessage>
									{errors.complement?.message}
								</FormErrorMessage>
							</FormControl>
						</HStack>
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
							Cancelar
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
