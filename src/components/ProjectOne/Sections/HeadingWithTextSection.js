import {Box, Text} from "grommet";
import React from "react";
import BlockHeadingWithText from "../Blocks/Block-heading-with-text";

const data = [
    {
        heading: "Role",
        subHeading:
            <Box>
                <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>
                Primary & Secondary Research, Field Experiments
            </Text>
                 <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>
                Interviews, Insight Generation, Early Ideation Testing &
            </Text>
                 <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>
                Prototyping.
            </Text>
            </Box>
    },
    {
        heading: "Tools",
        subHeading:
            <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>
                Adobe Illustrator, Photoshop, Indesign.
            </Text>
    },
    {
        heading: "Duration",
        subHeading:
            <Box>
                <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>
                February to April 2019 at Srishti School of Art, Design
            </Text>
                 <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>
                 and Technology.
            </Text>
            </Box>
    },
]


const boxStyle = {
    display: "grid",
    "grid-template-columns": "repeat(3, 1fr)",
    "grid-template-rows": "repeat(1, 1fr)",
    "grid-gap": "24px"
};


const HeadingWithTextSection = () => {
    return (
        <Box width={"100%"} align={"center"}>
            <Box wrap style={boxStyle} direction={"row"} as={"div"} width={"100%"}>
                {data.map((item, index) => {
                    return (
                        <Box key={index}>
                            <BlockHeadingWithText properties={{
                                text: {
                                    a: {
                                        value: item.heading
                                    },
                                    b: {
                                        render: () => item.subHeading
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

export default HeadingWithTextSection;