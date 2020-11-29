import {Box, Heading} from "grommet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, {useEffect} from "react";
import ImageSection from "../components/shared/ImageSection";
import ImageWithTextSection from "../components/ProjectOne/Sections/ImageWithTextSection";
import ObservationsSection from "../components/ProjectOne/Sections/ObservationsSection";
import AffinitySection from "../components/ProjectOne/Sections/AffinitySection";
import HowMightWeSection from "../components/ProjectOne/Sections/HowMightWeSection";
import UserJourneySection from "../components/ProjectOne/Sections/UserJourneySection";
import TargetAudienceSection from "../components/ProjectOne/Sections/TargetAudienceSection";
import IdeationSection from "../components/ProjectOne/Sections/IdeationSection";
import BriefSection from "../components/ProjectOne/Sections/BriefSection";
import RoleSection from "../components/ProjectOne/Sections/RoleSection";
import {useMediaQuery} from "react-responsive";
import AffinitySectionSmall from "../components/ProjectOne/Sections/AffinitySectionSmall";
import UserJourneySectionSmall from "../components/ProjectOne/Sections/UserJourneySectionSmall";
import HeaderSmall from "../components/HeaderSmall";
import ProjectSection from "../components/shared/ProjectSection";
import TYPES from "../config/types";
import {connect} from "react-redux";

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

            {isSmallScreenCoverImage ?<div style={{margin: "0 auto"}}>
                <ImageSection height={315} width={375} image={"url(/images/cc-cover-small.svg)"} type={"contain"}/>
            </div> : <div style={{margin: "0 auto"}}>
                <ImageSection height={910} width={1920} image={"url(/images/cc_cover.svg)"} type={"contain"}/>
            </div>}
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "100px" : "120px"}}>
                <BriefSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "100px" : "120px"}}>
                <RoleSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "200px" : "270px"}}>
                <ImageWithTextSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "200px" : "270px"}}>
                <ObservationsSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "150px" : "200px"}}>
                {isTabletOrMobileDevice ? <AffinitySectionSmall/> : <AffinitySection/>}
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "150px" : "200px"}}>
                <HowMightWeSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "150px" : "200px"}}>
                {isTabletOrMobileDevice ? <UserJourneySectionSmall/> : <UserJourneySection/>}
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "150px" : "200px"}}>
                <TargetAudienceSection/>
            </Box>
            <Box pad={{horizontal: "xlarge"}} margin={{top: "200px"}}>
                <IdeationSection/>
            </Box>
            <div style={{marginTop: "200px"}} align={"center"}>
                <Heading margin={{bottom: isTabletOrMobileDevice ? "20px" : "24px", horizontal: "0px", top: "0px"}} level={2} style={{
                    fontFamily: "Poppins-Light",
                    fontSize: isTabletOrMobileDevice ? "20px" : "30px",
                    textTransform: "uppercase"
                }}>Empathy map</Heading>
                <div style={{margin: "0 auto"}}>
                    <ImageSection height={930} width={1945} image={"url(/images/empathy-fix.svg)"} type={"contain"}/>
                </div>
            </div>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "150px" : "200px"}}>
                <ProjectSection/>
            </Box>
            <Box width={"100%"} direction={"column"}
                 pad={{horizontal: "large", top: isTabletOrMobileDevice ? "120px" : "150px", bottom: "large"}}>
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

export default connect(mapStateToProps, mapDispatcherToProps)(ProjectOne);