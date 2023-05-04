import * as yup from "yup";

export const CreateAnnouncementSchema = yup.object().shape({
  brand: yup.string().required("Marca obrigatória"),
  model: yup.string().required("Modelo obrigatório"),
  year: yup.number().required("Ano obrigatório"),
  fuel: yup.string().required("Combustível obrigatório"),
  milage: yup.string().required("Quilometragem obrigatória"),
  color: yup.string().required("Cor obrigatória"),
  fipe: yup.number().notRequired(),
  price: yup.number().required("Preço obrigatório"),
  description: yup.string().required("Descrição obrigatória"),
  // avatar: yup.string().required("Imagem da capa obrigatória"),
  // photos: yup
  // 	.array()
  // 	.of(yup.string().url().notRequired())
  // 	.min(1, "add pelo")
  // 	.required(),
});
