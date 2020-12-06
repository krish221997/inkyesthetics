import {Box} from "grommet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, {useEffect} from "react";
import ImageSection from "../components/shared/ImageSection";
import FunctionsSection from "../components/ProjectTwo/Sections/FunctionsSection";
import InspirationSection from "../components/ProjectTwo/Sections/InspirationSection";
import TargetAudienceSection from "../components/ProjectTwo/Sections/TargetAudienceSection";
import PersonaSection from "../components/ProjectTwo/Sections/PersonaSection";
import GoalSection from "../components/ProjectTwo/Sections/GoalSection";
import UserFlowSection from "../components/ProjectTwo/Sections/UserFlowSection";
import SitemapSection from "../components/ProjectTwo/Sections/SitemapSection";
import PrototypeSection from "../components/ProjectTwo/Sections/Prototype";
import {useMediaQuery} from "react-responsive";
import Test3DRender from "../components/ProjectOne/Sections/Test3DRender";
import HeaderSmall from "../components/HeaderSmall";
import {connect} from "react-redux";
import ProjectSection from "../components/shared/ProjectSection";
import AimSection from "../components/ProjectTwo/Sections/AimSection";
import theme from "../styles/theme";
import BriefSection from "../components/shared/BriefSection";
import RoleSection from "../components/shared/RoleSection";

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
            {isSmallScreenCoverImage ?<div style={{margin: "0 auto"}}>
                <ImageSection height={315} width={375} image={"url(/images/amp-cover-small.jpg)"} type={"contain"}/>
            </div> : <div style={{margin: "0 auto"}}>
                <ImageSection height={953} width={1920} image={"url(/images/cover-amp.jpg)"} type={"contain"}/>
            </div>}
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.small : theme.margins.largeScreen.small}}>
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
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.small : theme.margins.largeScreen.small}}>
                <RoleSection
                    role={"Primary & Secondary Research, Field Experiments Interviews, Insight Generation, Early Ideation Testing & Prototyping"}
                    tools={"Adobe Illustrator, Photoshop, Indesign"}
                    duration={"June 2020 at California Institute of the Art"}
                />
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large}}>
                <AimSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large}}>
                <FunctionsSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large}}>
                <InspirationSection/>
            </Box>
             <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large}}>
                <TargetAudienceSection/>
            </Box>
             <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large}}>
                <PersonaSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large}}>
                <GoalSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large}}>
                <UserFlowSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large}}>
                <SitemapSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large}}>
                <PrototypeSection/>
            </Box>
             <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.medium : theme.margins.largeScreen.medium}}>
                <ProjectSection/>
            </Box>
            <Box width={"100%"} direction={"column"}
                 pad={{horizontal: "large", top: isTabletOrMobileDevice ? theme.margins.smallScreen.small : theme.margins.largeScreen.small, bottom: "large"}}>
                <Footer/>
            </Box>
        </>
    )

};

const mapStateToProps = (state) => ({
});

const mapDispatcherToProps = (dispatch) => ({
    setNextAndPreviousProjectFlow: dispatch.flow.setNextAndPreviousProject
});

export default connect(mapStateToProps, mapDispatcherToProps)(ProjectTwo);