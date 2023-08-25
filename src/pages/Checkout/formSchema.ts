// INITIAL SETTING FOR VALIDATION THAT WILL BW USED IN THE FUTURE TO IMPROVE THE PROJECT
import * as yup from "yup";

export const checkoutSchema = yup.object({
  cpf: yup.number().required().min(11).max(11),
  street: yup.string().required("Por favor, forneça informação sobre a rua"),
  number: yup
    .number()
    .required("Por favor, forneça informação sobre o número da casa"),
  complement: yup.string().max(80),
  neighborhood: yup
    .string()
    .required("Por favor, forneça informação sobre o bairro"),
  city: yup.string().required("Por favor, forneça o nome da sua cidade"),
  uf: yup.string().min(2).required("Por favor, forneça a sigla do estado"),
});
