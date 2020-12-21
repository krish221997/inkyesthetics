import {Box, Heading, Image, Text} from "grommet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, {useEffect} from "react";
import ImageSection from "../components/shared/ImageSection";
import ImageWithTextSection from "../components/ProjectOne/Sections/ImageWithTextSection";
import AffinitySection from "../components/ProjectOne/Sections/AffinitySection";
import HowMightWeSection from "../components/ProjectOne/Sections/HowMightWeSection";
import UserJourneySection from "../components/ProjectOne/Sections/UserJourneySection";
import IdeationSection from "../components/ProjectOne/Sections/IdeationSection";
import {useMediaQuery} from "react-responsive";
import AffinitySectionSmall from "../components/ProjectOne/Sections/AffinitySectionSmall";
import UserJourneySectionSmall from "../components/ProjectOne/Sections/UserJourneySectionSmall";
import HeaderSmall from "../components/HeaderSmall";
import ProjectSection from "../components/shared/ProjectSection";
import {connect} from "react-redux";
import ContextSection from "../components/ProjectOne/Sections/ContextSection";
import ContextTextSection from "../components/ProjectOne/Sections/ContextTextSection";
import theme from "../styles/theme";
import BriefSection from "../components/shared/BriefSection";
import RoleSection from "../components/shared/RoleSection";
import BlockRenderImageHeaderParagraph from "../components/shared/Block-render-image-header-paragraph";
import ColorPalleteSection from "../components/ProjectOne/Sections/ColorPalette";
import FontSection from "../components/ProjectOne/Sections/FontSection";
import ExperienceSection from "../components/ProjectOne/Sections/ExperienceSection";
import FinalOutputSection from "../components/ProjectOne/Sections/FInalOutputSection";
import {content} from "../content";
import LinkComponent from "../components/shared/LinkComponent";

