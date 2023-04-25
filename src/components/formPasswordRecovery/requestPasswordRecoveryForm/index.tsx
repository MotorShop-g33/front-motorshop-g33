import { Box, Input, FormLabel, FormControl, FormHelperText } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button_medium_text } from "../../../styles/buttons";
import { Heading_4_600 } from "../../../styles/typography";
import { PasswordRecForm } from "../../../styles/formPasswordRecovery";
import { useState } from "react";
import * as yup from "yup";

interface IpasswordRecovery {
    email: string,
}

export const RequestPasswordRecoveryForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const schema = yup.object({
        email: yup.string().email("O valor inserido não é um email").required("Email obrigatório")
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IpasswordRecovery>({ resolver: yupResolver(schema) });

    const HandleRecovery = (data: any) => {
        console.log(data)
    }

    return (
        <Box border={"1px"} borderRadius={"8px"} padding={"40px"}>
            <PasswordRecForm onSubmit={handleSubmit(HandleRecovery)}>
                <Heading_4_600>Recuperação de senha:</Heading_4_600>
                <FormControl>
                    <FormLabel>Digite seu e-mail</FormLabel>
                    <Input type="email" {...register("email")}></Input>
                    <FormHelperText>Se seu e-mail corresponder a uma conta, enviaremos um código a ele.</FormHelperText>
                </FormControl>
                <Button_medium_text 
                    type="submit"
                    disabled={isSubmitted ? (true) : (false)} 
                    set_background_color={isSubmitted ? ("random-5") : ("transparent")} 
                    set_hover_bg_color="random-5" 
                    set_hover_txt_color="white-fixed" 
                    set_border_color="random-5"
                    set_text_color={isSubmitted ? ("white-fixed") : ("random-5")} 
                    onClick={() => setIsSubmitted(true)}>
                    { isSubmitted ? ("Enviado!") : ("Enviar") }
                </Button_medium_text>
            </PasswordRecForm>
        </Box>
    );
};