import * as yup from "yup";

export const CreateAnnouncementSchema = yup.object().shape({
  brand: yup.string().required("Marca obrigatório"),
  model: yup.string().required("Modelo obrigatório"),
  year: yup.number().required("Ano obrigatório"),
  fuel: yup.string().required("Combustível obrigatorio"),
  milage: yup.string().required("Quilometragem obrigatorio"),
  color: yup.string().required("Cor obrigatoria"),
  fipe: yup.number().notRequired(),
  price: yup.number().required("Preço obrigatorio"),
  description: yup.string().required("Descrição obrigatoria"),
  avatar: yup.string().required("Imagem da capa obrigatorio"),
  photos: yup.array().of(yup.string().url().notRequired()),
});
