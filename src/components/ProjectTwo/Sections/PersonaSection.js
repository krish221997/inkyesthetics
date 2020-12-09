import React from "react";
import {Box, Image, Text} from "grommet";
import BlockImageWithHeadingAndText from "../../shared/Blocks/Block-image-with-heading-and-text";
import {useMediaQuery} from "react-responsive";
import theme from "../../../styles/theme";
import {content} from "../../../content";

const PersonaSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    })

    const data = {
        image: <Image src={"/images/face.svg"}/>,
        heading: <Text textAlign={"center"} margin={{top: "medium"}}
                       style={{
                           fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.small : theme.fontSize.largeScreen.small,
                           fontFamily: "Poppins-Medium"
                       }}>Persona</Text>,
        subHeading:
            <Box align={"center"} justify={"center"} wrap width={"800px"}>
                <Text textAlign={"center"} margin={{top: isTabletOrMobileDevice ? "small" : "medium"}}
                      style={{
                          fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall,
                          fontFamily: "Poppins-Light"
                      }}>{content.p2.persona.p1}</Text>
                <Text textAlign={"center"} margin={{top: isTabletOrMobileDevice ? "small" : "medium"}}
                      style={{
                          fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall,
                          fontFamily: "Poppins-Light"
                      }}>{content.p2.persona.p2}</Text>
                <Text textAlign={"center"} margin={{top: isTabletOrMobileDevice ? "small" : "medium"}}
                      style={{
                          fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall,
                          fontFamily: "Poppins-Light"
                      }}>{content.p2.persona.p3}</Text>
                <Text textAlign={"center"} margin={{top: isTabletOrMobileDevice ? "small" : "medium"}}
                      style={{
                          fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall,
                          fontFamily: "Poppins-Light"
                      }}>{content.p2.persona.p4}</Text>
                <Text textAlign={"center"} margin={{top: isTabletOrMobileDevice ? "small" : "medium"}}
                      style={{
                          fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall,
                          fontFamily: "Poppins-Light"
                      }}>{content.p2.persona.p5}</Text>
                <Text textAlign={"center"} margin={{top: isTabletOrMobileDevice ? "small" : "medium"}}
                      style={{
                          fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall,
                          fontFamily: "Poppins-Light"
                      }}>{content.p2.persona.p6}</Text>
            </Box>
    }


    return (
        <BlockImageWithHeadingAndText properties={{
            images: {
                a: {
                    render: () => data.image
                }
            },
            text: {
                a: {
                    render: () => data.heading
                },
                b: {
                    render: () => data.subHeading
                }
            }
        }}/>
    )
};

export default PersonaSection;