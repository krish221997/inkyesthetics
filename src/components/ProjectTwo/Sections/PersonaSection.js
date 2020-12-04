import React from "react";
import {Box, Image, Text} from "grommet";
import BlockImageWithHeadingAndText from "../../shared/Blocks/Block-image-with-heading-and-text";
import {useMediaQuery} from "react-responsive";
import theme from "../../../styles/theme";

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
                      }}>Shreyans
                    is a 24 year old Industrial Designer.</Text>
                <Text textAlign={"center"} margin={{top: isTabletOrMobileDevice ? "small" : "medium"}}
                      style={{
                          fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall,
                          fontFamily: "Poppins-Light"
                      }}>He is
                    extremely shy and likes to keep to himself.</Text>
                <Text textAlign={"center"} margin={{top: isTabletOrMobileDevice ? "small" : "medium"}}
                      style={{
                          fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall,
                          fontFamily: "Poppins-Light"
                      }}>He likes
                    exploring new things in his free time.</Text>
                <Text textAlign={"center"} margin={{top: isTabletOrMobileDevice ? "small" : "medium"}}
                      style={{
                          fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall,
                          fontFamily: "Poppins-Light"
                      }}>After a
                    long day of work he looks forward to his workout and spending time by himself.</Text>
                <Text textAlign={"center"} margin={{top: isTabletOrMobileDevice ? "small" : "medium"}}
                      style={{
                          fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall,
                          fontFamily: "Poppins-Light"
                      }}>He has
                    recently started to learn the ukulele that his sister has lying at home.</Text>
                <Text textAlign={"center"} margin={{top: isTabletOrMobileDevice ? "small" : "medium"}}
                      style={{
                          fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall,
                          fontFamily: "Poppins-Light"
                      }}>He
                    currently learns by watching videos and trying out the chords himself.</Text>
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