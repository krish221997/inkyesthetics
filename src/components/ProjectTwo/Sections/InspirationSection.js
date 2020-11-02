import {Box, Image, Text} from "grommet";
import React from "react";
import BlockImageWithHeadingAndText from "../../shared/Blocks/Block-image-with-heading-and-text";

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
    "grid-template-columns": "repeat(auto-fit, minmax(200px, 1fr))",
    "grid-template-rows": "repeat(1, 1fr)",
    "grid-row-gap": "24px",
    "grid-column-gap": "24px"
};

const InspirationSection = () => {
    return (
        <Box align={"center"} justify={"center"} width={"100%"} gap={"large"}>
            <Text
                style={{fontFamily: "Poppins-Medium", fontSize: "30px", textTransform: "uppercase"}}>Inspiration
            </Text>
            <Box as="div" style={boxStyle} direction="row" wrap width={"70%"} align={"center"} justify={"center"}>
                {
                    data.map((item, key) => (
                        <div key={key}>
                            <BlockImageWithHeadingAndText properties={{
                                images: {
                                    a: {
                                        render: () => (
                                            <Box>
                                                <Image src={item.image}/>
                                            </Box>
                                        )
                                    }
                                },
                                text: {
                                    a: {
                                        render: () => (
                                            <Text textAlign={"center"} margin={{top: "medium"}} style={{fontSize: "14px", fontFamily: "Poppins-Regular"}}>{item.heading}</Text>
                                        )
                                    },
                                    b: {
                                        render: () => (
                                            <Text textAlign={"center"} style={{fontSize: "14px", fontFamily: "Poppins-Light"}}>{item.subHeading}</Text>
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