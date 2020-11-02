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
import MoodBoardSection from "../components/ProjectTwo/Sections/MoodboardSection";
import PrototypeSection from "../components/ProjectTwo/Sections/Prototype";
import BriefSection from "../components/ProjectTwo/Sections/BriefSection";
import RoleSection from "../components/ProjectTwo/Sections/RoleSection";

const ProjectOne = () => {

    return (
        <Box width={"100%"}>
            <Box height={"100vh"}>
                <Box pad={{horizontal: "xlarge", vertical: "large"}}>
                <Header/>
            </Box>
            <Box width={"100%"}>
                <ImageSection image={"url(/images/cover1.svg)"} type={"cover"}/>
            </Box>
            </Box>
            <Box pad={{horizontal: "xlarge"}} margin={{top: "140px"}}>
                <BriefSection/>
            </Box>
             <Box pad={{horizontal: "xlarge"}} margin={{top: "140px"}}>
                <RoleSection/>
            </Box>
            <Box pad={{horizontal: "xlarge"}} margin={{top: "140px"}}>
                <FunctionsSection/>
            </Box>
            <Box pad={{horizontal: "xlarge"}} margin={{top: "140px"}}>
                <InspirationSection/>
            </Box>
            <Box pad={{horizontal: "xlarge"}} margin={{top: "200px"}}>
                <TargetAudienceSection/>
            </Box>
             <Box pad={{horizontal: "xlarge"}} margin={{top: "200px"}}>
                <PersonaSection/>
            </Box>
            <Box pad={{horizontal: "xlarge"}} margin={{top: "200px"}}>
                <GoalSection/>
            </Box>
            <Box pad={{horizontal: "xlarge"}} margin={{top: "200px"}}>
                <UserFlowSection/>
            </Box>
            <Box pad={{horizontal: "xlarge"}} margin={{top: "200px"}}>
                <SitemapSection/>
            </Box>
            <Box margin={{top: "200px"}}>
                <MoodBoardSection/>
            </Box>
            <Box margin={{top: "200px"}}>
                <PrototypeSection/>
            </Box>
            <Box width={"100%"} direction={"column"} pad={{horizontal: "large", top: "xlarge", bottom: "large"}}>
                <Footer/>
            </Box>
        </Box>
    )

};

export default ProjectOne;