import { Flex, 
    Box, 
    Text } from "@chakra-ui/react"
import { useState } from 'react'
import { SuspenseImage } from './SuspenseImage'

function Carousel(){
    const arrowStyles = {
        cursor: "pointer",
        pos: "absolute",
        top: "50%",
        w: "auto",
        mt: "-22px",
        p: "16px",
        color: "white",
        fontWeight: "bold",
        fontSize: {base: "30px", md: "40px", lg: "50px"},
        transition: "0.6s ease",
        borderRadius: "0 3px 3px 0",
        userSelect: "none",
        _hover: {
            opacity: 0.8,
            bg: "black",
        },
    };

    const slides = [
        { img: 'carousel1.jpg', },
        { img: 'carousel2.jpg', },
        { img: 'carousel3.jpg', },
        { img: 'carousel4.jpg', },
        { img: 'carousel5.jpg', },
        { img: 'carousel6.jpg', },
        { img: 'carousel7.jpg', },
        { img: 'carousel8.jpg', },
        { img: 'carousel9.jpg', }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesCount = slides.length;

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

    return (
        <Flex
            w="full"
            p={5}
            alignItems="center"
            justifyContent="center"
        >
            <Flex w="full" 
                overflow="hidden" 
                pos="relative" 
                border="10px solid"
                borderColor="palette.500"
                borderRadius="10px"
                maxW="1300px"
            >
                <Flex h="calc(100% / (4/3))" w="full" {...carouselStyle}>
                    {slides.map((slide, sid) => (
                    <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
                        <SuspenseImage src={process.env.PUBLIC_URL+"/img/"+slide.img} boxSize="full" backgroundSize="cover" />
                    </Box>
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