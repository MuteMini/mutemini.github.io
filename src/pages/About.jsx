import { Center,
    VStack, 
    Text, 
    Heading,
    Container,
    Box } from "@chakra-ui/react"
import { useEffect, lazy } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import "@fontsource/balsamiq-sans/400-italic.css"
import "@fontsource/poppins/400.css"
import imgCache from '../imgCache'

const Navbar = lazy(() => import('../components/Navbar'));
const Carousel = lazy(() => import('../components/Carousel'))

const MotionBox = motion(Box);

function FadeInView({ children, duration, distance }) {
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
        transition={{duration: duration, ease: "easeInOut"}}
        variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: distance }
        }}>
            {children}
        </motion.div>
    );
}
FadeInView.defaultProps = {
    distance: "100px"
};

function Divider() {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    }, [control, inView]);

    return (
        <Center>
            <MotionBox
            zIndex={0}
            borderRadius="2px"
            border="2px solid"
            borderColor="palette.500"
            ref={ref}
            animate={control}
            initial={"hidden"}
            transition={{ duration: 2, ease: "easeOut" }}
            variants={{
                visible: { width: "50%" },
                hidden: { width: "0%" }
            }} />
        </Center> 
    );
}

function InnerText({ children, maxW, ...rest }) {
    return (
        <Container maxW={maxW} {...rest}>
            <Text textAlign="center" h="inherit" fontSize="3xl" variant="sm">
                {children}
            </Text>
        </Container>
    );
};
InnerText.defaultProps = {
    maxW: "60rem"
}

function About() {
    imgCache.read('/img/aboutBg.jpg');

    return(
        <>
            <Center position="sticky" zIndex={1} top={0} w="100%" bg="palette.700">
                <Navbar mainpage/>
            </Center>
            <Center h="100vh" w="100%" 
                backgroundImage={"/img/aboutBg.jpg"} 
                backgroundSize="cover"
                backgroundAttachment="fixed"
                backgroundPosition="center right"
            >
                <Container maxW="50rem">
                    <FadeInView duration={2}>
                        <Heading textAlign="center" fontSize="6xl" variant="light">
                            Who is Min?
                        </Heading>
                        <Heading textAlign="center" fontSize="3xl" variant="light-sm">
                            I think I'm qualified to answer that... 😀
                        </Heading>
                    </FadeInView>
                </Container>
            </Center>
            <VStack h="100%" 
                maxH="3000px" 
                overflow="hidden" 
                justifyContent="start"
                margin={6}
                spacing="100px"
            >
                <FadeInView duration={1} distance="30px">
                    <InnerText marginTop="20px">
                        Min is a grade 12 student currently attending 
                        William Lyon Mackenzie C.I.
                    </InnerText>
                </FadeInView>
                <FadeInView duration={1} distance="30px">
                    <InnerText>
                        <Text fontSize="5xl"> Interests </Text>
                        <Divider />
                        Min is a puzzle addict, passionate video editor, 
                        a novice trumpet and not so novice piano player, 
                        as well as a budding programmer.
                    </InnerText>
                    <InnerText marginTop="50px">
                        Min doesn't play much sports, but if he had to
                        choose, his favouries would be ultimate frisbee,
                        kendo, and soccer.
                    </InnerText>
                    <InnerText marginTop="50px">
                        Min also loves to take photos. Here are some he took
                        that he is proud of.
                    </InnerText>
                    <Carousel />
                </FadeInView>
                <FadeInView duration={1} distance="30px">
                    <InnerText>
                        <Text fontSize="5xl"> Skillz </Text>
                        <Divider />
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua.
                    </InnerText>
                </FadeInView>
            </VStack>
        </>
    );
}

export default About;