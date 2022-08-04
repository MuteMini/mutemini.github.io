import {
    Box, Center, Wrap, WrapItem, Image
} from "@chakra-ui/react";
import "@fontsource/balsamiq-sans/400-italic.css";
import "@fontsource/poppins/400.css";
import { lazy } from "react";
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
                borderColor="palette.500"
                bgColor="#E4E4DD"
                overflow='hidden' 
            >
                <Center>
                    <Image
                        src={process.env.PUBLIC_URL+'/img/project/'+props.img} 
                        boxSize="full" 
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
        { img: 'auricular.jpg', title: '', desc: '', link: '', date: 5 },
        { img: 'sokoswitch.gif', title: '', desc: '', link: '', date: 5 },
    ];

    projects.forEach((proj) => imgCache.read(process.env.PUBLIC_URL+'/img/project/'+proj.img));

    return (
        <>
            <Center position="sticky" zIndex={1} top={0} w="100%" bg="palette.700">
                <Navbar mainpage/>
            </Center>
            <Center h="100vh" w="100%">
                <Wrap spacing='30px' justify='center'>
                    {projects.map((proj) => (
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