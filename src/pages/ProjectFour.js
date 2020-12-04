import {useMediaQuery} from "react-responsive";
import React, {useEffect} from "react";
import Header from "../components/Header";
import {Box} from "grommet";
import ImageSection from "../components/shared/ImageSection";
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
import theme from "../styles/theme";
import BriefSection from "../components/shared/BriefSection";
import RoleSection from "../components/shared/RoleSection";

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
            {isSmallScreenCoverImage ? <div style={{margin: "0 auto"}}>
                <ImageSection height={315} width={375} image={"url(/images/devtas-cover-small.svg)"} type={"contain"}/>
            </div> : <div style={{margin: "0 auto"}}>
                <ImageSection height={854} width={1451} image={"url(/images/p4-cover-1.svg)"} type={"contain"}/>
            </div>}
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.small : theme.margins.largeScreen.small}}>
                <BriefSection briefText={
                        "Deconstruction, as this project treats it, is largely associated with the concept of unfolding," +
                        " peeling back layers to examine how something has been created, has been constructed. It aims " +
                        "to answer these questions: why has it been put together the way it is? What is the purpose of" +
                        " it being built in this way? In the field of Visual Communication and Strategic Branding, " +
                        "deconstruction can apply to the breaking down of a brand into its basic elements: an idea, " +
                        "its conception, its production, and its execution. The aim of this project is to deconstruct " +
                        "the ‘Devatha Hasthas’ of Bharatnatyam. The project examines the hand " +
                        "gestures or Hasthas, the incantations or shlokas that describe them, and their attached " +
                        "significance to the god or Devatha."
                    } heading={"Devata Hastas"}>

                </BriefSection>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.small : theme.margins.largeScreen.small}}>
                <RoleSection
                    role={"Primary & Secondary Research, Field Experiments Interviews, Insight Generation, Early Ideation Testing & Prototyping"}
                    tools={"Adobe Illustrator, Photoshop, Indesign"}
                    duration={"July to October 2018 at Shristi School of Art, Design and Technology"}
                />
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large}}>
                <HastaSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large}}>
                <AimSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large}}>
                <TargetAudienceSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large}}>
                <ColorPalleteSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large}}>
                <FontSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large}}>
                <SketchesSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large}}>
                <IllustrationsSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large}}>
                <CompositionSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large}}>
                <FinalOutputSection/>
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

const mapStateToProps = (state) => ({});

const mapDispatcherToProps = (dispatch) => ({
    setNextAndPreviousProjectFlow: dispatch.flow.setNextAndPreviousProject
});

export default connect(mapStateToProps, mapDispatcherToProps)(ProjectFour);