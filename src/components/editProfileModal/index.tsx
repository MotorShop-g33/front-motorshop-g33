import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
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
import { IUserInfoRequest } from "../../interfaces/user";
import { UserContext } from "../../context/UserContext";
import { EditInfoUserSchema } from "../../validateSchemas/validateUserSchema";

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

export const EditProfileModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	const {
		isOpen: isOpenModalDelete,
		onOpen: onOpenModalDelete,
		onClose: onCloseModalDelete,
	} = useDisclosure();
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
	} = useForm<IUserInfoRequest>({
		resolver: yupResolver(EditInfoUserSchema),
	});
	const { user, editUser, deleteUser } = useContext(UserContext);
	const submitDelete = () => {
		deleteUser();
		onCloseModalDelete();
		notify("Perfil excluído!");
	};
	const submitEdit = async (data: IUserInfoRequest) => {
		editUser(data);
		onClose();
		notify("Perfil atualizado!");
	};

	return (
		<>
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
						Editar Perfil
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
							Informações pessoais
						</Text>

						<FormControl isInvalid={Boolean(errors.name)} mt={4}>
							<FormLabel
								htmlFor="name"
								fontFamily="Inter"
								fontWeight={500}
								fontSize="14px"
							>
								Nome
							</FormLabel>
							<Input
								id="name"
								type="text"
								h={"48px"}
								placeholder="Maria Lima"
								focusBorderColor="purple.500"
								defaultValue={user.name}
								{...register("name")}
							/>
							<FormErrorMessage>
								{errors.name?.message}
							</FormErrorMessage>
						</FormControl>

						<FormControl isInvalid={Boolean(errors.email)} mt={4}>
							<FormLabel
								htmlFor="email"
								fontFamily="Inter"
								fontWeight={500}
								fontSize="14px"
							>
								E-mail
							</FormLabel>
							<Input
								id="email"
								type="email"
								h={"48px"}
								placeholder="email@gmail.com"
								focusBorderColor="purple.500"
								defaultValue={user.email}
								{...register("email")}
							/>
							<FormErrorMessage>
								{errors.email?.message}
							</FormErrorMessage>
						</FormControl>

						<FormControl isInvalid={Boolean(errors.cpf)} mt={4}>
							<FormLabel
								htmlFor="cpf"
								fontFamily="Inter"
								fontWeight={500}
								fontSize="14px"
							>
								CPF
							</FormLabel>
							<Input
								id="cpf"
								type="text"
								h={"48px"}
								placeholder="000.000.000-00"
								focusBorderColor="purple.500"
								defaultValue={user.cpf}
								{...register("cpf")}
							/>
							<FormErrorMessage>
								{errors.cpf?.message}
							</FormErrorMessage>
						</FormControl>

						<FormControl isInvalid={Boolean(errors.phone)} mt={4}>
							<FormLabel
								htmlFor="phone"
								fontFamily="Inter"
								fontWeight={500}
								fontSize="14px"
							>
								Celular
							</FormLabel>
							<Input
								id="phone"
								h={"48px"}
								type="text"
								placeholder="(DDD) 90000-0000"
								focusBorderColor="purple.500"
								defaultValue={user.phone}
								{...register("phone")}
							/>
							<FormErrorMessage>
								{errors.phone?.message}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={Boolean(errors.birthday)}
							mt={4}
						>
							<FormLabel
								htmlFor="birthday"
								fontFamily="Inter"
								fontWeight={500}
								fontSize="14px"
							>
								Data de Nascimento
							</FormLabel>
							<Input
								h={"48px"}
								type="text"
								id="birthday"
								placeholder="01/01/1990"
								focusBorderColor="purple.500"
								//defaultValue={user.birthday}
								{...register("birthday")}
							/>
							<FormErrorMessage>
								{errors.birthday?.message}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={Boolean(errors.description)}
							mt={4}
						>
							<FormLabel
								htmlFor="description"
								fontFamily="Inter"
								fontWeight={500}
								fontSize="14px"
							>
								Descrição
							</FormLabel>
							<Textarea
								id="description"
								resize={"none"}
								placeholder="Sua descrição aqui..."
								focusBorderColor="purple.500"
								defaultValue={user.description}
								{...register("description")}
							/>
							<FormErrorMessage>
								{errors.description?.message}
							</FormErrorMessage>
						</FormControl>
					</ModalBody>

					<ModalFooter gap={3}>
						<Button
							colorScheme="gray"
							color={"var(--gray-2)"}
							bg={"var(--gray-6)"}
							h={"48px"}
							w={"100%"}
							onClick={onClose}
						>
							Cancelar
						</Button>
						<Button
							colorScheme="red"
							color={"var(--alert-1)"}
							bg={"var(--alert-2)"}
							h={"48px"}
							w={"100%"}
							_hover={{ color: "var(--white-fixed)" }}
							onClick={() => {
								onClose();
								onOpenModalDelete();
							}}
						>
							Excluir Perfil
						</Button>
						<Button
							colorScheme="purple"
							color={"var(--white-fixed)"}
							bg={"var(--random-13)"}
							h={"48px"}
							w={"100%"}
							onClick={handleSubmit(submitEdit)}
						>
							Salvar Alterações
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>

			<Modal isOpen={isOpenModalDelete} onClose={onCloseModalDelete}>
				<ModalOverlay />
				<ModalContent w={"95%"} maxW={"500px"}>
					<ModalHeader>Excluir perfil</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text as={"h3"} fontSize={"1em"} fontWeight={500}>
							Tem certeza que deseja remover seu perfil?
						</Text>
						<Text m={"1.5rem 0"}>
							Essa ação não pode ser desfeita. Isso excluirá
							permanentemente sua conta e removerá seus dados de
							nossos servidores.
						</Text>
					</ModalBody>
					<ModalFooter gap={3}>
						<Button
							colorScheme="gray"
							color={"var(--gray-2)"}
							bg={"var(--gray-6)"}
							h={"48px"}
							w={"auto"}
							onClick={onCloseModalDelete}
						>
							Não, cancelar
						</Button>
						<Button
							colorScheme="red"
							color={"var(--alert-1)"}
							bg={"var(--alert-2)"}
							h={"48px"}
							w={"auto"}
							_hover={{ color: "var(--white-fixed)" }}
							onClick={submitDelete}
						>
							Sim, excluir meu perfil
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
