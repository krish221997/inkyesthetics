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
import BriefSection from "../components/ProjectTwo/Sections/BriefSection";
import RoleSection from "../components/ProjectTwo/Sections/RoleSection";
import {useMediaQuery} from "react-responsive";
import Test3DRender from "../components/ProjectOne/Sections/Test3DRender";
import HeaderSmall from "../components/HeaderSmall";
import {connect} from "react-redux";
import ProjectSection from "../components/shared/ProjectSection";
import AimSection from "../components/ProjectTwo/Sections/AimSection";

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
                <ImageSection height={315} width={375} image={"url(/images/ampmateur-cover-small.svg)"} type={"contain"}/>
            </div> : <div style={{margin: "0 auto"}}>
                <ImageSection height={953} width={1920} image={"url(/images/cover_cc.svg)"} type={"contain"}/>
            </div>}
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "100px" : "120px"}}>
                <BriefSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "100px" : "120px"}}>
                <RoleSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "200px" : "250px"}}>
                <AimSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "200px" : "250px"}}>
                <FunctionsSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "200px" : "250px"}}>
                <InspirationSection/>
            </Box>
             <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "150px" : "200px"}}>
                <TargetAudienceSection/>
            </Box>
             <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "150px" : "200px"}}>
                <PersonaSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "150px" : "200px"}}>
                <GoalSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "150px" : "200px"}}>
                <UserFlowSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "150px" : "200px"}}>
                <SitemapSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "150px" : "200px"}}>
                <PrototypeSection/>
            </Box>
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

export default connect(mapStateToProps, mapDispatcherToProps)(ProjectTwo);