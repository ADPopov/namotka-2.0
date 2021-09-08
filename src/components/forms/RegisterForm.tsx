import {SubmitHandler, useForm} from "react-hook-form";
import React, {FC, useEffect, useState} from "react";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {Box, Button, FormControl, FormLabel, Input, Stack} from "@chakra-ui/react";
import {useTypeSelector} from "../../hooks/useTypeSelector";

export interface IRegisterFormInput {
    email: string,
    password: string,
    passwordConfirmation: string
    username: string
}

export interface IRegistrationFormProps {
    onSubmit: SubmitHandler<IRegisterFormInput>
    isLoading: boolean
}

export const RegisterForm: FC<IRegistrationFormProps> = ({onSubmit, isLoading}) => {

    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required(),
        username: yup.string().required().required(),
        passwordConfirmation: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
    });

    const [errorMessage, setErrorMessage] = useState("");
    const { error } = useTypeSelector(state => state.auth);

    useEffect(() => {
        setErrorMessage(error)
    },[error])

    const {register, handleSubmit, formState: { errors }} = useForm<IRegisterFormInput>({resolver: yupResolver(schema)});

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={6}>
                <Box color={"red.500"}>{errorMessage}</Box>
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input label="Email" type={"email"} formNoValidate={true} {...register("email", )} />
                    {<Box color={"red.500"} pt={1}>{errors.email?.message}</Box>}
                </FormControl>
                <FormControl>
                    <FormLabel>Username</FormLabel>
                    <Input label="Username"  formNoValidate={true} {...register("username", )} />
                    {<Box color={"red.500"} pt={1}>{errors.email?.message}</Box>}
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input label="Password" type="password" {...register("password", )} />
                    {<Box color={"red.500"} pt={1}>{errors.password?.message}</Box>}
                </FormControl>
                <FormControl>
                    <FormLabel>Password confirmation</FormLabel>
                    <Input label="passwordConfirmation" type="password" {...register("passwordConfirmation", )} />
                    {<Box color={"red.500"} pt={1}>{errors.passwordConfirmation?.message}</Box>}
                </FormControl>
                <Button type="submit" isLoading={isLoading}>Sign Up</Button>
            </Stack>
        </form>
    )
}