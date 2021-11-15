import React, { Suspense, lazy } from 'react';
import { ChakraProvider, Center, Spinner } from "@chakra-ui/react"
import { HashRouter, Route, Switch } from 'react-router-dom';
import { theme } from './theme'

const Index = lazy(() => import('./pages/Index'));
const About = lazy(() => import('./pages/About'));
const Project = lazy(() => import('./pages/Project'));

const { PUBLIC_URL } = process.env;

const Loading = () => (
    <Center
        background="palette.600"
        minH="100vh" 
        h="100vh" 
    >
        <Spinner
            thickness="4px"
            emptyColor="palette.500"
            color="palette.800"
            size="xl"
        />
    </Center>
);

function App() {
    return (
        <ChakraProvider theme={theme}>
            <HashRouter basename={PUBLIC_URL}> 
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route path="/" exact component={Index} />
                        <Route path="/about" component={About} />
                        <Route path="/project" component={Project} />
                    </Switch>
                </Suspense>
            </HashRouter>
        </ChakraProvider>
    )
}

export default App;
