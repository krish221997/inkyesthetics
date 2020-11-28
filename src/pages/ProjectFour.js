import {useMediaQuery} from "react-responsive";
import React from "react";
import Header from "../components/Header";
import {Box} from "grommet";
import ImageSection from "../components/shared/ImageSection";
import BriefSection from "../components/ProjectFour/Sections/BriefSection";
import RoleSection from "../components/ProjectFour/Sections/RoleSection";
import HastaSection from "../components/ProjectFour/Sections/HastaSection";
import AimSection from "../components/ProjectFour/Sections/AimSection";
import TargetAudienceSection from "../components/ProjectFour/Sections/TargetAudienceSection";
import ColorPalleteSection from "../components/ProjectFour/Sections/ColorPaletteSection";
import FontSection from "../components/ProjectFour/Sections/FontSection";
import SketchesSection from "../components/ProjectFour/Sections/SketchesSection";
import CompositionSection from "../components/ProjectFour/Sections/CompositionSection";
import FinalOutputSection from "../components/ProjectFour/Sections/FinalOutputSection";
import Footer from "../components/Footer";
import HeaderSmall from "../components/HeaderSmall";

const ProjectFour = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

    return (
        <>
           {isTabletOrMobileDevice ? <Box pad={{horizontal: "large", vertical: "large"}}>
                <HeaderSmall/>
            </Box> : <Box pad={{horizontal: "xlarge", vertical: "large"}}>
                <Header/>
            </Box>}
            <div style={{margin: "0 auto"}}>
                <ImageSection height={854} width={1451} image={"url(/images/p4-cover-1.svg)"} type={"contain"}/>
            </div>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "100px" : "120px"}}>
                <BriefSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "100px" : "120px"}}>
                <RoleSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "100px" : "120px"}}>
                <HastaSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "150px" : "200px"}}>
                <AimSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "150px" : "200px"}}>
                <TargetAudienceSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "150px" : "200px"}}>
                <ColorPalleteSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "150px" : "200px"}}>
                <FontSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "150px" : "200px"}}>
                <SketchesSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "150px" : "200px"}}>
                <CompositionSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "150px" : "200px"}}>
                <SketchesSection/>
            </Box>
             <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "150px" : "200px"}}>
                <FinalOutputSection/>
            </Box>
            <Box width={"100%"} direction={"column"}
                 pad={{horizontal: "large", top: "xlarge", bottom: "large"}}>
                <Footer/>
            </Box>
        </>
    )

};

export default ProjectFour;