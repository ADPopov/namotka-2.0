import React, {FC} from 'react';
import {Box, Container, Divider} from "@chakra-ui/react";
import AppRouter from "./components/AppRouter/index.js";
import Header from './components/Header';


const App: FC = () => {
    return (
        <Box>
            <Header/>
            <Divider/>
            <Container maxW="container.xl" pt={5}>
                <AppRouter/>
            </Container>
        </Box>
    );
};

export default App;