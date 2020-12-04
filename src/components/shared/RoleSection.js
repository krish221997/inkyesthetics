import {Box, Text} from "grommet";
import React from "react";
import {useMediaQuery} from "react-responsive";
import theme from "../../styles/theme";
import BlockHeadingWithText from "./Blocks/Block-heading-with-text";

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

const RoleSection = ({role = "Role", tools = "Tools", duration = "Duration"}) => {
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    })

    const sectionData = [
        {
            heading: "Role",
            subHeading:
                <Text textAlign={"center"} style={{
                    fontFamily: "Poppins-Light",
                    fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                }}>
                    {role}</Text>
        },
        {
            heading: "Tools",
            subHeading:
                <Text textAlign={"center"} style={{
                    fontFamily: "Poppins-Light",
                    fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                }}>
                    {tools}</Text>
        },
        {
            heading: "Duration",
            subHeading:
                <Text textAlign={"center"} style={{
                    fontFamily: "Poppins-Light",
                    fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                }}>
                    {duration}</Text>
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