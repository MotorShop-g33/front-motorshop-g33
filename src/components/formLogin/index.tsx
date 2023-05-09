import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Button_medium_text } from "../../styles/buttons";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "../../styles/formLogin";
import { Heading_5_600 } from "../../styles/typography";
import { UserContext } from "../../context/UserContext";

interface IuserLogin {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().required("Email obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

export const FormLogin = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const { loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IuserLogin>({ resolver: yupResolver(schema) });

  return (
    <>
      <LoginForm onSubmit={handleSubmit(loginUser)}>
        <FormControl display="flex" flexDirection="column">
          <Heading_5_600>Login</Heading_5_600>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Digitar email"
            id="email"
            {...register("email")}
            isInvalid={Boolean(errors.email)}
          />
          <p className="errorMessage">{errors.email?.message}</p>
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          <FormLabel>Senha</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              id="password"
              {...register("password")}
              isInvalid={Boolean(errors.password)}
            />
            <InputRightElement width="5.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick} bg="none">
                {show ? "Esconder" : "Exibir"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <p className="errorMessage">{errors.password?.message}</p>
          <Link className="forgotPassword" to={"/request-password-recovery"}>Esqueci minha senha</Link>
          <Button_medium_text
            type="submit"
            set_width="98%"
            set_background_color="random-13"
            set_text_color="white-fixed"
            set_hover_bg_color="random-10"
            set_hover_txt_color="white-fixed"
          >
            Entrar
          </Button_medium_text>
          <span className="noAcount">Ainda não possui conta ?</span>
          <Link to={"/register"} className="linkRegister">
            Cadastrar
          </Link>
        </FormControl>
      </LoginForm>
    </>
  );
};
