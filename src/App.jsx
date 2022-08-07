import { Center, ChakraProvider, Spinner } from "@chakra-ui/react";
import React, { lazy, Suspense, useEffect } from 'react';
import { HashRouter, Route, Switch, useLocation } from 'react-router-dom';
import { theme } from './theme';

const Index = lazy(() => import('./pages/Index'));
const About = lazy(() => import('./pages/About'));
const Project = lazy(() => import('./pages/Project'));
const Contact = lazy(() => import('./pages/Contact'));
const ErrorPage = lazy(() => import('./pages/404'));

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

function ScrollToTop() {
    const pathName = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"});
    }, [pathName])

    return null;
}

function App() {
    return (
        <ChakraProvider theme={theme}>
            <HashRouter> 
                <ScrollToTop />
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route path="/" exact component={Index} />
                        <Route path="/about" component={About} />
                        <Route path="/project" component={Project} />
                        <Route path="/Contact" component={Contact} />
                        <Route path="*" component={ErrorPage}/>
                    </Switch>
                </Suspense>
            </HashRouter>
        </ChakraProvider>
    )
}

export default App;
