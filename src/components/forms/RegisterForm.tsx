import {SubmitHandler, useForm} from "react-hook-form";
import React, {FC} from "react";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {Box, Button, FormControl, FormLabel, Input, Stack} from "@chakra-ui/react";

export interface IRegisterFormInput {
    email: string,
    password: string,
    passwordConfirmation: string
    username: string
}

export interface IRegistrationFormProps {
    onSubmit: SubmitHandler<IRegisterFormInput>
    errorMessage: string
}

export const RegisterForm: FC<IRegistrationFormProps> = ({onSubmit, errorMessage}) => {

    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required(),
        username: yup.string().required(),
    });

    const {register, handleSubmit, formState: {errors}} = useForm<IRegisterFormInput>({resolver: yupResolver(schema)});

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box color={"red.500"} minH={"8"} pb={2}>{errorMessage}</Box>
            <Stack spacing={6}>
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input type={"email"} formNoValidate={true} {...register("email",)} />
                    {<Box color={"red.500"} pt={1}>{errors.email?.message}</Box>}
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input  type="password" {...register("password",)} />
                    {<Box color={"red.500"} pt={1}>{errors.password?.message}</Box>}
                </FormControl>
                <FormControl>
                    <FormLabel>Username</FormLabel>
                    <Input {...register("username",)} />
                    {<Box color={"red.500"} pt={1}>{errors.username?.message}</Box>}
                </FormControl>
                <Button type="submit">Sign Up</Button>
            </Stack>
        </form>
    )
}