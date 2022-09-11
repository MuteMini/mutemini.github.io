import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
})

export const theme = extendTheme({ 
    breakpoints,
    components: {
        Heading: {
            baseStyle: {
                fontFamily: "'Balsamiq Sans', cursive",
                fontWeight: "400",
                fontStyle: "italic",
                "-webkit-text-stroke": {
                    base: "2px var(--chakra-colors-palette-900)",
                    md: "3px var(--chakra-colors-palette-900)"
                },
                color: "palette.800",
            },
            variants: {
                "light": {
                    color: "palette.600",
                    "-webkit-text-stroke": "3px var(--chakra-colors-palette-400)",
                },
                "light-sm": {
                    color: "palette.600",
                    "-webkit-text-stroke": "2px var(--chakra-colors-palette-400)",
                },
            }
        },
        Text: {
            baseStyle: {
                fontFamily: "Poppins",
                "-webkit-text-stroke": {
                    base: "1.5px var(--chakra-colors-palette-900)",
                    md: "2px var(--chakra-colors-palette-900)"
                },
                color: "palette.800" 
            },
            variants: {
                "light": {
                    color: "palette.600",
                    "-webkit-text-stroke": "2px var(--chakra-colors-palette-400)",
                },
                "light-thicker": {
                    color: "palette.600",
                    fontWeight: "500",
                    "-webkit-text-stroke": "1.5px var(--chakra-colors-palette-400)",
                },
                "light-sm": {
                    color: "palette.600",
                    "-webkit-text-stroke": "1px var(--chakra-colors-palette-400)",
                },
                "sm": {
                    "-webkit-text-stroke": "1.5px var(--chakra-colors-palette-900)",
                },
            }
        },
        Link: {
            baseStyle: {
                fontFamily: "Poppins",
                color: "palette.800",
                textDecoration: "none"
            }
        }
    },
    colors: {
        palette: {
            400: "#CB997E",
            500: "#DDBEA9",
            600: "#FFE8D6",
            700: "#B7B7A4",
            800: "#A5A58D",
            900: "#6B705C",
        }
    },
    styles: {
        global: {
            "html, body": {
                bg: "palette.600",
                color: "palette.600",
            }
        }
    }
})