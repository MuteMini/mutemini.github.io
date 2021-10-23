import { 
    Center,
    VStack, 
    Text, 
    Heading } from "@chakra-ui/react"
import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import "@fontsource/poppins/400.css"
import "@fontsource/balsamiq-sans/400-italic.css"
import Spacer from "../components/Spacer"

function Index() {
    const titleControls = useAnimation();
    const spacerControls = useAnimation();
    const subtitleControls = useAnimation();

    async function sequence() {
        await titleControls.start({ 
            opacity: 1,
            translateY: 0,
            transition: { duration: 1 },
        });
        await spacerControls.start({ 
            pathLength: 1,
            transition: { duration: 4, ease: "easeInOut" },
        });
        return await Promise.all([
            spacerControls.start({ 
                fillOpacity: 1,
                transition: { duration: 1 },
            }),
            subtitleControls.start({ 
                opacity: 1,
                translateY: 0,
                transition: { duration: 1, ease: "easeInOut" }
            })
        ]);
    }

    useEffect(() => {
        sequence();
    }, []);

    return (
        <Center 
            bg="palette.600"
            minH="100vh" 
            h="100vh" >
            <VStack spacing="-10">
                <motion.div initial={{ opacity: 0, translateY: "-50%" }} animate={titleControls} >
                    <Heading margin="6" color="palette.900" size="4xl"> Hello! My name is Min! </Heading>
                </motion.div>
                <Spacer controls={spacerControls} />  
                <motion.div initial={{ opacity: 0, translateY: "50%" }} animate={subtitleControls} >
                    <Text color="palette.900" fontSize="3xl"> Welcome to my portfolio. </Text>
                </motion.div>
            </VStack>
        </Center>
    );
}

export default Index;