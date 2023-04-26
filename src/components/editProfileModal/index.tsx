import {
	Button,
	FormControl,
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
import { RegisterUserSchema } from "../../validateSchemas/validateUserSchema";
import { useForm } from "react-hook-form";
import { IUserInfoRequest } from "../../interfaces/user";
import { UserContext } from "../../context/UserContext";

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

export const EditProfileModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	const {
		isOpen: isOpenModalExclude,
		onOpen: onOpenModalExclude,
		onClose: onCloseModalExclude,
	} = useDisclosure();

	const notify = (message: string) =>
		toast.success(message, {
			position: "top-right",
			autoClose: 3500,
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
	} = useForm<IUserInfoRequest>({
		resolver: yupResolver(RegisterUserSchema),
	});
	const { editUser } = useContext(UserContext);

	const submitExclude = () => {
		onCloseModalExclude();
		notify("Perfil excluído!");
	};

	const submitEdit = () => {
		onClose();
		notify("Perfil atualizado!");
	};

	const initialRef = React.useRef(null);
	const finalRef = React.useRef(null);

	return (
		<>
			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}
				size={"xl"}
			>
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

						<FormControl mt={4}>
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
								ref={initialRef}
							/>
						</FormControl>

						<FormControl mt={4}>
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
							/>
						</FormControl>

						<FormControl mt={4}>
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
							/>
						</FormControl>

						<FormControl mt={4}>
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
							/>
						</FormControl>

						<FormControl mt={4}>
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
							/>
						</FormControl>

						<FormControl mt={4}>
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
							/>
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
								onOpenModalExclude();
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
							onClick={
								submitEdit
								//handleSubmit(submitEdit)
							}
						>
							Salvar Alterações
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>

			<Modal isOpen={isOpenModalExclude} onClose={onCloseModalExclude}>
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
							onClick={onClose}
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
							onClick={submitExclude}
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
