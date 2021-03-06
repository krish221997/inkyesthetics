import {Box, Heading, Image, Text} from "grommet";
import React from "react";
import BlockImageWithHeaderAndSubHeader from "../../shared/Blocks/Block-image-with-header-and-subheader";
import {useMediaQuery} from "react-responsive";
import theme from "../../../styles/theme";

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
                    <Image src={"/images/ideation.svg"} height={"100px"}/>
                )
            }
        },
        text: {
            a: {
                render: () => (
                    <Heading level={2} margin={"0px"} style={{
                        textTransform: "uppercase",
                        fontFamily: "Poppins-Light",
                        fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xlarge : theme.fontSize.largeScreen.xlarge
                    }}>Ideation</Heading>
                )
            },
            b: {
                render: () => (
                    <Box width={"100%"} align={"center"} justify={"center"}>
                        <Box gap={"medium"} pad={{top: "xsmall"}} align={"center"} width={"80%"}>
                            <Text textAlign={"center"} style={{
                                fontFamily: "Poppins-Light",
                                fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.large : theme.fontSize.largeScreen.large,
                                lineHeight: "35px"
                            }}>Create a customisable catalogue, which would allow the customer to communicate design
                                preferences which she would then use to create the final designs using her own
                                techniques.
                            </Text>
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
                    style={{fontFamily: "Poppins-Light", fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall}}>Since
                    Sajnuben uses WhatsApp as her communication medium. She understands alphabets and numbers as
                    icons/designs. What if she communicates through code?
                </Text>
                <Text
                    textAlign={"center"}
                    style={{fontFamily: "Poppins-Light", fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall}}>The
                    alphabets represent products, the numbers represent designs (traditional/contemporary), and the
                    icons/emojis could be represent the colour palette
                </Text>
                <Text
                    textAlign={"center"}
                    style={{fontFamily: "Poppins-Light", fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall}}>Putting them together would create a code.
</Text>
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