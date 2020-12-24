import {Box, Image, Text} from "grommet";
import React from "react";
import HeaderSmall from "../components/HeaderSmall";
import Header from "../components/Header";
import {useMediaQuery} from "react-responsive";
import theme from "../styles/theme";
import Footer from "../components/Footer";
import BlockRenderImageAndContent from "../components/Block-render-image-and-content";
import Button from "@material-ui/core/Button";
import LinkComponent from "../components/shared/LinkComponent";

const AboutMe = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

    const isSmallScreenLaptop = useMediaQuery({
        query: '(max-device-width: 1650px)'
    });

    return (
        <>
            {isTabletOrMobileDevice ? <Box pad={{horizontal: "large", top: "large"}}>
                <HeaderSmall/>
            </Box> : <Box pad={{horizontal: "xlarge", top: "large"}}>
                <Header/>
            </Box>}

            <Box pad={{
                horizontal: isSmallScreenLaptop ? "xlarge" : "180px",
                top: isTabletOrMobileDevice ? theme.margins.smallScreen.xsmall : theme.margins.largeScreen.xsmall
            }}>
                <BlockRenderImageAndContent
                    properties={{
                        text: {
                            a: {
                                render: () => (
                                    <Box width={"100%"} justify={"center"} align={"center"}>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.large : theme.fontSize.largeScreen["medium-large"],
                                            fontFamily: "Poppins-Medium",
                                            lineHeight: isTabletOrMobileDevice ? "30px" : "40px"
                                        }}>
                                            What do you get when you mix graphic design, human interest, and
                                            (painstaking) meticulousness?

                                        </Text>
                                        <Box width={"100%"}>
                                            <Text margin={{top: "large"}}
                                                  textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                                fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.medium : theme.fontSize.largeScreen.medium,
                                                fontFamily: "Poppins-Medium"
                                            }}>
                                                A design practitioner who creates experiences through visuals.
                                            </Text>
                                        </Box>
                                        <Text margin={{top: "xlarge"}}
                                              textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall,
                                            fontFamily: "Poppins-Light"
                                        }}>
                                            Hi, I am Tanvi! Thorough my work in graphic design, I explore the impact
                                            of visual cues on human behaviour, and by extension, user experience. An
                                            eye for detail and scrupulous planning are strengths I bring to the
                                            table, along with a big heart and lots of tea sachets.

                                        </Text>
                                        <Box width={"100%"} margin={{top: "large"}}
                                             align={isTabletOrMobileDevice ? "center" : "start"}>
                                            <a href={"/images/resume.pdf"} target={"_black"}
                                               style={{color: "black", textTransform: "none", textDecoration: "none"}}>
                                                <Button variant={"outlined"} style={{textTransform: "none"}}
                                                        size={"large"}>
                                                    Resume
                                                </Button>
                                            </a>
                                        </Box>
                                    </Box>
                                )
                            }
                        },
                        images: {
                            a: {
                                render: () => (
                                    <img style={{maxWidth: "100%", maxHeight: "100%"}}
                                         src={"/images/about-me-final.jpg"}/>
                                )
                            }
                        }
                    }}/>
            </Box>

            <Box width={"100%"} gap={"large"} direction={"column"}
                 pad={{
                     horizontal: "xlarge",
                     top: isTabletOrMobileDevice ? theme.margins.smallScreen.small : theme.margins.largeScreen.small,
                     bottom: "large"
                 }}>
                <LinkComponent state={2}/>
                <Footer/>
            </Box>
        </>
    )

}

export default AboutMe;