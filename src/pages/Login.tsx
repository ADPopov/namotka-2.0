import {Box, Button, Heading, SimpleGrid, Text, VisuallyHidden,} from '@chakra-ui/react';
import React, {FC, useState} from 'react';
import {SubmitHandler} from 'react-hook-form';
import {FaFacebook, FaGithub, FaGoogle} from 'react-icons/fa';
import {ILoginFormInput, LoginForm} from '../components/forms/LoginForm';
import {Link} from '../components/assets/Link';
import {Card} from '../components/assets/Card';
import {DividerWithText} from '../components/assets/DividerWithText';
import {useHistory} from "react-router-dom";
import {supabase} from "../api/supabaseClient";
import {useAction} from "../hooks/useAction";
import {RouteNames} from "../routes";


const Login: FC = () => {

    const {setIsAuth} = useAction();
    const {setErrorMessage} = useAction();
    const [isLoading, setLoading] = useState(false);


    const onSubmit: SubmitHandler<ILoginFormInput> = async data => {
        try {
            setLoading(true)
            const {user, error} = await supabase.auth.signIn({
                email: data.email,
                password: data.password,
            })
            if (error) throw setErrorMessage(error.message)
            if (user) {
                setIsAuth(true);
                setErrorMessage('')
            }
        } catch (error) {

            console.log(error)
        } finally {
            setLoading(false)
        }
    };

    const history = useHistory();

    function handleClick() {
        history.push(RouteNames.SIGN_UP);
        setErrorMessage('');
    }

    return (
        <Box
            py="20"
            px={{base: '4', lg: '8'}}
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
                    <LoginForm onSubmit={onSubmit} isLoading={isLoading}/>
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