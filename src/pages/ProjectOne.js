import {Box, Heading} from "grommet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import ImageSection from "../components/ProjectOne/Sections/ImageSection";
import BriefSection from "../components/ProjectOne/Sections/BriefSection";
import HeadingWithImage from "../components/Landing/HeadingWithImage";
import HeadingWithTextSection from "../components/ProjectOne/Sections/HeadingWithTextSection";
import ImageWithTextSection from "../components/ProjectOne/Sections/ImageWithTextSection";
import ObservationsSection from "../components/ProjectOne/Sections/ObservationsSection";
import AffinitySection from "../components/ProjectOne/Sections/AffinitySection";
import HowMightWeSection from "../components/ProjectOne/Sections/HowMightWeSection";
import UserJourney from "../components/ProjectOne/Sections/UserJourneySection";
import UserJourneySection from "../components/ProjectOne/Sections/UserJourneySection";
import TargetAudienceSection from "../components/ProjectOne/Sections/TargetAudienceSection";
import IdeationSection from "../components/ProjectOne/Sections/IdeationSection";
import EmpathySection from "../components/ProjectOne/Sections/EmpathySection";


const ProjectOne = () => {

    return (
        <Box width={"100%"}>
            <Box pad={{horizontal: "xlarge", vertical: "large"}}>
                <Header/>
            </Box>
            <Box width={"100%"} pad={{bottom: "large"}}>
                <ImageSection image={"url(/images/cover.svg)"} type={"cover"}/>
            </Box>
            <Box pad={{horizontal: "xlarge", bottom: "large", top: "xlarge"}}>
                <BriefSection/>
            </Box>
             <Box pad={{horizontal: "xlarge", bottom: "large", top: "xlarge"}}>
                <HeadingWithTextSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", bottom: "large", top: "xlarge"}}>
                <ImageWithTextSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", bottom: "large", top: "xlarge"}}>
                <ObservationsSection/>
            </Box>
             <Box pad={{horizontal: "xlarge", bottom: "large", top: "xlarge"}}>
                <AffinitySection/>
            </Box>
            <Box pad={{horizontal: "xlarge", bottom: "large", top: "xlarge"}}>
                <HowMightWeSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", bottom: "large", top: "xlarge"}}>
                <UserJourneySection/>
            </Box>
             <Box pad={{horizontal: "xlarge", bottom: "large", top: "xlarge"}}>
                <TargetAudienceSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", bottom: "large", top: "xlarge"}}>
                <IdeationSection/>
            </Box>
             <Box pad={{top: "xlarge"}}>
                <EmpathySection/>
            </Box>
            <Box width={"100%"} direction={"column"} pad={{horizontal: "large", top: "xlarge", bottom: "large"}}>
                <Footer/>
            </Box>
        </Box>
    )

};

export default ProjectOne;