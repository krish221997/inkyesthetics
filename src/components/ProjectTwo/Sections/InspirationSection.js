import {Box, Heading, Image, Text} from "grommet";
import React from "react";
import BlockImageWithHeadingAndText from "../../shared/Blocks/Block-image-with-heading-and-text";
import {useMediaQuery} from "react-responsive";

const data = [
    {
        image: "/images/shaazam.svg",
        heading: "Guitar Tuna",
        subHeading: "understanding chords"
    },
    {
        image: "/images/sound.svg",
        heading: "Sound Cloud",
        subHeading: "share your music"
    },
    {
        image: "/images/shaazam.svg",
        heading: "Shaazam",
        subHeading: "recognize your track and get information"
    }
];

const boxStyle = {
    display: "grid",
    "grid-template-columns": "repeat(3, 1fr)",
    "grid-template-rows": "repeat(1, 1fr)",
    "grid-row-gap": "24px",
    "grid-column-gap": "24px"
};


const smallBoxStyle = {
    display: "grid",
    "grid-template-columns": "repeat(1, 1fr)",
    "grid-template-rows": "repeat(3, 1fr)",
    "grid-row-gap": "48px",
    "grid-column-gap": "48px"
};

const InspirationSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1100px)'
    });

    return (
        <Box align={"center"} justify={"center"} width={"100%"} gap={"large"}>
            <Heading level={2} margin={"0px"} style={{
                textTransform: "uppercase",
                fontFamily: "Poppins-Light",
                fontSize: isTabletOrMobileDevice ? "20px" : "30px"
            }}>Inspiration</Heading>
            <Box as="div" style={isTabletOrMobileDevice ? smallBoxStyle : boxStyle} direction="row" wrap
                 width={isTabletOrMobileDevice ? "100%" : "85%"} align={"center"} justify={"center"}>
                {
                    data.map((item, key) => (
                        <div key={key}>
                            <BlockImageWithHeadingAndText properties={{
                                images: {
                                    a: {
                                        render: () => (
                                            <Box>
                                                <Image height={isTabletOrMobileDevice ? "130px" : ""} src={item.image}/>
                                            </Box>
                                        )
                                    }
                                },
                                text: {
                                    a: {
                                        render: () => (
                                            <Text textAlign={"center"} margin={{top: isTabletOrMobileDevice ? "small" : "medium"}} style={{
                                                fontSize: isTabletOrMobileDevice ? "10px" : "14px",
                                                fontFamily: "Poppins-Regular"
                                            }}>{item.heading}</Text>
                                        )
                                    },
                                    b: {
                                        render: () => (
                                            <Text  textAlign={"center"} margin={{top: isTabletOrMobileDevice ? "-5px" : ""}} style={{
                                                fontSize: isTabletOrMobileDevice ? "10px" : "14px",
                                                fontFamily: "Poppins-Light"
                                            }}>{item.subHeading}</Text>
                                        )
                                    }
                                }
                            }}/>
                        </div>
                    ))
                }
            </Box>
        </Box>
    )
};

export default InspirationSection;