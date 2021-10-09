import React, { Suspense, lazy } from 'react';
import { ChakraProvider, extendTheme, Center, Spinner } from "@chakra-ui/react"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Index = lazy(() => import('./pages/Index'));

const theme = extendTheme({
    colors: {
        palette: {
            400: "#CB997E",
            500: "#DDBEA9",
            600: "#FFE8D6",
            700: "#B7B7A4",
            800: "#A5A58D",
            900: "#6B705C",
        }
    },
})

const { PUBLIC_URL } = process.env;

const Loading = () => (
    <Center
        background="palette.600"
        minH="100vh" 
        h="100vh" 
    >
        <Spinner
            thickness="4px"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
        />
    </Center>
);

function App() {
    return (
        <ChakraProvider theme={theme}>
            <BrowserRouter basename={PUBLIC_URL}> 
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route path="/" exact component={Index} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </ChakraProvider>
    )
}

export default App;
