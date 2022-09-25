import { Center, Container, Flex, Heading, Icon, Link } from '@chakra-ui/react';
import '@fontsource/balsamiq-sans/400-italic.css';
import '@fontsource/poppins/400.css';
import { lazy } from 'react';
import { HiDocumentText } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import FadeInView from '../containers/FadeInView';

const Navbar = lazy(() => import('../components/Navbar'));

function Contact() {
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
                    <Container mt='-80px' maxW='50rem'>
                        <FadeInView duration={2}>
                            <Heading textAlign='center' fontSize='5xl' variant='light'>
                                Here are some ways you can stay in contact with me!
                            </Heading>
                        </FadeInView>
                    </Container>
                </Center>
            </Flex>
            <Center h='60vh'>
                <FadeInView duration={1.5}>
                    {[ [SiLinkedin, 'https://www.linkedin.com/in/min-kang-2a7809244/'], 
                       [SiGithub, 'https://github.com/MuteMini'],
                       [MdEmail, 'mailto:therealminhere@gmail.com'],
                       [HiDocumentText, '/resume.pdf']
                     ].map((links) => (
                            <Link m={5} href={links[1]} isExternal>
                                <Icon 
                                    as={links[0]} 
                                    boxSize={100} 
                                    color='palette.400' 
                                    _hover={{'color': 'palette.500', 'transform': 'scale(1.2)'}}
                                    transition='0.3s'
                                />
                            </Link>
                    ))}
                </FadeInView>
            </Center>
        </>
    );
}

export default Contact;

//email, linkedin, github, general resume link