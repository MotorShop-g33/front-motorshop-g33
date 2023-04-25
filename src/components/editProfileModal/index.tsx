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
import React from "react";
import { ToastContainer, toast } from "react-toastify";

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

export const EditProfileModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	//const { isOpen, onOpen, onClose } = useDisclosure();
	const {
		isOpen: isOpenModal1,
		onOpen: onOpenModal1,
		onClose: onCloseModal1,
	} = useDisclosure();
	const {
		isOpen: isOpenModalExclude,
		onOpen: onOpenModalExclude,
		onClose: onCloseModalExclude,
	} = useDisclosure();

	const submitAd = () => {
		onClose();
		onOpenModalExclude();
	};

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

	const initialRef = React.useRef(null);
	const finalRef = React.useRef(null);

	return (
		<>
			{/* <Button onClick={onOpen} ref={finalRef}>
				Open Modal
			</Button> */}
			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}
				size={"xl"}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Editar Perfil</ModalHeader>
					<ModalCloseButton />

					<ModalBody pb={6}>
						<Text mb={6}>Informações pessoais</Text>

						<FormControl>
							<FormLabel htmlFor="name">Nome</FormLabel>
							<Input
								id="name"
								type="text"
								h={"48px"}
								placeholder="Maria Lima"
								ref={initialRef}
							/>
						</FormControl>

						<FormControl>
							<FormLabel htmlFor="email">E-mail</FormLabel>
							<Input
								id="email"
								type="email"
								h={"48px"}
								placeholder="email@gmail.com"
							/>
						</FormControl>

						<FormControl>
							<FormLabel htmlFor="cpf">CPF</FormLabel>
							<Input
								id="cpf"
								type="text"
								h={"48px"}
								placeholder="000.000.000-00"
							/>
						</FormControl>

						<FormControl>
							<FormLabel htmlFor="phone">Celular</FormLabel>
							<Input
								id="phone"
								h={"48px"}
								type="text"
								placeholder="(DDD) 90000-0000"
							/>
						</FormControl>

						<FormControl>
							<FormLabel htmlFor="birthday">
								Data de Nascimento
							</FormLabel>
							<Input
								h={"48px"}
								type="text"
								id="birthday"
								placeholder="01/01/90"
							/>
						</FormControl>

						<FormControl>
							<FormLabel htmlFor="description">
								Descrição
							</FormLabel>
							<Textarea
								id="description"
								resize={"none"}
								placeholder="Sua descrição aqui..."
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
							onClick={submitAd}
						>
							Excluir Perfil
						</Button>
						<Button
							colorScheme="purple"
							color={"var(--white-fixed)"}
							bg={"var(--random-13)"}
							h={"48px"}
							w={"100%"}
							onClick={() => {
								onClose(), notify("Perfil atualizado!");
							}}
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
							onClick={() => {
								onCloseModalExclude();
								notify("Perfil excluído!");
							}}
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
