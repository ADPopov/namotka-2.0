import React, {useState} from 'react';
import {Box, Button, Heading, SimpleGrid, Text, VisuallyHidden} from "@chakra-ui/react";
import {Card} from "../components/assets/Card";
import {Link} from "../components/assets/Link";
import {DividerWithText} from "../components/assets/DividerWithText";
import {FaFacebook, FaGithub, FaGoogle} from "react-icons/fa";
import {useHistory} from "react-router-dom";
import {IRegisterFormInput, RegisterForm} from "../components/forms/RegisterForm";
import {SubmitHandler} from "react-hook-form";
import {supabase} from '../api/supabaseClient';
import {useAction} from "../hooks/useAction";


const Registration = () => {

    const history = useHistory();
    const {setIsAuth} = useAction();
    const {setErrorMessage} = useAction();
    const [isLoading, setLoading] = useState(false);

    function handleClick() {
        history.push("/signin");
        setErrorMessage('');
    }

    const onSubmit: SubmitHandler<IRegisterFormInput> = async data => {
        try {
            setLoading(true);
            const {user, error} = await supabase.auth.signUp({email: data.email, password: data.password})
            if (user) {
                setIsAuth(true)
                setErrorMessage('')
                const updates = {
                    id: user!.id,
                    username: data.username,
                    updated_at: new Date(),
                }
                let {error} = await supabase.from('profiles').upsert(updates, {
                    returning: 'minimal', // Don't return the value after inserting
                })
                if (error) throw error;
            }
            if (error) throw setErrorMessage(error.message)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
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
                    <RegisterForm onSubmit={onSubmit} isLoading={isLoading}/>
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