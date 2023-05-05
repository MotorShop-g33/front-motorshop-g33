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
  InputLeftAddon,
  InputRightAddon,
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
import { IAnnouncementsRequest } from "../../interfaces/announcements";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateAnnouncementSchema } from "../../validateSchemas/validateAnnouncementSchema";
import { UserContext } from "../../context/UserContext";
import { api } from "../../services";

interface Item {
  name: string;
  value: string;
}

export const CreateAnnouncementModal = () => {
  const {
    isOpen: isOpenModal1,
    onOpen: onOpenModal1,
    onClose: onCloseModal1,
  } = useDisclosure();
  const {
    isOpen: isOpenModal2,
    onOpen: onOpenModal2,
    onClose: onCloseModal2,
  } = useDisclosure();

  const [inputs, setInputs] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);
  const [annunc, setAnnunc] = useState<any>();
  const [name, setName] = useState<string>();
  const [brand, setBrand] = useState<string>();
  const [fuel, setFuel] = useState<string>();
  const [year, setYear] = useState<string>();
  const baseURL = "https://kenzie-kars.herokuapp.com/cars";

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

  const table = async (brand: string) => {
    try {
      const { data } = await api.get(`${baseURL}?brand=${brand}`);
      setAnnunc(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getFipe = () => {
    const obj = annunc?.find((item: Item) => item.name == name);
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
  }, [brand]);

  const addInput = () => {
    if (count < 4) {
      setInputs([...inputs, ""]);
      setCount(count + 1);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAnnouncementsRequest>({
    resolver: yupResolver(CreateAnnouncementSchema),
  });

  const { newAd } = useContext(UserContext);

  const submitAd = async (data: IAnnouncementsRequest) => {
    data.fipe = getFipe();
    newAd(data);
    console.log(data);
    onCloseModal1();
    onOpenModal2();
  };

  const isError = getFipe() === "";

  return (
    <>
      <Button
        className="buttonOpenModal"
        onClick={onOpenModal1}
        color="var(--random-13)"
        borderRadius={3}
        colorScheme="purple"
        variant="outline"
      >
        Criar anúncio
      </Button>

      <Modal isOpen={isOpenModal1} onClose={onCloseModal1} size="xl">
        <DivModal>
          <ModalOverlay />
          <ModalContent>
            <form
              onSubmit={handleSubmit(submitAd)}
              encType="multipart/form-data"
            >
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
                  <FormLabel className="label">Marca</FormLabel>
                  <Select
                    focusBorderColor="purple.500"
                    {...register("brand")}
                    onChange={(e) => {
                      setBrand(e.target.value);
                    }}
                  >
                    <option value="">Selecione a marca</option>
                    {objAnnunc.map((option: string, i: number) => (
                      <option key={i} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>{errors.brand?.message}</FormErrorMessage>
                </FormControl>

                <FormControl
                  isRequired
                  mt={4}
                  isInvalid={Boolean(errors.model)}
                >
                  <FormLabel className="label">Modelo</FormLabel>
                  <Select
                    focusBorderColor="purple.500"
                    {...register("model")}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  >
                    <option value="">Selecione o modelo</option>
                    {annunc?.map((option: any) => (
                      <option key={option.id} value={option.name}>
                        {option.name}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>{errors.model?.message}</FormErrorMessage>
                </FormControl>

                <Stack>
                  <HStack display="flex" alignItems="flex-start" mt={4}>
                    <FormControl isRequired isInvalid={Boolean(errors.year)}>
                      <FormLabel className="label">Ano</FormLabel>
                      <Select
                        focusBorderColor="purple.500"
                        {...register("year")}
                        onChange={(e) => setYear(e.target.value)}
                      >
                        <option value="">Selecione o ano</option>
                        {yearFipe?.map((option: any, i: number) => (
                          <option key={i} value={option}>
                            {option}
                          </option>
                        ))}
                      </Select>
                      <FormErrorMessage>
                        {errors.year?.message}
                      </FormErrorMessage>
                    </FormControl>

                    <FormControl isRequired isInvalid={Boolean(errors.fuel)}>
                      <FormLabel className="label">Combustível</FormLabel>
                      <Select
                        focusBorderColor="purple.500"
                        {...register("fuel")}
                        onChange={(e) => setFuel(e.target.value)}
                      >
                        <option value="">Selecione o combustível</option>
                        {getfuel()?.map((option: any, i: number) => (
                          <option key={i} value={option}>
                            {option === 1
                              ? "Flex"
                              : option === 2
                              ? "Híbrido"
                              : option === 3
                              ? "Elétrico"
                              : undefined}
                            {option.name}
                          </option>
                        ))}
                      </Select>
                      <FormErrorMessage>
                        {errors.fuel?.message}
                      </FormErrorMessage>
                    </FormControl>
                  </HStack>

                  <HStack display="flex" alignItems="flex-start" mt={4}>
                    <FormControl isInvalid={Boolean(errors.milage)}>
                      <FormLabel className="label">Quilometragem</FormLabel>
                      <InputGroup>
                        <Input
                          focusBorderColor="purple.500"
                          id="milage"
                          type="text"
                          className="input"
                          placeholder="30.000"
                          {...register("milage")}
                        />
                        <InputRightAddon
                          color="var(--random-13)"
                          bg="var(--brand-4)"
                          fontSize="1.2em"
                          children="km"
                        />
                      </InputGroup>
                      <FormErrorMessage>
                        {errors.milage?.message}
                      </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={Boolean(errors.color)}>
                      <FormLabel className="label">Cor</FormLabel>
                      <Input
                        focusBorderColor="purple.500"
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

                  <HStack display="flex" alignItems="flex-start" mt="2rem">
                    <FormControl isInvalid={Boolean(errors.fipe)}>
                      <FormLabel className="label">Preço tabela FIPE</FormLabel>
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
                          value={Number(getFipe() || 0)}
                          id="fipe"
                          type="number"
                          className="input"
                          placeholder="48.000,00"
                          {...register("fipe")}
                        />
                      </InputGroup>
                      {!isError ? (
                        <FormHelperText color="gray.500">
                          *Campo preenchido de forma automática.
                        </FormHelperText>
                      ) : (
                        <FormErrorMessage>
                          {errors.fipe?.message}
                        </FormErrorMessage>
                      )}
                    </FormControl>

                    <FormControl isInvalid={Boolean(errors.price)}>
                      <FormLabel className="label">Preço</FormLabel>
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

                <FormControl mt={4} isInvalid={Boolean(errors.description)}>
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

                <FormControl mt={4} isInvalid={Boolean(errors.avatar)}>
                  <FormLabel className="label">Imagem da capa</FormLabel>
                  <Input
                    focusBorderColor="purple.500"
                    id="avatar"
                    type="file"
                    className="input"
                    placeholder="https://image.com"
                    {...register("avatar")}
                  />
                  <FormErrorMessage>{errors.avatar?.message}</FormErrorMessage>
                </FormControl>

                <FormControl mt={4} isInvalid={Boolean(errors.photos)}>
                  <FormLabel className="label">1° Imagem da galeria</FormLabel>
                  <Input
                    focusBorderColor="purple.500"
                    id="photos"
                    type="file"
                    className="input"
                    placeholder="https://image.com"

                    {...register("photos")}
                    multiple
                  />
                  <FormErrorMessage>{errors.photos?.message}</FormErrorMessage>
                </FormControl>

                <>
                  {inputs.map((value: string, index: number) => (
                    <FormControl
                      mt={4}
                      isInvalid={Boolean(errors.photos)}
                      key={index}
                    >
                      <FormLabel className="label">
                        {index + 2}° Imagem da galeria
                      </FormLabel>
                      <Input
                        focusBorderColor="purple.500"
                        id={`photos${index + 2}`}
                        type="file"
                        className="input"
                        placeholder="https://image.com"
                        {...register(`photos${index + 2}`)}
                        multiple
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
                  onClick={onCloseModal1}
                  color="var(--gray-2)"
                  bg="var(--gray-6)"
                  colorScheme="gray"
                  mr={3}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
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
            </form>
          </ModalContent>
        </DivModal>
      </Modal>

      <Modal
        isOpen={isOpenModal2}
        onClose={() => {
          onCloseModal2(), location.reload();
        }}
      >
        <ModalOverlay />
        <ModalContent w={"95%"} maxW={"500px"}>
          <ModalHeader>Sucesso!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text as={"h3"} fontSize={"1em"} fontWeight={500}>
              Sua anúncio foi criado com sucesso!
            </Text>
            <Text m={"1.5rem 0"}>
              Agora você poderá ver seus negócios crescendo em grande escala
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
