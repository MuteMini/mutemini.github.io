import { 
    Center,
    VStack, 
    Text, 
    Heading } from "@chakra-ui/react"
import { useEffect, lazy } from "react"
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
    const totalControls = useAnimation();
    const titleControls = useAnimation();
    const spacerControls = useAnimation();
    const subtitleControls = useAnimation();
    const navbarControls = useAnimation();
    const bgControls = useAnimation();

    async function sequence() {
        await Promise.all([
            titleControls.start({ 
                opacity: 1,
                y: 0,
                transition: { duration: 1 },
            }),
            spacerControls.start({ 
                pathLength: 1,
                transition: { duration: 4, ease: "easeInOut" },
            })
        ]);
        await Promise.all([
            spacerControls.start({ 
                fillOpacity: 1,
                transition: { duration: 2, ease: "easeOut" }
            }),
            subtitleControls.start({ 
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 70 }
            })
        ]);
        return await Promise.all([
            totalControls.start({ 
                y: 0,
                transition: { duration: 1, ease: "easeInOut" }
            }),
            navbarControls.start({
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 40 }
            }),
            bgControls.start({
                opacity: 1,
                transition: { duration: 5, ease: "easeInOut" }
            })
        ]);
    }

    useEffect(() => {
        sequence();
    });

    return (
        <Center 
            bg="palette.600"
            minH="100vh" 
            h="100vh">
            <motion.div initial={{ opacity: 0 }} animate={bgControls}
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100vh", minHeight: "100vh" }} >
                <Background />
            </motion.div>
            <motion.div 
                style={{ pointerEvents: "none" }}
                initial={{ y: "3vh" }}
                animate={totalControls}>
                <VStack>
                    <VStack spacing="-10">
                        <motion.div initial={{ opacity: 0, y: "-50%" }} animate={titleControls} >
                            <Heading margin="6" 
                                color="palette.800" 
                                style={{webkitTextStroke: "3px var(--chakra-colors-palette-900)"}}
                                textShadow="1px 1px 3px var(--chakra-colors-palette-700)" 
                                size="4xl"> Hello! My name is Min! </Heading>
                        </motion.div>
                        <Spacer controls={spacerControls} />  
                        <motion.div initial={{ opacity: 0, y: "50%" }} animate={subtitleControls} >
                            <Text color="palette.800" 
                                style={{webkitTextStroke: "2px var(--chakra-colors-palette-900)"}}
                                textShadow="2px 2px 3px var(--chakra-colors-palette-700)" 
                                fontSize="4xl"> Welcome to my portfolio. </Text>
                        </motion.div>
                    </VStack>
                    <motion.div style={{pointerEvents: "auto"}} initial={{ opacity: 0, y: "30%" }} animate={navbarControls}>
                        <Navbar />
                    </motion.div>
                </VStack>
            </motion.div>
        </Center>
    );
}

export default Index;