import { Box, Input, FormLabel, FormControl, FormHelperText } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button_medium_text } from "../../../styles/buttons";
import { Heading_4_600 } from "../../../styles/typography";
import { PasswordRecForm } from "../../../styles/formPasswordRecovery";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

interface IpasswordRecovery {
    password: string,
}

export const ExecutePasswordRecoveryForm = () => {
    const {resetToken} = useParams()
    const {executePasswordRecovery} = useContext(UserContext)

    const schema = yup.object({
        password: yup.string().required("Senha obrigatória")
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IpasswordRecovery>({ resolver: yupResolver(schema) });

    const HandleRecovery = (data: any) => {
        if (resetToken) {
            const replacedToken = resetToken.replace(/&/g, ".");
            executePasswordRecovery(data, replacedToken)
        }
    }

    return (
        <Box border={"1px"} borderRadius={"8px"} padding={"40px"}>
            <PasswordRecForm onSubmit={handleSubmit(HandleRecovery)}>
                <Heading_4_600>Recuperação de senha:</Heading_4_600>
                <FormControl>
                    <FormLabel>Digite sua nova senha</FormLabel>
                    <Input type="password" {...register("password")}></Input>
                    <FormHelperText>Após esta etapa faça o login com suas novas credenciais.</FormHelperText>
                </FormControl>
                <Button_medium_text type="submit" set_hover_bg_color="random-5" set_hover_txt_color="white-fixed" set_border_color="random-5" set_text_color="random-5">Enviar</Button_medium_text>
            </PasswordRecForm>
        </Box>
    );
};