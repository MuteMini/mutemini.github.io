import { HStack, Link } from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom';

function CustomLink(props) {
    return (
        <Link 
            to={props.link}
            as={RouterLink}
            pos="inherit"
            style={{webkitTextStroke: "1.5px var(--chakra-colors-palette-900)"}}
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
        <HStack pos="sticky" borderSize={1} padding={2} spacing={7}>
            {props.children}
            <CustomLink link="/about"> About Me </CustomLink>
            <CustomLink link="/project"> Projects </CustomLink>
            <CustomLink link="/contact"> Contacts </CustomLink>
        </HStack>
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