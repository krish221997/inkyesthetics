import {Box, Text} from "grommet";
import React, {useState} from "react";
import theme from "../../styles/theme";
import {useMediaQuery} from "react-responsive";

const links = [
    {
        name: "Unpacking My Work",
        showLine: true,
        to: "/project-list",
        target: false
    },
    {
        name: "Issues Published",
        showLine: false,
        to: "/brands",
        target: false
    },
    {
        name: "A Little Bit About Me",
        showLine: true,
        to: "/about-me",
        target: false
    },
    {
        name: "Did It For the Gram",
        showLine: true,
        to: "https://www.instagram.com/inkyesthetics/",
        target: "_blank"
    }
]

const boxStyle = {
    display: "grid",
    "grid-template-columns": "repeat(1, minmax(200px, 1fr))",
    "grid-template-rows": "repeat(1, auto)",
    "grid-gap": "48px"
};

const LinkComponent = ({state = 0}) => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1075px)'
    });

    return (
        <Box width={"100%"} align={"center"} justify={"between"} direction={"row"} wrap>
            {
                links.map((link, index) => {
                    return (
                        isTabletOrMobileDevice ?
                            <Text weight={"bold"} color={"black"} textAlign={"center"}
                                  style={{
                                      fontFamily: index === state ? "Poppins-Medium" : "Poppins-Light",
                                      fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.small : theme.fontSize.largeScreen.small
                                  }}><a href={link.to} style={{textDecoration: "none", color: "black"}}
                                        target={link.target ? "_blank" : ""}>
                                {link.name}
                            </a></Text> : <Box direction={"row"} width={isTabletOrMobileDevice ? "50%" : "25%"}>
                                <Box width={"100%"} align={"center"}>
                                    <Text weight={"bold"} color={"black"} textAlign={"center"}
                                          style={{
                                              fontFamily: index === state ? "Poppins-Medium" : "Poppins-Light",
                                              fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.medium : theme.fontSize.largeScreen.medium
                                          }}><a href={link.to} style={{textDecoration: "none", color: "black"}}
                                                target={link.target ? "_blank" : ""}>
                                        {link.name}
                                    </a></Text>
                                </Box>
                                {link.showLine && <Box align={"center"} justify={"center"} margin={{left: "auto"}}>
                                    |
                                </Box>}
                            </Box>
                    )
                })
            }
        </Box>
    )

};

export default LinkComponent;