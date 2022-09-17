import { Center, Container, Heading } from '@chakra-ui/react';
import '@fontsource/balsamiq-sans/400-italic.css';
import '@fontsource/poppins/400.css';
import { lazy } from 'react';
import FadeInView from '../containers/FadeInView';

const Navbar = lazy(() => import('../components/Navbar'));

function ErrorPage() {
    return (
    <>
        <Center position='sticky' zIndex={1} top={0} w='100%' bg='palette.700'>
            <Navbar mainpage/>
        </Center>
        <Center
            h='90vh'
            backgroundColor='palette.300'
            backgroundSize='cover'
            backgroundAttachment='fixed'
            backgroundPosition='center'
        >
            <Container mt='-80px' maxW='50rem'>
                <FadeInView duration={2}>
                    <Heading textAlign='center' fontSize='5xl' variant='light'>
                        404 <br/> This link doesn't exist :(
                    </Heading>
                </FadeInView>
            </Container>
        </Center>
    </>
    );
}

export default ErrorPage;