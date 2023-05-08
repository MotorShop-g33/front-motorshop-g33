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
import { IAnnouncementsEdit } from "../../interfaces/announcements";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateAnnouncementSchema } from "../../validateSchemas/validateAnnouncementSchema";
import { UserContext } from "../../context/UserContext";
import { api } from "../../services";
import { toast } from "react-toastify";

interface Item {
  id: string;
  brand: string;
  name: string;
  value: string;
}

export const EditAnnouncModal = ({ announcId }: any) => {
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
  const [ad, setAd] = useState<any>([]);
  const [id, setId] = useState<string>(ad.id);
  const [brand, setBrand] = useState<string>(ad.brand);
  const [model, setModel] = useState<string>(ad.model);
  const [year, setYear] = useState<number>(ad.year);
  const [fuel, setFuel] = useState<string>(ad.fuel);
  const [milage, setMilage] = useState<number>(ad.milage);
  const [color, setColor] = useState<string>(ad.color);
  const [fipe, setFipe] = useState<number>(ad.fipe);
  const [price, setPrice] = useState<number>(ad.price);
  const [description, setDescription] = useState<string>(ad.description);
  const [avatar, setAvatar] = useState<string>(ad["avatar"]);
  const [isActive, setIsActive] = useState<boolean>(ad["isActive"]);
  const [addPhotos, setAddPhotos] = useState<string[]>(ad["addPhotos"]);
  const [otherBrand, setOtherBrand] = useState<Boolean>(false);
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

  const getModel = () => {
    const obj = annunc?.find((item: Item) => item.brand == brand);
    return obj?.name;
  };

  const getFipe = () => {
    const obj = annunc?.find((item: Item) => item.name == model);
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

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newInputs: string[] = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IAnnouncementsEdit>({
    resolver: yupResolver(CreateAnnouncementSchema),
  });

  const { user, navigate, editAd, deleteAnnounc } = useContext(UserContext);
  const isError = getFipe() === "";

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

  useEffect(() => {
    const fetchAnnounc = async () => {
      try {
        const response = await api.get(`announcement/${announcId}`);
        setAd(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (announcId) {
      fetchAnnounc();
    }
  }, [announcId]);

  const editAnnounc = async (data: any) => {
    const updatedAnnounc = {
      ...ad,
      brand: brand,
      model: model,
      year: year,
      fuel: fuel,
      milage: milage,
      color: color,
      fipe: fipe,
      price: price,
      description: description,
      isActive: isActive,
      avatar: avatar,
      addPhotos: addPhotos,
    };
    data.fipe = getFipe();
    editAd(updatedAnnounc);
    onCloseModal1();
    //notify("Anúncio atualizado!");
  };

  const submitDelete = (id: string) => {
    console.log(id);
    deleteAnnounc(id);
    onCloseModal2();
    // navigate(`/profile?id=${user.id}`)
    // notify("Anúncio excluído!");
  };

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
        Editar anúncio
      </Button>

      <Modal isOpen={isOpenModal1} onClose={onCloseModal1} size="xl">
        <DivModal>
          <ModalOverlay />
          <ModalContent>
            <form>
              <ModalHeader
                fontFamily="Lexend"
                fontWeight={500}
                fontSize="16px"
                lineHeight="20px"
                paddingY={4}
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
                pt={0}
                pb={6}
                fontFamily="Inter"
                fontWeight={500}
                fontSize="14px"
              >
                <Text lineHeight="24px" color="var(--gray-0)">
                  Infomações do veículo
                </Text>
                {/* <FormControl>
									<Input
										isReadOnly
										focusBorderColor="purple.500"
										id="id"
										type="text"
										className="input"
										placeholder={"id: " + ad["id"]}
										value={id}
										{...register("id")}
									/>
								</FormControl> */}
                <FormControl mt={4}>
                  <FormLabel className="label">Marca</FormLabel>
                  <Select
                    focusBorderColor="purple.500"
                    {...register("brand")}
                    onChange={(e) => {
                      setBrand(e.target.value);
                      setOtherBrand(true);
                    }}
                  >
                    <option value="" hidden>
                      {ad["brand"]}
                    </option>
                    {objAnnunc.map((option: string, i: number) => (
                      <option key={i} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>{errors.brand?.message}</FormErrorMessage>
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel className="label">Modelo</FormLabel>
                  <Select
                    focusBorderColor="purple.500"
                    {...register("model")}
                    onChange={(e) => {
                      setModel(e.target.value);
                    }}
                  >
                    {otherBrand ? (
                      <option value="" hidden>
                        Selecione o modelo
                      </option>
                    ) : (
                      <option value="" hidden>
                        {ad["model"]}
                      </option>
                    )}
                    {/* {annunc?.map((option: any) => (
											<option
												key={option.id}
												value={option.model}
											>
												{option.model}
											</option>
										))} */}
                    {annunc?.map((option: Item) => (
                      <option key={option.id} value={option.name}>
                        {option.name}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>{errors.model?.message}</FormErrorMessage>
                </FormControl>
                <HStack display="flex" alignItems="flex-start" mt={4}>
                  <FormControl>
                    <FormLabel className="label">Ano</FormLabel>
                    <Select
                      focusBorderColor="purple.500"
                      {...register("year")}
                      onChange={(e) => setYear(parseInt(e.target.value))}
                    >
                      <option value="" hidden>
                        {ad["year"]}
                      </option>
                      {yearFipe?.map((option: any, i: number) => (
                        <option key={i} value={option}>
                          {option}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>{errors.year?.message}</FormErrorMessage>
                  </FormControl>

                  <FormControl>
                    <FormLabel className="label">Combustível</FormLabel>
                    <Select
                      focusBorderColor="purple.500"
                      {...register("fuel")}
                      onChange={(e) => setFuel(e.target.value)}
                    >
                      {otherBrand ? (
                        " "
                      ) : (
                        <option value="" hidden>
                          {ad["fuel"]}
                        </option>
                      )}
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
                    <FormErrorMessage>{errors.fuel?.message}</FormErrorMessage>
                  </FormControl>
                </HStack>

                <Stack>
                  <HStack display="flex" alignItems="flex-start" mt={4}>
                    <FormControl isInvalid={Boolean(errors.milage)}>
                      <FormLabel className="label">Quilometragem</FormLabel>
                      <InputGroup>
                        <Input
                          focusBorderColor="purple.500"
                          id="milage"
                          type="number"
                          className="input"
                          placeholder={"30000"}
                          defaultValue={ad.milage}
                          {...register("milage")}
                          onChange={(e) => {
                            setMilage(parseInt(e.target.value));
                          }}
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
                        placeholder={"Branco"}
                        defaultValue={ad.color}
                        {...register("color")}
                        onChange={(e) => {
                          setColor(e.target.value);
                        }}
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
                          //isDisabled
                          isReadOnly
                          focusBorderColor="purple.500"
                          id="fipe"
                          type="number"
                          placeholder={ad["fipe"]}
                          //value={Number(getFipe())}
                          //{...register("fipe")}
                          onChange={(e) => {
                            setFipe(getFipe());
                          }}
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
                          placeholder={"150000"}
                          defaultValue={ad.price}
                          {...register("price")}
                          onChange={(e) => {
                            setPrice(parseFloat(e.target.value));
                          }}
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
                    placeholder={"Descreva sobre o anúncio aqui..."}
                    defaultValue={ad.description}
                    {...register("description")}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
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
                        colorScheme="gray"
                        color={"var(--gray-2)"}
                        border={"solid 1px"}
                        bg={"var(--white-fixed)"}
                        h={"48px"}
                        w={"50%"}
                        pl={"28px"}
                        pr={"28px"}
                        onClick={() => setIsActive(true)}
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
                        onClick={() => setIsActive(false)}
                      >
                        Não
                      </Button>
                    </HStack>
                  </Stack>
                </FormControl>
                <FormControl isDisabled mt={4}>
                  <FormLabel className="label">Imagem da capa</FormLabel>
                  <Input
                    focusBorderColor="purple.500"
                    id="avatar"
                    type="text"
                    className="input"
                    placeholder={ad["avatar"]}
                    onChange={(e) => {
                      setAvatar(e.target.value);
                    }}
                  />
                </FormControl>
                <FormControl isDisabled mt={4}>
                  <FormLabel className="label">1° Imagem da galeria</FormLabel>
                  <Input
                    focusBorderColor="purple.500"
                    id="photos"
                    type="text"
                    className="input"
                    placeholder={"https://image.com"}
                    // defaultValue={announc[0].photos}
                    onChange={(e) => {
                      setAddPhotos([...addPhotos, e.target.value]);
                      setValue("photos", [e.target.value]);
                    }}
                  />
                  <FormErrorMessage>{errors.photos?.message}</FormErrorMessage>
                </FormControl>
                <>
                  {inputs.map((value: string, index: number) => (
                    <FormControl
                      isDisabled
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
                          setAddPhotos([...addPhotos, event.target.value]);
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
                  isDisabled
                  //isDisabled={count >= 5}
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
                  onClick={() => {
                    onCloseModal1();
                    onOpenModal2();
                  }}
                  color="var(--gray-2)"
                  bg="var(--gray-6)"
                  colorScheme="gray"
                  mr={3}
                >
                  Excluir anúncio
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
                  onClick={editAnnounc}
                >
                  Salvar alterações
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
          <ModalHeader>Excluir anúncio</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text as={"h3"} fontSize={"1em"} fontWeight={500}>
              Tem certeza que deseja remover este anúncio?
            </Text>
            <Text m={"1.5rem 0"}>
              Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
              conta e removerá seus dados de nossos servidores.
            </Text>
          </ModalBody>
          <ModalFooter gap={3}>
            <Button
              colorScheme="gray"
              color={"var(--gray-2)"}
              bg={"var(--gray-6)"}
              h={"48px"}
              w={"auto"}
              onClick={onCloseModal2}
            >
              Cancelar
            </Button>
            <Button
              colorScheme="red"
              color={"var(--alert-1)"}
              bg={"var(--alert-2)"}
              h={"48px"}
              w={"auto"}
              _hover={{ color: "var(--white-fixed)" }}
              onClick={() => submitDelete(ad["id"])}
            >
              Sim, excluir anúncio
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
