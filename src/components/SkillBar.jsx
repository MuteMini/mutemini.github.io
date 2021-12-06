import { Box, Text, Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"

class Color {
    constructor(red, green, blue) {
        this.red = parseInt(red);
        this.green = parseInt(green);
        this.blue = parseInt(blue);
    }
    getHexCode() {
        return "#"
            +this.red.toString(16)
            +this.green.toString(16)
            +this.blue.toString(16);
    }
}

const start = new Color(236, 49, 69);
const end = new Color(66, 141, 88);

function interpolateColor(percent) {
    var diffR = end.red - start.red;
    var diffG = end.green - start.green;
    var diffB = end.blue - start.blue;

    percent = 1/(1+Math.exp(-10*(percent-0.4)));

    diffR = (diffR * percent) + start.red;
    diffG = (diffG * percent) + start.green;
    diffB = (diffB * percent) + start.blue;

    return new Color(diffR, diffG, diffB);
}

function SkillBar({ percent, children }) {
    const [mainColor, setMainColor] = useState(null);
    const [title, setTitle] = useState(null);

    useEffect(() => {
        setMainColor( interpolateColor(percent).getHexCode() );
        if(percent <= 0.4) {
            setTitle("Beginner");
        } else if(percent <= 0.6) {
            setTitle("Intermediate");
        } else if(percent <= 0.8) {
            setTitle("Advanced");
        } else {
            setTitle("Perfected");
        }
    }, [percent]);

    return (
        <Flex alignItems="center">
            <Box h="35px" w={{base:"50vw", md:"500px"}} borderRadius="xl" bg="gray.400">
                <Box h="100%" w={"calc(100%*"+percent+")"} borderRadius="xl" bg={mainColor}>
                    <Text position="relative" top="3px" left="10px" fontSize="lg" whiteSpace="nowrap" variant="light-sm"> {title} </Text>
                </Box>
            </Box>
            {children}
        </Flex>
    );
}

export default SkillBar;