const ProjectOne = ({setNextAndPreviousProjectFlow}) => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

    const isSmallScreenCoverImage = useMediaQuery({
        query: '(max-device-width: 378px)'
    });

    useEffect(() => {
        setNextAndPreviousProjectFlow({currentProject: 0});
    }, []);

    return (

        <>
            {isTabletOrMobileDevice ? <Box pad={{horizontal: "large", vertical: "large"}}>
                <HeaderSmall/>
            </Box> : <Box pad={{horizontal: "xlarge", vertical: "large"}}>
                <Header/>
            </Box>}

            {isSmallScreenCoverImage ? <div style={{margin: "0 auto"}}>
                <ImageSection height={375} width={375} image={"url(/images/cc-cover-small.png)"} type={"contain"}/>
            </div> : <div style={{margin: "0 auto"}}>
                <ImageSection height={910} width={1920} image={"url(/images/cc-cover.jpg)"} type={"contain"}/>
            </div>}
            <Box pad={{
                horizontal: "xlarge",
                top: isTabletOrMobileDevice ? theme.margins.smallScreen.small : theme.margins.largeScreen.small
            }}>
                <BriefSection
                    heading={"Creative Collaborations"}
                    briefText={content.p1.brief}
                />
            </Box>
            <Box pad={{
                horizontal: "xlarge",
                top: isTabletOrMobileDevice ? theme.margins.smallScreen.small : theme.margins.largeScreen.small
            }}>
                <RoleSection
                    role={"Primary & Secondary Research, Field Experiments Interviews, Insight Generation, Early Ideation Testing & Prototyping"}
                    tools={"Adobe Illustrator, Photoshop, Indesign"}
                    duration={"February to April 2019 at Srishti School of Art, Design and Technology"}
                />
            </Box>
            <Box pad={{
                horizontal: "xlarge",
                top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large
            }}>
                <ContextSection/>
            </Box>
            <Box pad={{
                horizontal: "xlarge",
                top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large
            }}>
                <ContextTextSection/>
            </Box>
            <Box pad={{
                horizontal: "xlarge",
                top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large
            }}>
                <ImageWithTextSection/>
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
                                    }}>Observations</Heading>
                                )
                            },
                            b: {
                                render: () => (
                                    <Box gap={"medium"}>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>{content.p1.observations.o1}</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>{content.p1.observations.o2}</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>{content.p1.observations.o3}</Text>
                                    </Box>
                                )
                            }
                        },
                        images: {
                            a: {
                                render: () => (
                                    <Image src={"/images/observations.svg"} height={isTabletOrMobileDevice ? "100px" : ""}></Image>
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
                {isTabletOrMobileDevice ? <AffinitySectionSmall/> : <AffinitySection/>}
            </Box>
            <Box pad={{
                horizontal: "xlarge",
                top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large
            }}>
                <HowMightWeSection/>
            </Box>
            <Box pad={{
                horizontal: "xlarge",
                top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large
            }}>
                {isTabletOrMobileDevice ? <UserJourneySectionSmall/> : <UserJourneySection/>}
            </Box>
            <Box pad={{
                horizontal: "xlarge",
                top: isTabletOrMobileDevice ? theme.margins.largeScreen.large : theme.margins.largeScreen.large
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
                                        }}>{content.p1.target.t1}</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>{content.p1.target.t2}</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>{content.p1.target.t3}</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>{content.p1.target.t4}</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>{content.p1.target.t5}</Text>
                                    </Box>
                                )
                            }
                        },
                        images: {
                            a: {
                                render: () => (
                                    <Image src={"/images/target.svg"} height={isTabletOrMobileDevice ? "100px" : ""}></Image>
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
                <IdeationSection/>
            </Box>
            <div
                style={{marginTop: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large}}
                align={"center"}>
                <Heading margin={{bottom: "large", horizontal: "0px", top: "0px"}}
                         textAlign={"center"} level={2} style={{
                    fontFamily: "Poppins-Light",
                    fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xlarge : theme.fontSize.largeScreen.xlarge,
                    textTransform: "uppercase"
                }}>Testing the concept</Heading>
                <Box align={"center"} justify={"center"} width={"60%"}>
                    <Text
                        textAlign={"center"}
                        style={{
                            fontFamily: "Poppins-Light",
                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.small : theme.fontSize.largeScreen.small
                        }}>
                        {content.p1.testingConcept.t1}

                    </Text>
                </Box>
                <Box align={"center"} justify={"center"} width={"60%"}>
                    <Text margin={{bottom: "large", horizontal: "0px", top: "0px"}}
                          textAlign={"center"}
                          style={{
                              fontFamily: "Poppins-Light",
                              fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.small : theme.fontSize.largeScreen.small
                          }}>
                        {content.p1.testingConcept.t2}

                    </Text>
                </Box>
                <div style={{margin: "0 auto"}}>
                    <ImageSection height={500} width={1588} image={"url(/images/testingConcept.jpg)"} type={"contain"}/>
                </div>
            </div>
            <div
                style={{marginTop: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large}}
                align={"center"}>
                <Heading margin={{bottom: "large", horizontal: "0px", top: "0px"}}
                         level={2} style={{
                    fontFamily: "Poppins-Light",
                    fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xlarge : theme.fontSize.largeScreen.xlarge,
                    textTransform: "uppercase"
                }}>Empathy map</Heading>
                <div style={{margin: "0 auto"}}>
                    <ImageSection height={930} width={1945} image={"url(/images/empathy-fix.svg)"} type={"contain"}/>
                </div>
            </div>

            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large}}>
                <ColorPalleteSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large}}>
                <FontSection/>
            </Box>

            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large}}>
                <FinalOutputSection/>
            </Box>

             <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large}}>
                <ExperienceSection/>
            </Box>
            <Box pad={{
                horizontal: "xlarge",
                top: isTabletOrMobileDevice ? theme.margins.smallScreen.medium : theme.margins.largeScreen.medium
            }}>
                <ProjectSection/>
            </Box>
            <Box width={"100%"} gap={"large"} direction={"column"}
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

export default connect(mapStateToProps, mapDispatcherToProps)(ProjectOne);