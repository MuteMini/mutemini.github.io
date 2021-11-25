import { 
    Center,
    VStack, 
    Text, 
    Heading,
    Container,
    Box } from "@chakra-ui/react"
import { useEffect, lazy } from "react"
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion"
import "@fontsource/balsamiq-sans/400-italic.css"
import "@fontsource/poppins/400.css"

import Spacer from '../components/Spacer'
const Navbar = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../components/Navbar')));
    });
});
const Background = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../components/Background')));
    });
});

function Index() {
    const controlArray = {
        "total": useAnimation(),
        "title": useAnimation(),
        "spacer": useAnimation(),
        "subtitle": useAnimation(),
        "navbar": useAnimation(),
        "bg": useAnimation()
    };

    const [ref, inView] = useInView();

    useEffect(() => {
        if( inView ) {
            sequence();
        }

        async function sequence() {
            await Promise.all([
                controlArray["title"].start({ 
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1 },
                }),
                controlArray["spacer"].start({ 
                    pathLength: 1,
                    transition: { duration: 4, ease: "easeInOut" },
                })
            ]);
            await Promise.all([
                controlArray["spacer"].start({ 
                    fillOpacity: 1,
                    transition: { duration: 2, ease: "easeOut" }
                }),
                controlArray["subtitle"].start({ 
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 70 }
                })
            ]);
            return await Promise.all([
                controlArray["total"].start({ 
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }
                }),
                controlArray["navbar"].start({
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 40 }
                }),
                controlArray["bg"].start({
                    opacity: 1,
                    transition: { duration: 5, ease: "easeInOut" }
                })
            ]);
        }
    });

    return (
        <Center 
            ref={ref}
            bg="palette.600"
            minH="100vh" 
            h="100vh">
            <motion.div initial={{ opacity: 0 }} animate={controlArray["bg"]} >
                <Box position="absolute" top={0} left={0} width="100%" height="100vh" minHeight="500px">
                    <Background ballCount={2000}/>
                </Box>
            </motion.div>
            <motion.div 
                style={{ pointerEvents: "none" }}
                initial={{ y: "3vh" }}
                animate={controlArray["total"]}>
                <VStack>
                    <VStack spacing={2}>
                        <motion.div initial={{ opacity: 0, y: "-50%" }} animate={controlArray["title"]} >
                            <Heading textAlign="center"
                                textShadow="1px 1px 3px var(--chakra-colors-palette-700)" 
                                fontSize={{base: "3xl", sm: "6.5vw", lg: "6xl"}}> 
                                Hello! My name is Min! 
                            </Heading>
                        </motion.div>
                        <Box width={{base: "90vw", sm: "80vw", lg: "800px"}}>
                            <Spacer controls={controlArray["spacer"]} />  
                        </Box>
                        <motion.div initial={{ opacity: 0, y: "50%" }} animate={controlArray["subtitle"]} >
                            <Container maxW="lg" centerContent>
                                <Text textShadow="2px 2px 3px var(--chakra-colors-palette-700)" 
                                    textAlign="center"
                                    fontSize={{base: "3xl", md: "4xl"}}> 
                                    Welcome to my portfolio. 
                                </Text>
                            </Container>
                        </motion.div>
                    </VStack>
                    <motion.div style={{pointerEvents: "auto"}} initial={{ opacity: 0, y: "30%" }} animate={controlArray["navbar"]}>
                        <Navbar mainpage={false}/>
                    </motion.div>
                </VStack>
            </motion.div>
        </Center>
    );
}

export default Index;