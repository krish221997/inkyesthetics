import {Box, Heading, Image, Text} from "grommet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, {useEffect} from "react";
import ImageSection from "../components/shared/ImageSection";
import InspirationSection from "../components/ProjectTwo/Sections/InspirationSection";
import PersonaSection from "../components/ProjectTwo/Sections/PersonaSection";
import UserFlowSection from "../components/ProjectTwo/Sections/UserFlowSection";
import SitemapSection from "../components/ProjectTwo/Sections/SitemapSection";
import PrototypeSection from "../components/ProjectTwo/Sections/Prototype";
import {useMediaQuery} from "react-responsive";
import HeaderSmall from "../components/HeaderSmall";
import {connect} from "react-redux";
import ProjectSection from "../components/shared/ProjectSection";
import theme from "../styles/theme";
import BriefSection from "../components/shared/BriefSection";
import RoleSection from "../components/shared/RoleSection";
import BlockRenderImageHeaderParagraph from "../components/shared/Block-render-image-header-paragraph";
import {content} from "../content";
import LinkComponent from "../components/shared/LinkComponent";

const ProjectTwo = ({setNextAndPreviousProjectFlow}) => {

    useEffect(() => {
        setNextAndPreviousProjectFlow({currentProject: 1});
    }, []);

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

    const isSmallScreenCoverImage = useMediaQuery({
        query: '(max-device-width: 375px)'
    });

    return (

        <>
            {isTabletOrMobileDevice ? <Box pad={{horizontal: "large", vertical: "large"}}>
                <HeaderSmall/>
            </Box> : <Box pad={{horizontal: "xlarge", vertical: "large"}}>
                <Header/>
            </Box>}
            {/*<div style={{margin: "0 auto"}}>*/}
            {/*    <ImageSection height={953} width={1920} image={"url(/images/cover_cc.svg)"} type={"contain"}/>*/}
            {/*</div>*/}
            {isSmallScreenCoverImage ? <div style={{margin: "0 auto"}}>
                <ImageSection height={315} width={375} image={"url(/images/amp-cover-small.jpg)"} type={"contain"}/>
            </div> : <div style={{margin: "0 auto"}}>
                <ImageSection height={953} width={1920} image={"url(/images/amp-cover.jpg)"} type={"contain"}/>
            </div>}
            <Box pad={{
                horizontal: "xlarge",
                top: isTabletOrMobileDevice ? theme.margins.smallScreen.small : theme.margins.largeScreen.small
            }}>
                <BriefSection
                    heading={"Ampmateur, Tune to produce!"}
                    briefText={content.p2.brief}
                />
            </Box>
            <Box pad={{
                horizontal: "xlarge",
                top: isTabletOrMobileDevice ? theme.margins.smallScreen.small : theme.margins.largeScreen.small
            }}>
                <RoleSection
                    role={"Primary & Secondary Research, Field Experiments Interviews, Insight Generation, Early Ideation Testing & Prototyping"}
                    tools={"Adobe Illustrator, Photoshop, Indesign"}
                    duration={"June 2020 at California Institute of the Art"}
                />
            </Box>
            <Box pad={{
                horizontal: "xlarge",
                top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large
            }}>
                <BlockRenderImageHeaderParagraph
                    properties={{
                        text: {
                            a: {
                                render: () => (
                                    <Heading margin={"0px"} level={2} style={{
                                        textTransform: "uppercase", fontFamily: "Poppins-Light",
                                        fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xlarge : theme.fontSize.largeScreen.xlarge
                                    }}>Aim</Heading>
                                )
                            },
                            b: {
                                render: () => (
                                    <Box gap={"medium"}>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>{content.p2.aim.a1}</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>{content.p2.aim.a2}</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>{content.p2.aim.a3}</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>{content.p2.aim.a4}</Text>
                                    </Box>
                                )
                            }
                        },
                        images: {
                            a: {
                                render: () => (
                                    <Image src={"/images/goal.svg"}
                                           height={isTabletOrMobileDevice ? "100px" : ""}></Image>
                                )
                            }
                        }
                    }}
                />
            </Box>
            <Box pad={{
                horizontal: "xlarge",
                top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large
            }}>
                <BlockRenderImageHeaderParagraph
                    properties={{
                        text: {
                            a: {
                                render: () => (
                                    <Heading margin={"0px"} level={2} style={{
                                        textTransform: "uppercase", fontFamily: "Poppins-Light",
                                        fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xlarge : theme.fontSize.largeScreen.xlarge
                                    }}>Functions</Heading>
                                )
                            },
                            b: {
                                render: () => (
                                    <Box gap={"medium"}>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>{content.p2.functions.f1}</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>{content.p2.functions.f2}</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>{content.p2.functions.f3}</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>{content.p2.functions.f4}</Text>
                                    </Box>
                                )
                            }
                        },
                        images: {
                            a: {
                                render: () => (
                                    <Image src={"/images/functions.svg"}
                                           height={isTabletOrMobileDevice ? "100px" : ""}></Image>
                                )
                            }
                        }
                    }}
                />
            </Box>
            <Box pad={{
                horizontal: "xlarge",
                top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large
            }}>
                <InspirationSection/>
            </Box>
            <Box pad={{
                horizontal: "xlarge",
                top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large
            }}>
                <BlockRenderImageHeaderParagraph
                    properties={{
                        text: {
                            a: {
                                render: () => (
                                    <Heading margin={"0px"} level={2} style={{
                                        textTransform: "uppercase", fontFamily: "Poppins-Light",
                                        fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xlarge : theme.fontSize.largeScreen.xlarge
                                    }}>Target Audience</Heading>
                                )
                            },
                            b: {
                                render: () => (
                                    <Box gap={"medium"}>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>{content.p2.target.t1}</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>{content.p2.target.t2}</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>{content.p2.target.t3}</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>{content.p2.target.t4}</Text>
                                    </Box>
                                )
                            }
                        },
                        images: {
                            a: {
                                render: () => (
                                    <Image src={"/images/target.svg"}
                                           height={isTabletOrMobileDevice ? "100px" : ""}></Image>
                                )
                            }
                        }
                    }}
                />
            </Box>
            <Box pad={{
                horizontal: "xlarge",
                top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large
            }}>
                <PersonaSection/>
            </Box>
            <Box pad={{
                horizontal: "xlarge",
                top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large
            }}>
                <UserFlowSection/>
            </Box>
            <Box pad={{
                horizontal: "xlarge",
                top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large
            }}>
                <SitemapSection/>
            </Box>
            <Box pad={{
                top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large
            }}>
                <PrototypeSection/>
            </Box>
            <Box pad={{
                horizontal: "xlarge",
                top: isTabletOrMobileDevice ? theme.margins.smallScreen.medium : theme.margins.largeScreen.medium
            }}>
                <ProjectSection/>
            </Box>
             <Box width={"100%"} gap={"medium"} direction={"column"}
                 pad={{
                     horizontal: "xlarge",
                     top: isTabletOrMobileDevice ? theme.margins.smallScreen.small : theme.margins.largeScreen.small,
                     bottom: "large"
                 }}>
                <LinkComponent/>
                <Footer/>
            </Box>
        </>
    )

};

const mapStateToProps = (state) => ({});

const mapDispatcherToProps = (dispatch) => ({
    setNextAndPreviousProjectFlow: dispatch.flow.setNextAndPreviousProject
});

export default connect(mapStateToProps, mapDispatcherToProps)(ProjectTwo);