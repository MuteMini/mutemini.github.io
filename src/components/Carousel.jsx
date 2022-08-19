import {
    AspectRatio, Flex, Image, Text
} from "@chakra-ui/react";
import { useState } from 'react';
import imgCache from '../imgCache';

const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-30px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: {base: "20px", md: "30px", lg:"40px"},
    transition: "0.6s ease",
    borderRadius: "3px",
    userSelect: "none",
    _hover: {
        bg: "rgba(0, 0, 0, 0.5)",
    },
};

const slidesCount = 9;

function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const prevSlide = () => {
        setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };
    const nextSlide = () => {
        setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const carouselStyle = {
        transition: "all .5s",
        ml: `-${currentSlide * 100}%`,
    };

    for(var i = 1; i <= slidesCount; i++) {
        imgCache.read(process.env.PUBLIC_URL+'/img/carousel/carousel'+i+'.jpg');
    }

    return (
        <Flex
            w="full" 
            p={{base:1, md:5}}
            alignItems="center"
            justifyContent="center"
        >
            <Flex 
                overflow="hidden" 
                pos="relative" 
                border="10px solid var(--chakra-colors-palette-500)"
                borderRadius={{base:"10px", md:"20px"}}
            >
                <Flex h="80vh" w="calc(80vh * (3/2))" {...carouselStyle}>
                    {Array(slidesCount).fill(1).map((e, sid) => (
                        <Image 
                            key={`slide-${sid}`}
                            src={process.env.PUBLIC_URL+'/img/carousel/carousel'+(sid+1)+'.jpg'} 
                            flex="none"
                        />
                    ))}
                </Flex>
                <Text {...arrowStyles} variant="light" left="0" onClick={prevSlide}>
                    &#10094;
                </Text>
                <Text {...arrowStyles} variant="light" right="0" onClick={nextSlide}>
                    &#10095;
                </Text>
            </Flex>
        </Flex>
    );
};

export default Carousel;