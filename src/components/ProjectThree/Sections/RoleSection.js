import {Box, Text} from "grommet";
import React from "react";
import BlockHeadingWithText from "../../shared/Blocks/Block-heading-with-text";
import {useMediaQuery} from "react-responsive";

const boxStyle = {
    display: "grid",
    "grid-template-columns": "repeat(3, 1fr)",
    "grid-template-rows": "repeat(1, 1fr)",
    "grid-gap": "24px"
};


const smallBoxStyle = {
    display: "grid",
    "grid-template-columns": "repeat(1, 1fr)",
    "grid-template-rows": "minmax(auto, 1fr)",
    "grid-gap": "24px"
};

const RoleSection = ({}) => {
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    })

    const sectionData = [
    {
        heading: "Role",
        subHeading:
                <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: isTabletOrMobileDevice ? "11px" : "16px"}}>
                Primary & Secondary Research, Field Experiments Interviews, Insight Generation, Early Ideation Testing & Prototyping</Text>
    },
    {
        heading: "Tools",
        subHeading:
            <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: isTabletOrMobileDevice ? "11px" : "16px"}}>
                Adobe Illustrator, Photoshop</Text>
    },
    {
        heading: "Duration",
        subHeading:
                <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: isTabletOrMobileDevice ? "11px" : "16px"}}>
                July to October 2018 at Shristi School of Art, Design and Technology</Text>
    },
];

    const smallScreenView = (
        <Box wrap width={"100%"} direction={"row"} as={"div"} style={smallBoxStyle}>
                {sectionData.map((item, index) => {
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
    );

    const largeScreenView = (
        <Box wrap style={boxStyle} direction={"row"} as={"div"} width={"100%"}>
                {sectionData.map((item, index) => {
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
    )

    return (
        <Box width={"100%"} align={"center"}>
            {isTabletOrMobileDevice ? smallScreenView : largeScreenView}
        </Box>
    )
};

export default RoleSection