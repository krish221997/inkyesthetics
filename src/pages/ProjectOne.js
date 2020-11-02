import {Box} from "grommet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import ImageSection from "../components/shared/ImageSection";
import ImageWithTextSection from "../components/ProjectOne/Sections/ImageWithTextSection";
import ObservationsSection from "../components/ProjectOne/Sections/ObservationsSection";
import AffinitySection from "../components/ProjectOne/Sections/AffinitySection";
import HowMightWeSection from "../components/ProjectOne/Sections/HowMightWeSection";
import UserJourneySection from "../components/ProjectOne/Sections/UserJourneySection";
import TargetAudienceSection from "../components/ProjectOne/Sections/TargetAudienceSection";
import IdeationSection from "../components/ProjectOne/Sections/IdeationSection";
import EmpathySection from "../components/ProjectOne/Sections/EmpathySection";
import BriefSection from "../components/ProjectOne/Sections/BriefSection";
import RoleSection from "../components/ProjectOne/Sections/RoleSection";

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
            <Box pad={{horizontal: "xlarge"}} margin={{top: "250px"}}>
                <ImageWithTextSection/>
            </Box>
            <Box pad={{horizontal: "xlarge"}} margin={{top: "250px"}}>
                <ObservationsSection/>
            </Box>
             <Box pad={{horizontal: "xlarge"}} margin={{top: "200px"}}>
                <AffinitySection/>
            </Box>
            <Box pad={{horizontal: "xlarge"}} margin={{top: "200px"}}>
                <HowMightWeSection/>
            </Box>
            <Box pad={{horizontal: "xlarge"}} margin={{top: "250px"}}>
                <UserJourneySection/>
            </Box>
             <Box pad={{horizontal: "xlarge"}} margin={{top: "200px"}}>
                <TargetAudienceSection/>
            </Box>
           <Box pad={{horizontal: "xlarge"}} margin={{top: "200px"}}>
                <IdeationSection/>
            </Box>
             <Box margin={{top: "200px"}}>
                <EmpathySection/>
            </Box>
            <Box width={"100%"} direction={"column"} pad={{horizontal: "large", top: "xlarge", bottom: "large"}}>
                <Footer/>
            </Box>
        </Box>
    )

};

export default ProjectOne;