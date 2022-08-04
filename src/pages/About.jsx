import {
    Box, Center, Container, Flex, Heading, Text, VStack
} from "@chakra-ui/react"
import "@fontsource/balsamiq-sans/400-italic.css"
import "@fontsource/poppins/400.css"
import { motion, useAnimation } from "framer-motion"
import { lazy, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import imgCache from '../imgCache'

const Navbar = lazy(() => import('../components/Navbar'));
const SkillBar = lazy(() => import('../components/SkillBar'))
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
            }}
        >
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
                }} 
            />
        </Center> 
    );
}

function InnerText({ children, maxW, ...rest }) {
    return (
        <Container maxW={maxW} {...rest}>
            <Text textAlign="center" h="inherit" fontSize={{base: "xl", md: "2xl", lg: "3xl"}} variant="sm">
                {children}
            </Text>
        </Container>
    );
};
InnerText.defaultProps = {
    maxW: "60rem"
}

function About() {
    imgCache.read(process.env.PUBLIC_URL+'/img/aboutBg.jpg');

    const skillInfo = [
        {name:"Java | 2 years", p:0.6},
        {name:"Python | 6 months", p:0.35},
        {name:"C++ | 2 years", p:0.7},
        {name:"Web Dev | 1 year", p:0.5},
    ];

    return(
        <>
            <Center position="sticky" zIndex={1} top={0} bg="palette.700">
                <Navbar mainpage/>
            </Center>
            <Flex direction="column" h="100vh">
                <Center 
                    flex="1 1 auto"
                    backgroundImage={process.env.PUBLIC_URL+"/img/aboutBg.jpg"} 
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
                                I think I'm qualified to answer that... <Text style={{"-webkit-text-stroke": "0"}}>😀</Text>
                            </Heading>
                        </FadeInView>
                    </Container>
                </Center>
            </Flex>
            <VStack 
                h="100%" 
                maxH="3000px" 
                overflow="hidden" 
                justifyContent="start"
                margin={6}
                spacing={{base:"40px", lg:"70px"}}
            >
                <FadeInView duration={1} distance="30px">
                    <InnerText marginTop="20px">
                        Min is a first year Waterloo ECE student. <br/>
                        He is also an alumni of the MACS program.
                    </InnerText>
                </FadeInView>
                <FadeInView duration={1} distance="30px">
                    <InnerText>
                        <Text fontSize={{base: "3xl", lg: "5xl"}}> Interests </Text>
                        <Divider />
                        Min is a puzzle addict, passionate video editor, 
                        a novice trumpet and not so novice piano player, 
                        as well as a budding programmer.
                    </InnerText>
                    <InnerText marginTop="50px">
                        Min doesn't play much sports, but if he had to
                        choose, his favouries would be ultimate frisbee,
                        kendo, and rock climbing.
                    </InnerText>
                    <InnerText marginTop="50px">
                        He also loves to take photos.
                    </InnerText>
                    <Carousel />
                </FadeInView>
                <FadeInView duration={1} distance="30px">
                    <InnerText>
                        <Text fontSize="5xl"> Skillz </Text>
                        <Divider />
                    </InnerText>
                    {skillInfo.map((skill, sid) => (
                        <SkillBar percent={skill.p}>
                            <InnerText m="5px" maxW="20rem"> {skill.name} </InnerText>
                        </SkillBar>
                    ))}
                </FadeInView>
            </VStack>
        </>
    );
}

export default About;