import * as yup from "yup";
import { parse } from "date-fns";

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
	phone: yup
		.string()
		.min(10, "min 10 números")
		.required("Número obrigatório"),
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

export const EditInfoUserSchema = yup.object().shape({
	name: yup.string().min(3, "Mínimo de 3 caracteres").notRequired(),
	email: yup.string().min(9, "Mínimo de 9 caracteres").email("Email inválido").notRequired(),
	cpf: yup
		.string()
		.matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido")
		.notRequired(),
	phone: yup.string().min(10, "Mínimo de 10 números").notRequired(),
	birthday: yup
		.date()
		.transform(function (value, originalValue) {
			const parsedDate = parse(originalValue, "dd/MM/yyyy", new Date());
			return parsedDate;
		})
		.typeError("Insira uma data válida no formato MM/DD/AAAA"),
	description: yup.string().notRequired(),
});

export const EditAddressUserSchema = yup.object().shape({
	cep: yup.string().notRequired(),
	state: yup.string().notRequired(),
	city: yup.string().notRequired(),
	street: yup.string().notRequired(),
	number: yup.string().notRequired(),
	complement: yup.string().notRequired(),
});