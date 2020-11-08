import {Box, Heading, Image, Text} from "grommet";
import React from "react";
import BlockImageWithHeaderAndSubHeader from "../../shared/Blocks/Block-image-with-header-and-subheader";
import {useMediaQuery} from "react-responsive";


const IdeationSection = () => {

    const boxStyle = {
    display: "grid",
    "grid-template-columns": "repeat(1, minmax(164px, auto))",
    "grid-template-rows": "repeat(1, 1fr)",
    "grid-gap": "0px",
};

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

    const properties = {
    images: {
        a: {
            render: () => (
                <Image src={"/images/ideation.svg"} height={"150px"}/>
            )
        }
    },
    text: {
        a: {
            render: () => (
                <Heading level={2} margin={"0px"} style={{
                    textTransform: "uppercase",
                    fontFamily: "Poppins-Light",
                    fontSize: isTabletOrMobileDevice ? "20px" : "30px"
                }}>Ideation</Heading>
            )
        },
        b: {
            render: () => (
                <Box width={"100%"} align={"center"} justify={"center"}>
                    <Box gap={"medium"} pad={{top: "xsmall"}} align={"center"} width={"80%"}>
                    <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: isTabletOrMobileDevice ? "16px" : "24px"}}>Create a
                        customisable catalog, which would let the customer tell her their design preferences and she can
                        design around it, using her design style.</Text>
                </Box>
                </Box>
            )
        }
    }
};


    return (
        <Box width={"100%"} align={"center"} justify={"center"}>
            <Box>
                <BlockImageWithHeaderAndSubHeader properties={properties}/>
            </Box>
            <Box margin={{top: "large"}} gap={"xsmall"}>
                <Text
                    textAlign={"center"}
                    style={{fontFamily: "Poppins-Light", fontSize: isTabletOrMobileDevice ? "11px" : "16px"}}>Since Sajnuben uses Whatsapp as her
                    communication medium and understands alphabets and numbers as icons/designs, what if she
                    communicates through code?</Text>
                <Text
                    textAlign={"center"}
                    style={{fontFamily: "Poppins-Light", fontSize: isTabletOrMobileDevice ? "11px" : "16px"}}>The alphabets represent products,
                    the numbers represent designs (traditional/contemporary), and the icons/emojis could be
                    represent the color palette</Text>
                <Text
                    textAlign={"center"}
                    style={{fontFamily: "Poppins-Light", fontSize: isTabletOrMobileDevice ? "11px" : "16px"}}>Putting them together would create a
                    code.</Text>
            </Box>
            <Box as={"div"} wrap style={boxStyle} margin={{top: "medium"}}>
                <Box>
                    <Image src={"/images/catalog.svg"}/>
                </Box>
            </Box>
        </Box>
    )
};

export default IdeationSection;