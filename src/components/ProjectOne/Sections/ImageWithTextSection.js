import React from "react";
import {Box, Heading, Text} from "grommet";
import {useMediaQuery} from "react-responsive";
import BlockImageWithText from "../../shared/Blocks/Block-image-with-text";
import theme from "../../../styles/theme";

const boxStyle = {
    display: "grid",
    "grid-template-columns": "repeat(3, minmax(200px, 1fr))",
    "grid-template-rows": "repeat(2, 1fr)",
    "grid-gap": "48px"
};

const smallBoxStyle = {
    display: "grid",
    "grid-template-columns": "repeat(auto-fit, minmax(120px, 1fr))",
    "grid-template-rows": "minmax(auto, 1fr)",
    "grid-gap": "48px"
};
const ImageWithTextSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

    const data = [
        {
            image: "/images/communication.svg",
            text: <Text textAlign={"center"} style={{
                fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall,
                fontFamily: "Poppins-Light"
            }}>Communication
                barrier</Text>
        },
        {
            image: "/images/write.svg",
            text: <Text textAlign={"center"} style={{
                fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall,
                fontFamily: "Poppins-Light"
            }}>Can't read and
                write</Text>
        },
        {
            image: "/images/travel.svg",
            text: <Text textAlign={"center"} style={{
                fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall,
                fontFamily: "Poppins-Light"
            }}>Can't travel at the
                moment</Text>
        },
        {
            image: "/images/market.svg",
            text:
                <Box>
                    <Text textAlign={"center"} style={{
                        fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall,
                        fontFamily: "Poppins-Light"
                    }}>Lack of awareness
                        about her in the market</Text>
                </Box>
        },
        {
            image: "/images/technology.svg",
            text:
                <Box>
                    <Text textAlign={"center"} style={{
                        fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall,
                        fontFamily: "Poppins-Light"
                    }}>Lack of awareness about technology</Text>
                </Box>
        },
        {
            image: "/images/preferences.svg",
            text:
                <Box>
                    <Text textAlign={"center"} style={{
                        fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall,
                        fontFamily: "Poppins-Light"
                    }}>Can't understand customers design preferences</Text>
                </Box>
        },
    ];

    const largeScreenView = (
        <Box width={"100%"} align={"center"} gap={"large"}>
            <Heading margin={"0px"} level={2} textAlign={"center"} style={{
                fontFamily: "Poppins-Light",
                fontSize: theme.fontSize.largeScreen.xlarge,
                textTransform: "uppercase"
            }}>Restrictions</Heading>
            <Box wrap style={boxStyle} direction={"row"} as={"div"} width={"100%"}>
                {data.map((item, index) => {
                    return (
                        <Box key={index}>
                            <BlockImageWithText properties={{
                                text: {
                                    a: {
                                        render: () => item.text
                                    }
                                },
                                images: {
                                    a: {
                                        url: item.image
                                    }
                                }
                            }}/>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    );


    const smallScreenView = (
        <Box width={"100%"} align={"center"} gap={"large"}>
            <Heading margin={"0px"} level={2} textAlign={"center"} style={{
                fontFamily: "Poppins-Light",
                fontSize: theme.fontSize.smallScreen.xlarge,
                textTransform: "uppercase"
            }}>Restrictions</Heading>
            <Box wrap style={smallBoxStyle} as={"div"} width={"100%"}>
                {data.map((item, index) => {
                    return (
                        <Box key={index}>
                            <BlockImageWithText properties={{
                                text: {
                                    a: {
                                        render: () => item.text
                                    }
                                },
                                images: {
                                    a: {
                                        url: item.image
                                    }
                                }
                            }}/>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    );

    return (
        isTabletOrMobileDevice ? smallScreenView : largeScreenView
    )
};

export default ImageWithTextSection;