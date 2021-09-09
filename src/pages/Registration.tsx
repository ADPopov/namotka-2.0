import React from 'react';
import {Box, Button, Heading, SimpleGrid, Text, VisuallyHidden} from "@chakra-ui/react";
import {Card} from "../components/assets/Card";
import {Link} from "../components/assets/Link";
import {DividerWithText} from "../components/assets/DividerWithText";
import {FaFacebook, FaGithub, FaGoogle} from "react-icons/fa";
import {useHistory} from "react-router-dom";
import {IRegisterFormInput, RegisterForm} from "../components/forms/RegisterForm";
import {SubmitHandler} from "react-hook-form";
import {useAction} from "../hooks/useAction";
import {useCustomToast} from "../hooks/useCustom";


const Registration = () => {

    const history = useHistory();
    const {signUp} = useAction();
    const toast = useCustomToast();

    function handleClick() {
        history.push("/signin");
    }

    const onSubmit: SubmitHandler<IRegisterFormInput> = async data => {
        try {
            await signUp(data.email, data.password);
            toast("Confirm your email address",
                'Check your email for the login link',
                'success');
        } catch (error: any) {
            toast(
                "Error",
                error.message,
                'error');
        }
    };

    return (
        <Box
            py="10"
            px={{base: '4', lg: '8'}}
        >
            <Box maxW="md" mx="auto">
                <Heading textAlign="center" size="xl" fontWeight="extrabold">
                    Sign up for an account
                </Heading>
                <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
                    <Text as="span">Do you have an account?</Text>
                    <Link onClick={handleClick}>Sign in</Link>
                </Text>
                <Card>
                    <RegisterForm onSubmit={onSubmit}/>
                    <DividerWithText mt="6">or sign up using</DividerWithText>
                    <SimpleGrid mt="6" columns={3} spacing="3">
                        <Button color="currentColor" variant="outline">
                            <VisuallyHidden>Login with Facebook</VisuallyHidden>
                            <FaFacebook/>
                        </Button>
                        <Button color="currentColor" variant="outline">
                            <VisuallyHidden>Login with Google</VisuallyHidden>
                            <FaGoogle/>
                        </Button>
                        <Button color="currentColor" variant="outline">
                            <VisuallyHidden>Login with Github</VisuallyHidden>
                            <FaGithub/>
                        </Button>
                    </SimpleGrid>
                </Card>
            </Box>
        </Box>
    );
};

export default Registration;