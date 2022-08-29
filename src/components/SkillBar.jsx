import { Box, Text, Flex } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const MotionBox = motion(Box);

class Color {
    constructor({hexCode, red, green, blue}) {
        var codeInc = (hexCode !== undefined);
        this.red = (codeInc) ? parseInt(hexCode.substr(1,2), 16) : parseInt(red);
        this.green = (codeInc) ? parseInt(hexCode.substr(3,2), 16) : parseInt(green);
        this.blue = (codeInc) ? parseInt(hexCode.substr(5,2), 16) : parseInt(blue);
    }

    getHexCode() {
        return '#'
            +('00'+this.red.toString(16).toUpperCase()).slice(-2)
            +('00'+this.green.toString(16).toUpperCase()).slice(-2)
            +('00'+this.blue.toString(16).toUpperCase()).slice(-2);
    }
}

const start = new Color({hexCode:'#12c2e9'});
const mid = new Color({hexCode:'#c471ed'});
const end = new Color({hexCode:'#f64f59'});

console.log(start.getHexCode())

const interpolateColor = (percent) => {
    percent = 1/(0.5+Math.exp(-10*(percent-0.435)));
    var cstart, cend;
    if(percent < 1) {
        cstart = start;
        cend = mid;
    }
    else {
        cstart = mid;
        cend = end;
        percent -= 1;
    }

    var diffR = cend.red - cstart.red;
    var diffG = cend.green - cstart.green;
    var diffB = cend.blue - cstart.blue;

    diffR = (diffR * percent) + cstart.red;
    diffG = (diffG * percent) + cstart.green;
    diffB = (diffB * percent) + cstart.blue;

    return new Color({red:diffR, green:diffG, blue:diffB});
};

function SkillBar({ percent, children }) {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start({ 
                '--animate-width': 1,
                'background-color': interpolateColor(percent).getHexCode() 
            });
        }
    }, [control, inView, percent]);

    var title;
    if(percent <= 0.4) {
        title = 'Beginner';
    } else if(percent <= 0.6) {
        title = 'Intermediate';
    } else if(percent <= 0.8) {
        title = 'Advanced';
    } else {
        title = 'Perfected';
    }

    return (
        <Flex alignItems='center'>
            <Box h='35px' w={{base: '250px', sm: '300px', md: '500px'}} borderRadius='xl' bg='gray.400'>
                <MotionBox 
                    ref={ref}
                    animate={control}
                    transition={{ duration: 2, ease: 'easeOut' }}
                    initial={{'--animate-width': 0, 'background-color': start.getHexCode()}}
                    h='100%' 
                    w={'calc(100%*'+percent+'*var(--animate-width))'} 
                    borderRadius='xl' 
                >
                    <Text position='relative' top='3px' left='10px' fontSize={{base:'lg', md:'xl'}} whiteSpace='nowrap' variant='light-sm'> {title} </Text>
                </MotionBox>
            </Box>
            {children}
        </Flex>
    );
}

export default SkillBar;