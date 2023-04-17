import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Box,
  Button,
  FormErrorMessage,
  Text,
  Flex,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { RegisterUserSchema } from "../../validateSchemas/validateUserSchema";
import { IUserRequest } from "../../interfaces/user";
import { Heading_5_500 } from "../../styles/typography";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

export const RegisterPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<IUserRequest>({
    resolver: yupResolver(RegisterUserSchema),
  });
  const { navigate, registerUser } = useContext(UserContext);

  const [annunc, setAnnunc] = useState<boolean | undefined>(undefined);

  const onSubmit = async (data: IUserRequest) => {
    registerUser(data, onOpen);
  };

  return (
    <Box w={"100%"} bg={"var(--gray-8)"} p={"2rem "}>
      <Box
        borderRadius={"5px"}
        maxW="411px"
        p={"2rem"}
        mx={"auto"}
        bg={"var(--gray-10)"}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading_5_500>Cadastro</Heading_5_500>
          <VStack spacing="4">
            <Text className="titlesForms" mt={"1rem"}>
              Informações pessoas
            </Text>

            <FormControl isInvalid={Boolean(errors.name)}>
              <FormLabel htmlFor="name">Nome</FormLabel>
              <Input
                type="text"
                id="name"
                h={"48px"}
                placeholder="Ex: name "
                {...register("name")}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={Boolean(errors.email)}>
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <Input
                h={"48px"}
                placeholder="Ex: meuEmail@gmail.com"
                type="email"
                id="email"
                {...register("email")}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={Boolean(errors.cpf)}>
              <FormLabel htmlFor="cpf">CPF</FormLabel>
              <Input
                h={"48px"}
                placeholder="000.000.000-00"
                type="text"
                id="cpf"
                {...register("cpf")}
              />
              <FormErrorMessage>{errors.cpf?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={Boolean(errors.phone)}>
              <FormLabel htmlFor="phone">Telefone</FormLabel>
              <Input
                h={"48px"}
                placeholder="Ex: (DDD) 90000-0000"
                type="text"
                id="phone"
                {...register("phone")}
              />
              <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={Boolean(errors.birthday)}>
              <FormLabel htmlFor="birthday">Data de Nascimento</FormLabel>
              <Input
                h={"48px"}
                placeholder="Ex: 00/00/00 "
                type="text"
                id="birthday"
                {...register("birthday")}
              />
              <FormErrorMessage>{errors.birthday?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={Boolean(errors.description)}>
              <FormLabel htmlFor="description">Descrição</FormLabel>
              <Textarea
                id="description"
                placeholder="Digitar descrição"
                resize={"none"}
                {...register("description")}
              />
              <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
            </FormControl>
            <Text className="titlesForms">Informação de indereço</Text>

            <FormControl isInvalid={Boolean(errors.cep)}>
              <FormLabel htmlFor="cep">CEP</FormLabel>
              <Input
                type="text"
                id="cep"
                h={"48px"}
                placeholder="Ex: 00000.000"
                {...register("cep")}
              />
              <FormErrorMessage>{errors.cep?.message}</FormErrorMessage>
            </FormControl>

            <Flex gap={"1rem"}>
              <FormControl isInvalid={Boolean(errors.state)}>
                <FormLabel htmlFor="state">Estado</FormLabel>
                <Input
                  h={"48px"}
                  placeholder="Digite Estado"
                  type="text"
                  id="state"
                  {...register("state")}
                />
                <FormErrorMessage>{errors.state?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={Boolean(errors.city)}>
                <FormLabel htmlFor="city">Cidade</FormLabel>
                <Input
                  h={"48px"}
                  placeholder="Digite cidade"
                  type="text"
                  id="city"
                  {...register("city")}
                />
                <FormErrorMessage>{errors.city?.message}</FormErrorMessage>
              </FormControl>
            </Flex>

            <FormControl isInvalid={Boolean(errors.street)}>
              <FormLabel htmlFor="street">Rua</FormLabel>
              <Input
                h={"48px"}
                placeholder="Digite rua"
                type="text"
                id="street"
                {...register("street")}
              />
              <FormErrorMessage>{errors.street?.message}</FormErrorMessage>
            </FormControl>

            <Flex gap={"1rem"}>
              <FormControl isInvalid={Boolean(errors.number)}>
                <FormLabel htmlFor="number">Número</FormLabel>
                <Input
                  h={"48px"}
                  placeholder="Digite número"
                  type="text"
                  id="number"
                  {...register("number")}
                />
                <FormErrorMessage>{errors.number?.message}</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="complement">Complemento</FormLabel>
                <Input
                  h={"48px"}
                  placeholder="Ex: Apart 307"
                  type="text"
                  id="complement"
                  {...register("complement")}
                />
                <FormErrorMessage>
                  {errors.complement?.message}
                </FormErrorMessage>
              </FormControl>
            </Flex>

            <Text className="titlesForms">Escolha tipo de conta</Text>

            <Flex gap={".9rem"} justifyContent={"space-between"} width={"100%"}>
              <Button
                h={"48px"}
                bg={annunc == false ? "var(--random-13)" : "var(--gray-4)"}
                color={"var(--white-fixed)"}
                w={"152px"}
                onClick={() => {
                  setValue("isStaff", false);
                  setAnnunc(false);
                }}
                colorScheme="blue"
              >
                Comprador
              </Button>

              <Button
                h={"48px"}
                bg={annunc ? "var(--random-13)" : "var(--gray-4)"}
                color={"var(--white-fixed)"}
                w={"150px"}
                onClick={() => {
                  setValue("isStaff", true);
                  setAnnunc(true);
                }}
                colorScheme="blue"
              >
                Anunciante
              </Button>
            </Flex>
            <FormErrorMessage>{errors.isStaff?.message}</FormErrorMessage>

            <FormControl isInvalid={Boolean(errors.password)}>
              <FormLabel htmlFor="password">Senha</FormLabel>
              <Input
                h={"48px"}
                placeholder="Digite senha"
                type="password"
                id="password"
                {...register("password")}
              />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={Boolean(errors.confiPassword)}>
              <FormLabel htmlFor="confiPassword">Confirma senha</FormLabel>
              <Input
                h={"48px"}
                placeholder="Digite a senha"
                type="password"
                id="confiPassword"
                {...register("confiPassword")}
              />
              <FormErrorMessage>
                {errors.confiPassword?.message}
              </FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
              color={"var(--white-fixed)"}
              bg={"var(--random-13)"}
              h={"48px"}
              w={"100%"}
              colorScheme="blue"
            >
              Finalizar cadastro
            </Button>
          </VStack>
        </form>
      </Box>
      <>
        {/* trocar para o componente depois  */}
        <Box aria-label="Confirmação de registro"></Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sucesso!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text as={"h3"} fontSize={"1em"} fontWeight={500}>
                Sua conta foi criada com sucesso!
              </Text>
              <Text mt={"1rem"}>
                Agora você poderá ver seus negócios crescendo em grande escala
              </Text>
            </ModalBody>

            <ModalFooter justifyContent={"start"}>
              <Button
                colorScheme="blue"
                bg={"var(--random-13)"}
                onClick={() => {
                  onClose();
                  navigate("/login");
                }}
                width={"132px"}
              >
                Ir para o login
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      ;
    </Box>
  );
};
