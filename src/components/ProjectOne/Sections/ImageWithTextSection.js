import React from "react";
import {Box, Text} from "grommet";
import BlockHeadingWithText from "../Blocks/Block-heading-with-text";
import BlockImageWithText from "../Blocks/Block-image-with-text";

const data = [
    {
        image: "/images/communication.svg",
        text: <Text textAlign={"center"} style={{fontSize: "16px", fontFamily: "Poppins-Light"}}>Communication
            barrier.</Text>
    },
    {
        image: "/images/write.svg",
        text: <Text textAlign={"center"} style={{fontSize: "16px", fontFamily: "Poppins-Light"}}>Can't read and
            write.</Text>
    },
    {
        image: "/images/travel.svg",
        text: <Text textAlign={"center"} style={{fontSize: "16px", fontFamily: "Poppins-Light"}}>Can't travel at the
            moment.</Text>
    },
    {
        image: "/images/market.svg",
        text:
            <Box>
                <Text textAlign={"center"} style={{fontSize: "16px", fontFamily: "Poppins-Light"}}>Lack of awareness
                    about</Text>
                <Text textAlign={"center"} style={{fontSize: "16px", fontFamily: "Poppins-Light"}}>her in the
                    market.</Text>
            </Box>
    },
    {
        image: "/images/technology.svg",
        text:
            <Box>
                <Text textAlign={"center"} style={{fontSize: "16px", fontFamily: "Poppins-Light"}}>Lack of awareness about</Text>
                <Text textAlign={"center"} style={{fontSize: "16px", fontFamily: "Poppins-Light"}}>about technology.</Text>
            </Box>
    },
    {
        image: "/images/preferences.svg",
        text:
            <Box>
                <Text textAlign={"center"} style={{fontSize: "16px", fontFamily: "Poppins-Light"}}>Can't understand customers</Text>
                <Text textAlign={"center"} style={{fontSize: "16px", fontFamily: "Poppins-Light"}}>design preferences.</Text>
            </Box>
    },
];

const boxStyle = {
    display: "grid",
    "grid-template-columns": "repeat(auto-fit, minmax(500px, 1fr))",
    "grid-template-rows": "repeat(auto-fit, 1fr)",
    "grid-gap": "24px"
};

const ImageWithTextSection = () => {
    return (
        <Box width={"100%"} align={"center"} gap={"xlarge"}>
            <Text textAlign={"center"} style={{fontFamily: "Poppins-Medium", fontSize: "30px", textTransform: "uppercase"}}>Restrictions</Text>
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
    )
};

export default ImageWithTextSection;