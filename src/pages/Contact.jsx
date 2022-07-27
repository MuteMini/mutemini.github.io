import { lazy } from "react";
import { Center } from "@chakra-ui/react"
import "@fontsource/balsamiq-sans/400-italic.css"
import "@fontsource/poppins/400.css"

const Navbar = lazy(() => import('../components/Navbar'));

function Contact() {
    return (
        <>
            <Center position="sticky" zIndex={1} top={0} w="100%" bg="palette.700">
                <Navbar mainpage/>
            </Center>
            <Center h="100%" w="100%" >
                
            </Center>
        </>
    );
}

export default Contact;
