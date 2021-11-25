import { Flex, Link } from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom';

function CustomLink(props) {
    return (
        <Link 
            to={props.link}
            as={RouterLink}
            pos="inherit"
            m="0 10px 0 10px"
            style={{webkitTextStroke: "1.5px var(--chakra-colors-palette-900)", whiteSpace: "nowrap"}}
            _hover={{
                textShadow: "4px 4px 3px lightgray",
                transform: "scale(1.1)"
            }}
            transition="text-shadow 0.5s linear, transform 0.4s ease"
            fontSize="2xl">
            {props.children}
        </Link>
    );
}

function NavBar({ mainpage }) {
    const PreNavBar = (props) => (
        <Flex 
            as="nav" 
            pos="sticky" 
            borderSize={1} 
            padding={2} 
            wrap="wrap" 
            justify="center"
        >
            {props.children}
            <CustomLink link="/about"> About Me </CustomLink>
            <CustomLink link="/project"> Projects </CustomLink>
            <CustomLink link="/contact"> Contacts </CustomLink>
        </Flex>
    );

    if (mainpage) {
        return (
            <PreNavBar>
                <CustomLink link="/"> Homepage </CustomLink>
            </PreNavBar>
        );
    }
    else {
        return <PreNavBar />
    }
}

export default NavBar;