import {useMediaQuery} from "react-responsive";
import React, {useEffect} from "react";
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
import {connect} from "react-redux";
import ProjectSection from "../components/shared/ProjectSection";
import IllustrationsSection from "../components/ProjectFour/Sections/IllustrationsSection";

const ProjectFour = ({setNextAndPreviousProjectFlow}) => {

    useEffect(() => {
        setNextAndPreviousProjectFlow({currentProject: 3});
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
            {/*    <ImageSection height={854} width={1451} image={"url(/images/p4-cover-1.svg)"} type={"contain"}/>*/}
            {/*</div>*/}
            {isSmallScreenCoverImage ? <div style={{margin: "0 auto"}}>
                <ImageSection height={315} width={375} image={"url(/images/devtas-cover-small.svg)"} type={"contain"}/>
            </div> : <div style={{margin: "0 auto"}}>
                <ImageSection height={854} width={1451} image={"url(/images/p4-cover-1.svg)"} type={"contain"}/>
            </div>}
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
                <IllustrationsSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "150px" : "200px"}}>
                <CompositionSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "150px" : "200px"}}>
                <FinalOutputSection/>
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

const mapStateToProps = (state) => ({});

const mapDispatcherToProps = (dispatch) => ({
    setNextAndPreviousProjectFlow: dispatch.flow.setNextAndPreviousProject
});

export default connect(mapStateToProps, mapDispatcherToProps)(ProjectFour);