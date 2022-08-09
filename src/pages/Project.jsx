import {
    Box, Center, Container, Flex, Heading, Image, Text, Wrap, WrapItem
} from '@chakra-ui/react';
import '@fontsource/balsamiq-sans/400-italic.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css'
import { lazy, useState } from 'react';
import { motion } from "framer-motion";
import FadeInView from '../containers/FadeInView';
import imgCache from '../imgCache';

const Navbar = lazy(() => import('../components/Navbar'));

const MotionBox = motion(Box);

const variants = {
    offSize: { 'max-width': 'var(--chakra-sizes-2xs)' },
    onSize: { 'max-width': 'var(--chakra-sizes-xl)' },
    offHidden: { opacity: 0, display: 'none' },
    onHidden: { opacity: 1, display: 'inline' },
}
const transType = { type: 'spring', bounce: 0.25, stiffness: 50 };

function ProjectCard(props) {
    const [clicked, setClicked] = useState(true);

    return (
        <FadeInView duration={1}>
            <MotionBox 
                shadow='md' 
                rounded='md'
                borderWidth='5px' 
                borderRadius='xl' 
                borderColor='palette.500'
                bgColor='#E4E4DD'
                overflow='hidden'  
                onClick={() => setClicked(!clicked)}
                animate={clicked ? "offSize" : "onSize" }
                variants={variants}
                transition={transType}
            >
                <Text m='5px 0 0 10px' variant='sm' fontSize={{base: 'xl', lg: '2xl'}} > 
                    {props.title}
                    <Text variant='light-thicker' fontSize={{base: 'lg', lg: 'xl'}}> {props.date} </Text>
                </Text>
                <Center>
                    <Image
                        src={process.env.PUBLIC_URL+'/img/project/'+props.img}
                        pointerEvents='none'
                        maxW={{base: 'md', lg: 'lg'}}
                        boxSize='full'
                        shadow='base'
                        borderRadius='lg'
                        m={2}
                    />
                </Center>
            </MotionBox>
        </FadeInView>
    );
}

function Project() {
    const projects = [
        { title: 'Screensaver Generator', 
            date: 'December 2018', 
            img: 'screensaver.jpg',
            tags: [],
            desc: '', 
            link: 'https://github.com/MuteMini/ICS2D3-ISP' },
        { title: 'Who Wants To Be A Milionaire', 
            date: 'December 2019', 
            img: 'wwtbam.jpg', 
            tags: [],
            desc: '', 
            link: 'https://github.com/MuteMini/ICS3U3-ISP' },
        { title: 'Validdit', 
            date: 'June 2020', 
            img: 'validdit.jpg', 
            tags: [],
            desc: '', 
            link: 'https://devpost.com/software/validdit-dcfjua' },
        { title: 'Bus Conductor', 
            date: 'June 2020', 
            img: 'busmanager.jpg', 
            tags: [],
            desc: '', 
            link: 'https://github.com/MuteMini/ICS4U0-ISP' },
        { title: 'SokoSwitch', 
            date: 'July 2020', 
            img: 'sokoswitch.gif', 
            tags: [],
            desc: '', 
            link: 'https://github.com/MuteMini/Sokoswitch' },
        { title: 'Auricular.ai', 
            date: 'January 2021', 
            img: 'auricular.jpg', 
            tags: [],
            desc: '', 
            link: 'https://devpost.com/software/auricular-ai' },
        { title: 'HandPong', 
            date: 'September 2021', 
            img: 'handpong.jpg', 
            tags: [],
            desc: '', 
            link: 'https://devpost.com/software/handpong' },
    ];

    imgCache.read(process.env.PUBLIC_URL+'/img/projectBg.jpg')
    projects.forEach((proj) => imgCache.read(process.env.PUBLIC_URL+'/img/project/'+proj.img));

    return (
        <>
            <Center position='sticky' zIndex={1} top={0} w='100%' bg='palette.700'>
                <Navbar mainpage/>
            </Center>
            <Flex direction='column' h='100vh'>
                <Center 
                    flex='1 1 auto'
                    backgroundImage={process.env.PUBLIC_URL+'/img/projectBg.jpg'} 
                    backgroundSize='cover'
                    backgroundAttachment='fixed'
                    backgroundPosition='center'
                >
                    <Container mt='-50px' maxW='50rem'>
                        <FadeInView duration={2}>
                            <Heading textAlign='center' fontSize='6xl' variant='light'>
                                Personal Projects
                            </Heading>
                            <Heading textAlign="center" fontSize="3xl" variant="light-sm">
                                Collection dating back to 2018 :)
                            </Heading>
                        </FadeInView>
                    </Container>
                </Center>
            </Flex>
            <Center h='100%' overflow='hidden'>
                <Wrap m={5} spacing='30px' justify='center'>
                    {projects.reverse().map((proj) => (
                        <WrapItem>
                            <ProjectCard {...proj} />
                        </WrapItem>
                    ))}  
                </Wrap >    
            </Center>
        </>
    );
}

export default Project;