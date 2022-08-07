import {
    Box, Center, Container, Flex, Heading, Image, Text, Wrap, WrapItem
} from '@chakra-ui/react';
import '@fontsource/balsamiq-sans/400-italic.css';
import '@fontsource/poppins/400.css';
import { lazy } from 'react';
import FadeInView from '../containers/FadeInView';
import imgCache from '../imgCache';

const Navbar = lazy(() => import('../components/Navbar'));

function ProjectCard(props) {
    return (
        <FadeInView duration={1} >
            <Box 
                maxW='sm' 
                shadow='md' 
                rounded='md'
                borderWidth='5px' 
                borderRadius='xl' 
                borderColor='palette.500'
                bgColor='#E4E4DD'
                overflow='hidden' 
            >
                <Text m='5px 0 0 10px' variant='sm' fontSize={{base: 'xl', lg: '2xl'}}> 
                    {props.title} 
                </Text>
                <Center>
                    <Image
                        src={process.env.PUBLIC_URL+'/img/project/'+props.img} 
                        pointerEvents='none'
                        boxSize='full'
                        shadow='base'
                        borderRadius='lg'
                        m={2}
                    />
                </Center>
            </Box>
        </FadeInView>
    );
}

function Project() {
    const projects = [
        { title: 'Screensaver Generator', 
            date: 'Dec. 2018', 
            img: 'screensaver.jpg',
            desc: '', 
            link: 'https://github.com/MuteMini/ICS2D3-ISP' },
        { title: 'Who Wants To Be A Milionaire', 
            date: 'Dec. 2019', 
            img: 'wwtbam.jpg', 
            desc: '', 
            link: 'https://github.com/MuteMini/ICS3U3-ISP' },
        { title: 'Validdit', 
            date: 'June, 2020', 
            img: 'validdit.jpg', 
            desc: '', 
            link: 'https://devpost.com/software/validdit-dcfjua' },
        { title: 'Bus Conductor', 
            date: 'June, 2020', 
            img: 'busmanager.jpg', 
            desc: '', 
            link: 'https://github.com/MuteMini/ICS4U0-ISP' },
        { title: 'SokoSwitch', 
            date: 'July, 2020', 
            img: 'sokoswitch.gif', 
            desc: '', 
            link: 'https://github.com/MuteMini/Sokoswitch' },
        { title: 'Auricular.ai', 
            date: 'Jan. 2021', 
            img: 'auricular.jpg', 
            desc: '', 
            link: 'https://devpost.com/software/auricular-ai' },
        { title: 'HandPong', 
            date: 'Sep. 2021', 
            img: 'handpong.jpg', 
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
            <Center h='100%' overflow='hidden' >
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