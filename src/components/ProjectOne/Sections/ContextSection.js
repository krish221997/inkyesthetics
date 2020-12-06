import {Box, Heading, Image, Text} from "grommet";
import React from "react";
import {useMediaQuery} from "react-responsive";
import theme from "../../../styles/theme";
import BlockRenderImageHeaderParagraph from "../../shared/Block-render-image-header-paragraph";


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
                                            }}>Sajnuben lives in
                                                a village called Kukadsar. She kept migrating until 2009. After which
                                                she settled down and
                                                joined Kala Raksha, a school for artisans. She makes products like bags,
                                                jewelry, quilts, pillow
                                                covers. She does everything from developing the product and finishing.
                                                Garmenting is something
                                                which she avoids because of the unavailability of tailors.</Text>
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
                                            }}>Judy Frater is
                        Founder Director of Somaiya Kala Vidya, an institute of education for artisans. She was born in
                        the United States and holds Master’s degrees from the University of Washington and the
                        University of Minnesota.
                        Wishing to do something to preserve traditional Indian craft rather than just study it, in 1993
                        Judy Frater, together with local embroiders, founded the Kala Raksha Trust.</Text>
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
                                            }}>Sajnuben lives in
                                                a village called Kukadsar. She kept migrating until 2009. After which
                                                she settled down and
                                                joined Kala Raksha, a school for artisans. She makes products like bags,
                                                jewelry, quilts, pillow
                                                covers. She does everything from developing the product and finishing.
                                                Garmenting is something
                                                which she avoids because of the unavailability of tailors.</Text>
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
                                            }}>Judy Frater is
                        Founder Director of Somaiya Kala Vidya, an institute of education for artisans. She was born in
                        the United States and holds Master’s degrees from the University of Washington and the
                        University of Minnesota.
                        Wishing to do something to preserve traditional Indian craft rather than just study it, in 1993
                        Judy Frater, together with local embroiders, founded the Kala Raksha Trust.</Text>
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