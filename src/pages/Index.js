import { 
    Center,
    VStack, 
    Text, 
    Heading } from "@chakra-ui/react"
import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import "@fontsource/balsamiq-sans/400-italic.css"
import "@fontsource/poppins/400.css"

import Spacer from "../components/Spacer";
import Navbar from"../components/Navbar";

function Index() {
    const totalControls = useAnimation();
    const titleControls = useAnimation();
    const spacerControls = useAnimation();
    const subtitleControls = useAnimation();
    const navbarControls = useAnimation();

    async function sequence() {
        await Promise.all([
            titleControls.start({ 
                opacity: 1,
                translateY: 0,
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
                transition: { duration: 1 },
            }),
            subtitleControls.start({ 
                opacity: 1,
                translateY: 0,
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
                translateY: 0,
                transition: { type: "spring", stiffness: 40 }
            }),
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
            <motion.div 
                initial={{ y: "3vh" }}
                animate={totalControls}>
                <VStack>
                    <VStack spacing="-10">
                        <motion.div initial={{ opacity: 0, translateY: "-50%" }} animate={titleControls} >
                            <Heading margin="6" 
                                color="palette.900" 
                                textShadow="1px 1px 3px var(--chakra-colors-palette-700)" 
                                size="4xl"> Hello! My name is Min! </Heading>
                        </motion.div>
                        <Spacer controls={spacerControls} />  
                        <motion.div initial={{ opacity: 0, translateY: "50%" }} animate={subtitleControls} >
                            <Text color="palette.900" 
                                textShadow="1px 1px 3px var(--chakra-colors-palette-700)" 
                                fontSize="4xl"> Welcome to my portfolio. </Text>
                        </motion.div>
                    </VStack>
                    <motion.div initial={{ opacity: 0, translateY: "30%" }} animate={navbarControls}>
                        <Navbar />
                    </motion.div>
                </VStack>
            </motion.div>
        </Center> 
    );
}

export default Index;