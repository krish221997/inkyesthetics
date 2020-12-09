import {Box, Heading, Image, Text} from "grommet";
import React from "react";
import {useMediaQuery} from "react-responsive";
import theme from "../../../styles/theme";
import BlockRenderImageHeaderParagraph from "../../shared/Block-render-image-header-paragraph";
import {content} from "../../../content";


const LargeScreenSection = ({isTabletOrMobileDevice}) => (
    <Box width={"100%"} align={"center"} justify={"center"}>
        <Heading margin={{bottom: "large", horizontal: "0px", top: "0px"}} level={2}
                 style={{
                     fontFamily: "Poppins-Light",
                     fontSize: theme.fontSize.largeScreen.xlarge,
                     textTransform: "uppercase"
                 }}>Setting the
            Context</Heading>
        <Box direction={"row"} width={"100%"}>
            <Box wrap={true} align={"start"} justify={"center"} width={"50%"}>
                <Box align={"start"} justify={"center"} width={"80%"}>
                    <BlockRenderImageHeaderParagraph
                        properties={{
                            text: {
                                a: {
                                    render: () => (
                                        <Heading margin={"0px"} level={2} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xlarge : theme.fontSize.largeScreen.xlarge
                                        }}>Sajnuben Pachanbhai Rabari</Heading>
                                    )
                                },
                                b: {
                                    render: () => (
                                        <Box gap={"medium"}>
                                            <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                                fontFamily: "Poppins-Light",
                                                fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                            }}>{content.p1.sajnuben}</Text>
                                        </Box>
                                    )
                                }
                            },
                            images: {
                                a: {
                                    render: () => (
                                        <Image src={"/images/sajnu.svg"}
                                               height={isTabletOrMobileDevice ? "100px" : ""}></Image>
                                    )
                                }
                            }
                        }}
                    />
                </Box>
            </Box>
            <Box wrap={true} align={"end"} justify={"center"} width={"50%"}>
                <Box align={"start"} justify={"center"} width={"80%"}>
                    <BlockRenderImageHeaderParagraph
                        properties={{
                            text: {
                                a: {
                                    render: () => (
                                        <Heading margin={"0px"} level={2} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xlarge : theme.fontSize.largeScreen.xlarge
                                        }}>Judy Frater</Heading>
                                    )
                                },
                                b: {
                                    render: () => (
                                        <Box gap={"medium"}>
                                            <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                                fontFamily: "Poppins-Light",
                                                fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                            }}>{content.p1.judy}</Text>
                                        </Box>
                                    )
                                }
                            },
                            images: {
                                a: {
                                    render: () => (
                                        <Image src={"/images/judy.svg"}
                                               height={isTabletOrMobileDevice ? "100px" : ""}></Image>
                                    )
                                }
                            }
                        }}
                    />
                </Box>
            </Box>
        </Box>
    </Box>
);

const SmallScreenSection = ({isTabletOrMobileDevice}) => (
    <Box width={"100%"} align={"center"} justify={"center"}>
        <Heading margin={{bottom: "20px", horizontal: "0px", top: "0px"}} level={2}
                 style={{
                     fontFamily: "Poppins-Light",
                     fontSize: theme.fontSize.smallScreen.xlarge,
                     textTransform: "uppercase"
                 }}>Setting the
            Context
        </Heading>
        <Box margin={{top: "large"}}>
             <BlockRenderImageHeaderParagraph
                        properties={{
                            text: {
                                a: {
                                    render: () => (
                                        <Heading margin={"0px"} textAlign={"center"} level={2} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xlarge : theme.fontSize.largeScreen.xlarge
                                        }}>Sajnuben Pachanbhai Rabari</Heading>
                                    )
                                },
                                b: {
                                    render: () => (
                                        <Box gap={"medium"}>
                                            <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                                fontFamily: "Poppins-Light",
                                                fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                            }}>{content.p1.sajnuben}</Text>
                                        </Box>
                                    )
                                }
                            },
                            images: {
                                a: {
                                    render: () => (
                                        <Image src={"/images/sajnu.svg"}
                                               height={isTabletOrMobileDevice ? "100px" : ""}></Image>
                                    )
                                }
                            }
                        }}
                    />
        </Box>
        <Box margin={{top: "large"}}>
            <BlockRenderImageHeaderParagraph
                        properties={{
                            text: {
                                a: {
                                    render: () => (
                                        <Heading margin={"0px"} level={2} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xlarge : theme.fontSize.largeScreen.xlarge
                                        }}>Judy Frater</Heading>
                                    )
                                },
                                b: {
                                    render: () => (
                                        <Box gap={"medium"}>
                                            <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                                fontFamily: "Poppins-Light",
                                                fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                            }}>{content.p1.judy}</Text>
                                        </Box>
                                    )
                                }
                            },
                            images: {
                                a: {
                                    render: () => (
                                        <Image src={"/images/judy.svg"}
                                               height={isTabletOrMobileDevice ? "100px" : ""}></Image>
                                    )
                                }
                            }
                        }}
                    />
        </Box>
    </Box>
);

const ContextSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1100px)'
    });

    return (

        isTabletOrMobileDevice ? <SmallScreenSection isTabletOrMobileDevice={isTabletOrMobileDevice}/> :
            <LargeScreenSection isTabletOrMobileDevice={isTabletOrMobileDevice}/>

    )
};

export default ContextSection;