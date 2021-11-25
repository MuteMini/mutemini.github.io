import { Flex, 
    Box, 
    Text,
    Image } from "@chakra-ui/react"
import { useState } from 'react'
import imgCache from '../imgCache'

function Carousel(){
    const arrowStyles = {
        cursor: "pointer",
        pos: "absolute",
        top: "50%",
        w: "auto",
        mt: "-30px",
        p: "16px",
        color: "white",
        fontWeight: "bold",
        fontSize: {base: "20px", md: "30px", lg: "50px"},
        transition: "0.6s ease",
        borderRadius: "3px",
        userSelect: "none",
        _hover: {
            bg: "rgba(0, 0, 0, 0.5)",
        },
    };

    const slides = [
        { img: '/img/carousel1.jpg', },
        { img: '/img/carousel2.jpg', },
        { img: '/img/carousel3.jpg', },
        { img: '/img/carousel4.jpg', },
        { img: '/img/carousel5.jpg', },
        { img: '/img/carousel6.jpg', },
        { img: '/img/carousel7.jpg', },
        { img: '/img/carousel8.jpg', },
        { img: '/img/carousel9.jpg', }
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

    slides.forEach((slide) => imgCache.read(process.env.PUBLIC_URL+slide.img));

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
                maxW="1100px"
            >
                <Flex h="calc(100% / (4/3))" w="full" {...carouselStyle}>
                    {slides.map((slide, sid) => (
                    <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
                        <Image src={process.env.PUBLIC_URL+slide.img} boxSize="full" backgroundSize="cover" />
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