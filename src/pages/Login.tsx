import {Box, Button, Heading, SimpleGrid, Text, VisuallyHidden,} from '@chakra-ui/react';
import React, {FC, useState} from 'react';
import {SubmitHandler} from 'react-hook-form';
import {FaFacebook, FaGithub, FaGoogle} from 'react-icons/fa';
import {ILoginFormInput, LoginForm} from '../components/forms/LoginForm';
import {Link} from '../components/assets/Link';
import {Card} from '../components/assets/Card';
import {DividerWithText} from '../components/assets/DividerWithText';
import {useHistory} from "react-router-dom";
import {useAction} from "../hooks/useAction";
import {RouteNames} from "../routes";


const Login: FC = () => {

    const {login} = useAction();
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();

    const onSubmit: SubmitHandler<ILoginFormInput> = async data => {
        try {
            await login(data.email, data.password);
        } catch (error: any) {
            setErrorMessage(error.message)
        }
    };

    function handleClick() {
        history.push(RouteNames.SIGN_UP);
    }

    return (
        <Box
            py="20"
            px={{base: '2', lg: '8'}}
        >
            <Box maxW="md" mx="auto">
                <Heading textAlign="center" size="xl" fontWeight="extrabold">
                    Sign in to your account
                </Heading>
                <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
                    <Text as="span">Don&apos;t have an account?</Text>
                    <Link onClick={handleClick}>Sign up</Link>
                </Text>
                <Card>
                    <LoginForm onSubmit={onSubmit} errorMessage={errorMessage}/>
                    <DividerWithText mt="6">or continue with</DividerWithText>
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
    )
};

export default Login;