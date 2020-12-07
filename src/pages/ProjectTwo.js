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
                    briefText={
                        "This application is aimed at young and upcoming musicians to empower them to\n" +
                        "                    discover and create music. They begin their journey AMPMATEUR by picking their instrument of choice\n" +
                        "                    from the given list and move on to understand notes of their own music as well as that of other\n" +
                        "                    artists and shape their tunes with precision to perfection. The app doubles as a community forum\n" +
                        "                    where budding artists share their craft, queries, and learnings. With the universalised\n" +
                        "                    accessibility to recorded songs, artists can avail information on any song, its genre, tuning\n" +
                        "                    setting, as well as chords. Since the application aims to not only tune but also help produce, it\n" +
                        "                    enables users to also record original music compositions."
                    }
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
                                        }}>Provide a
                        holistic learning experience for amateur musicians, from developing basic skills to exposure to
                        new music and other artists </Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>Amatuer musicians, here for the learning experience</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>Music enthusiasts, here for explorations and new music</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>Community
                                            artists, here for interactions and engagement</Text>
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
                                        }}>Tuning guide for string instruments</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>Discover new
                                            music by the app’s record and recognise feature</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>Learn music from
                                            other professional and amateur artists by picking a song and choosing your
                                            instrument for the
                                            corresponding chords</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>Share craft and
                                            queries with the rest of the musical community</Text>
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
                                        }}>Instrumentalists, here for tuning purposes </Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>Amatuer musicians, here for the learning experience</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>Music enthusiasts, here for explorations and new music</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>Community
                                            artists, here for interactions and engagement</Text>
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
                horizontal: "xlarge",
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
            <Box width={"100%"} direction={"column"}
                 pad={{
                     horizontal: "large",
                     top: isTabletOrMobileDevice ? theme.margins.smallScreen.small : theme.margins.largeScreen.small,
                     bottom: "large"
                 }}>
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