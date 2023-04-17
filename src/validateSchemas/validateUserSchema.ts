import * as yup from "yup";

export const RegisterUserSchema = yup.object().shape({
  name: yup.string().min(3).required("Nome, Obrigatório"),
  email: yup.string().email("E-mail invalido").required("E-mail Obrigatório"),
  password: yup
    .string()
    .min(6, "min de 6 Caracteres")
    .required("Password obrigatorio"),
  confiPassword: yup
    .string()
    .required("Password obrigatorio")
    .oneOf([yup.ref("password")], "password não confere"),
  cpf: yup
    .string()
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido")
    .required("CPF obrigatório"),
  phone: yup.string().min(10, "min 10 números").required("Número obrigatório"),
  birthday: yup.date().required("Aniversario"),
  description: yup.string().required("Descrição obrigatória"),
  cep: yup.string().required("Cep obrigatório"),
  state: yup.string().required("Estado obrigatório"),
  city: yup.string().required("Cidade obrigatório"),
  street: yup.string().required("Rua obrigatório"),
  number: yup.string().required("Número obrigatório"),
  complement: yup.string().notRequired(),
  isStaff: yup.boolean().required("Escolha o tipo de conta"),
});
