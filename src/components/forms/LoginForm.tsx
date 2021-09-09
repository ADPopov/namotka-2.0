import {SubmitHandler, useForm} from "react-hook-form";
import React, {FC} from "react";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {Box, Button, FormControl, FormLabel, Input, Stack} from "@chakra-ui/react";

export interface ILoginFormInput {
    email: string,
    password: string
}

export interface ILoginFormProps {
    onSubmit: SubmitHandler<ILoginFormInput>
}

export const LoginForm: FC<ILoginFormProps> = ({onSubmit}) => {

    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required()
    });

    const {register, handleSubmit, formState: {errors}} = useForm<ILoginFormInput>({resolver: yupResolver(schema)});

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={6}>
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input label="Email" {...register("email",)} />
                    {<Box color={"red.500"} pt={1}>{errors.email?.message}</Box>}
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input label="Password" type="password" {...register("password",)} />
                    {<Box color={"red.500"} pt={1}>{errors.password?.message}</Box>}
                </FormControl>
                <Button type="submit">Log In</Button>
            </Stack>
        </form>
    )
}