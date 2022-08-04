import {
    Box, Center, Container, Heading, Text, VStack
} from "@chakra-ui/react"
import "@fontsource/balsamiq-sans/400-italic.css"
import "@fontsource/poppins/400.css"
import { motion, useAnimation } from "framer-motion"
import { lazy, useEffect } from "react"
import { useInView } from "react-intersection-observer"

const Spacer = lazy(() => import('../components/Spacer'));
const Navbar = lazy(() => import('../components/Navbar'));
const Background = lazy(() => import('../components/Background'))

function Index() {
    const controlArray = {
        "total": useAnimation(),
        "title": useAnimation(),
        "spacer": useAnimation(),
        "rest": useAnimation(),
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
                controlArray["total"].start({ 
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }
                }),
                controlArray["rest"].start({ 
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 70 }
                }),
                controlArray["spacer"].start({ 
                    fillOpacity: 1,
                    transition: { duration: 2, ease: "easeOut" }
                }),
                controlArray["bg"].start({
                    opacity: 1,
                    transition: { duration: 4, ease: "easeInOut" }
                })
            ]);
        }
    });

    return (
        <Center 
            ref={ref}
            bg="palette.600"
            minH="100vh" 
            h="100vh"
        >
            <motion.div initial={{ opacity: 0 }} animate={controlArray["bg"]} >
                <Box position="absolute" top={0} left={0} width="100%" height="100vh" minHeight="500px">
                    <Background ballCount={2000}/>
                </Box>
            </motion.div>
            <motion.div 
                style={{ pointerEvents: "none" }}
                initial={{ y: "3vh" }}
                animate={controlArray["total"]}
            >
                <VStack>
                    <VStack spacing={-3}>
                        <motion.div initial={{ opacity: 0, y: "-50%" }} animate={controlArray["title"]} >
                            <Heading 
                                textAlign="center"
                                textShadow="1px 1px 3px var(--chakra-colors-palette-700)" 
                                fontSize={{base: "3xl", sm: "6.5vw", lg: "6xl"}}
                            > 
                                Hello! My name is Min! 
                            </Heading>
                        </motion.div>
                        <Box width={{base: "90vw", sm: "80vw", lg: "800px"}}>
                            <Spacer controls={controlArray["spacer"]} />  
                        </Box>
                        <motion.div initial={{ opacity: 0, y: "50%" }} animate={controlArray["rest"]} >
                            <Container maxW="lg" centerContent>
                                <Text textShadow="2px 2px 3px var(--chakra-colors-palette-700)" 
                                    textAlign="center"
                                    fontSize={{base: "3xl", md: "4xl"}}> 
                                    Welcome to my portfolio. 
                                </Text>
                            </Container>
                        </motion.div>
                    </VStack>
                    <motion.div style={{pointerEvents: "auto"}} initial={{ opacity: 0, y: "30%" }} animate={controlArray["rest"]}>
                        <Navbar mainpage={false}/>
                    </motion.div>
                </VStack>
            </motion.div>
        </Center>
    );
}

export default Index;