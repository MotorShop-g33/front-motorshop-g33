import React, { useContext, useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

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
  const [count, setCount] = useState(0);

  const [filterAnnunc, setFlterAnnunc] = useState<any | []>([]);
  const [annunc, setAnnunc] = useState<any>();
  const [name, setName] = useState<any>();
  const [fuel, setFuel] = useState<any>();
  const [year, setYear] = useState<any>();
  const [fipe, setfipe] = useState<any>();
  const baseURL = "https://kenzie-kars.herokuapp.com/cars";
  const tableFipe = async () => {
    try {
      const { data } = await api.get(`${baseURL}`);
      const obj = Object.keys(data);
      setFlterAnnunc(obj);
    } catch (error) {
      console.log(error);
    }
  };
  const yearFipe = [2019, 2020, 2021, 2022];

  const table = async (brand: any) => {
    try {
      const { data } = await api.get(`${baseURL}?brand=${brand}`);
      setAnnunc(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getyear = () => {
    const obj = annunc?.find((item: any) => item.name == name);
    return obj?.year;
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
    tableFipe();
    getyear();
  }, []);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

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

  const [teste, setTest] = useState<[] | any>([]);
  const handleTeste = (data: any) => {
    newAd(data);
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
            <form onSubmit={handleSubmit(handleTeste)}>
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
                <FormControl isRequired mt={4}>
                  <FormLabel className="label">Marca</FormLabel>
                  <Select
                    {...register("brand")}
                    onChange={(e) => {
                      table(e.target.value);
                    }}
                  >
                    <option value={undefined}>Selecione</option>
                    {filterAnnunc.map((option: string, i: number) => (
                      <option key={i} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                </FormControl>

                <FormControl isRequired mt={4}>
                  <FormLabel className="label">Modelo</FormLabel>
                  <Select
                    {...register("model")}
                    onChange={(e) => setName(e.target.value)}
                  >
                    <option value={undefined}>Selecione</option>
                    {annunc?.map((option: any, i: number) => (
                      <option key={option.id} value={option.name}>
                        {option.name}
                      </option>
                    ))}
                  </Select>
                </FormControl>

                <Stack>
                  <HStack mt={4}>
                    <FormControl isRequired>
                      <FormLabel className="label">Ano</FormLabel>
                      <Select
                        {...register("model")}
                        onChange={(e) => setYear(e.target.value)}
                      >
                        <option value={undefined}>Selecione</option>
                        {yearFipe?.map((option: any, i: number) => (
                          <option key={option.i} value={option}>
                            {option}
                          </option>
                        ))}
                      </Select>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel className="label">Combustível</FormLabel>
                      <Select
                        {...register("fuel")}
                        onChange={(e) => setFuel(e.target.value)}
                      >
                        <option value={undefined}>Selecione</option>
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
                    </FormControl>
                  </HStack>

                  <HStack mt={4}>
                    <FormControl>
                      <FormLabel className="label">Quilometragem</FormLabel>
                      <Input
                        id="milage"
                        type="text"
                        className="input"
                        placeholder="30.000"
                        {...register("milage")}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel className="label">Cor</FormLabel>
                      <Input
                        id="color"
                        type="text"
                        className="input"
                        placeholder="Branco"
                        {...register("color")}
                      />
                    </FormControl>
                  </HStack>

                  <HStack mt={4}>
                    <FormControl>
                      <FormLabel className="label">Preço tabela FIPE</FormLabel>
                      <Input
                        defaultValue={getFipe()}
                        id="fipe"
                        type="number"
                        className="input"
                        placeholder="R$ 48.000,00"
                        {...register("fipe")}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel className="label">Preço</FormLabel>
                      <Input
                        id="price"
                        type="number"
                        className="input"
                        placeholder="R$ 50.000,00"
                        {...register("price")}
                      />
                    </FormControl>
                  </HStack>
                </Stack>

                <FormControl mt={4}>
                  <FormLabel className="label">Descrição</FormLabel>
                  <Textarea
                    id="description"
                    className="textArea"
                    resize="none"
                    placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    {...register("description")}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel className="label">Imagem da capa</FormLabel>
                  <Input
                    id="avatar"
                    type="text"
                    className="input"
                    placeholder="https://image.com"
                    {...register("avatar")}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel className="label">1° Imagem da galeria</FormLabel>
                  <Input
                    id="photos"
                    type="text"
                    className="input"
                    placeholder="https://image.com"
                    onChange={(e) => {
                      setTest([...teste, e.target.value]);
                      setValue("photos", [e.target.value]);
                    }}
                  />
                </FormControl>

                <>
                  {inputs.map((value, index) => (
                    <FormControl mt={4}>
                      <FormLabel className="label">
                        {index + 2}° Imagem da galeria
                      </FormLabel>
                      <Input
                        id="photos"
                        type="text"
                        key={index}
                        value={value}
                        onChange={(event) => {
                          handleInputChange(event, index);
                          setTest([...teste, event.target.value]);
                          setValue("photos", [...teste, event.target.value]);
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
              </ModalFooter>{" "}
            </form>
          </ModalContent>
        </DivModal>
      </Modal>
    </>
  );
};
