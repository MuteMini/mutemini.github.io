import { HStack, Link } from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom';

function CustomLink(props) {
    return (
        <Link 
            to={props.link}
            as={RouterLink}
            textDecoration="none"
            color="palette.900"
            textShadow="2px 2px 3px var(--chakra-colors-palette-700)"
            _hover={{
                color:"palette.800"
            }}
            transition="color 0.3s ease"
            fontSize="2xl">
            {props.children}
        </Link>
    );
}

function NavBar() {
    return (
        <HStack borderSize={1} padding={2} spacing={7}>
            <CustomLink link="/about"> About Me </CustomLink>
            <CustomLink link="/project"> Projects </CustomLink>
            <CustomLink link="/contact"> Contacts </CustomLink>
        </HStack>
    );
}

export default NavBar;