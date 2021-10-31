import { Center,
    VStack, 
    Text, 
    Heading,
    Box } from "@chakra-ui/react"
import { useEffect, lazy } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import "@fontsource/balsamiq-sans/400-italic.css"
import "@fontsource/poppins/400.css"
import bgImage from './aboutBg.jpg';

const Navbar = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../../components/Navbar')));
    });
});

function FadeInView({ children, duration }) {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    }, [control, inView]);

    return(
        <motion.div
        style={{ zIndex: 0 }}
        ref={ref}
        animate={control}
        initial={"hidden"}
        transition={{type: "spring", duration: duration}}
        variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 }
        }}>
            {children}
        </motion.div>
    );
}

function About() {
    return(
        <>
            <Center flex="0 0" position="sticky" zIndex={1} top={0} w="100%" bg="palette.700">
                <Navbar mainpage/>
            </Center>
            <Box display="flex">
                <Center flex="0 0 auto" h="100vh" w="100%" backgroundImage={bgImage}>
                    <FadeInView duration={5}>
                        <Heading fontSize="5xl">
                            Welcome to my portfolio. 
                        </Heading>
                    </FadeInView>
                </Center>
            </Box>
            <Box display="flex">

                <FadeInView duration={5}>
                    <Text flex="0 0 auto" h="200px" fontSize="4xl">
                        lets check if this is a penis!!!
                    </Text>
                </FadeInView>
            </Box>
        </>
    );
}

export default About;