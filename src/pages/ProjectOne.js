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
                    briefText={
                        "The local artisans in Kutch have been creating exceptional art for generations, but their work " +
                        "is appreciated only within the limits of their local communities. The objective of a " +
                        "collaboration is to address the communication barriers between the artisans and potential " +
                        "direct consumers. The challenge is to allow them to draw from their heritage while at the same " +
                        "time push their boundaries by enabling them to communicate the value & meaning of their work " +
                        "with wider consumer contexts. The question we ask then, is this - Using storytelling as a " +
                        "design tool, can we facilitate ways of exchanging knowledge and make a better experience for " +
                        "not only the consumer but also the artisan?"}
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
                                        }}>She understands alphabets and numbers and icons</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>She is extremely motivated to work but only from home</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>She has restrictions on knowing tailoring of products</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>She is unaware about the market, however she understands customers
                                            taste</Text>
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
                                        }}>People who contact SKV</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>Judyben's customers</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>Customers visiting Irfanbhai's shop</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>Text designers from all over the world</Text>
                                        <Text textAlign={isTabletOrMobileDevice ? "center" : "start"} style={{
                                            fontFamily: "Poppins-Light",
                                            fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
                                        }}>Tourists</Text>
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
                top: isTabletOrMobileDevice ? theme.margins.largeScreen.large : theme.margins.largeScreen.large
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
                        As soon as I got an idea, I decided to see if my concept worked. I tried these activities on
                        paper
                        but I failed. Hence I asked her why she was so confused with these alpabets and numbers. ‘The A
                        in
                        coloumn 1 wasn’t same and in column 2’ she replied(because of my handwriting). by this I noticed
                        that she was looking at the precision of the alphabet ( a design to her).

                    </Text>
                </Box>
                <Box align={"center"} justify={"center"} width={"60%"}>
                    <Text margin={{bottom: "large", horizontal: "0px", top: "0px"}}
                          textAlign={"center"}
                          style={{
                              fontFamily: "Poppins-Light",
                              fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.small : theme.fontSize.largeScreen.small
                          }}>
                        I rushed to a local printed and printed these activities which she responded positively.

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

export default connect(mapStateToProps, mapDispatcherToProps)(ProjectOne);