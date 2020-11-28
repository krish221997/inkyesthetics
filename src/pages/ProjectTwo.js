import {Box} from "grommet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
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

const ProjectOne = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    })

    return (

        <>
            {isTabletOrMobileDevice ? <Box pad={{horizontal: "large", vertical: "large"}}>
                <HeaderSmall/>
            </Box> : <Box pad={{horizontal: "xlarge", vertical: "large"}}>
                <Header/>
            </Box>}
            <div style={{margin: "0 auto"}}>
                <ImageSection height={953} width={1920} image={"url(/images/cover_cc.svg)"} type={"contain"}/>
            </div>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "100px" : "120px"}}>
                <BriefSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "100px" : "120px"}}>
                <RoleSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "100px" : "120px"}}>
                <FunctionsSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "100px" : "120px"}}>
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
            <Box width={"100%"} direction={"column"}
                 pad={{horizontal: "large", top: "xlarge", bottom: "large"}}>
                <Footer/>
            </Box>
        </>
    )

};

export default ProjectOne;