import React, {FC} from 'react';
import {Box, Container, Divider, useColorModeValue} from "@chakra-ui/react";
import AppRouter from "./components/AppRouter/index.js";
import Header from './components/Header';


const App: FC = () => {
    return (
        <Box bg={useColorModeValue('gray.50', 'inherit')}>
            <Header/>
            <Divider/>
            <Container maxW="container.xl" minH="calc(100vh - 100px)" pt={5} >
                <AppRouter/>
            </Container>
        </Box>
    );
};

export default App;