import * as yup from "yup";

export const createCommentSchema = yup.object().shape({
  comment: yup
    .string()
    .max(500, "maximo de 500 caracteres")
    .required("comentario é obrigatório"),
});
