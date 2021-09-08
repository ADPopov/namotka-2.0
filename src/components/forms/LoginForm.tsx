import {SubmitHandler, useForm} from "react-hook-form";
import React, {FC, useEffect, useState} from "react";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {Box, Button, FormControl, FormLabel, Input, Stack} from "@chakra-ui/react";
import {useTypeSelector} from "../../hooks/useTypeSelector";

export interface ILoginFormInput {
    email: string,
    password: string
}

export interface ILoginFormProps {
    onSubmit: SubmitHandler<ILoginFormInput>
    isLoading: boolean
}

export const LoginForm: FC<ILoginFormProps> = ({onSubmit, isLoading}) => {

    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required()
    });

    const [errorMessage, setErrorMessage] = useState("");

    const { error } = useTypeSelector(state => state.auth);

    useEffect(() => {
        setErrorMessage(error)
    },[error])

    const {register, handleSubmit, formState: { errors }} = useForm<ILoginFormInput>({resolver: yupResolver(schema)});

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={6}>
                <Box color={"red.500"} pt={1}>{errorMessage}</Box>
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input label="Email" {...register("email", )} />
                    {<Box color={"red.500"} pt={1}>{errors.email?.message}</Box>}
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input label="Password" type="password" {...register("password", )} />
                    {<Box color={"red.500"} pt={1}>{errors.password?.message}</Box>}
                </FormControl>
                <Button type="submit" isLoading={isLoading}>Log In</Button>
            </Stack>
        </form>
    )
}