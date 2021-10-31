import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    components: {
        Heading: {
            baseStyle: {
                fontFamily: "Balsamiq Sans",
                "-webkit-text-stroke": "3px var(--chakra-colors-palette-900)",
                color: "palette.800" 
            }
        },
        Text: {
            baseStyle: {
                fontFamily: "Poppins",
                "-webkit-text-stroke": "2px var(--chakra-colors-palette-900)",
                color: "palette.800" 
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