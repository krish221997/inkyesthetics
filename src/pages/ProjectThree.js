import {useMediaQuery} from "react-responsive";
import React, {useEffect} from "react";
import Header from "../components/Header";
import {Box, Heading} from "grommet";
import ImageSection from "../components/shared/ImageSection";
import AboutMeSection from "../components/ProjectThree/Sections/AboutMeSection";
import LogoDesignSection from "../components/ProjectThree/Sections/LogoDesignSection";
import FontsSection from "../components/ProjectThree/Sections/FontsSection";
import ColorPalleteSection from "../components/ProjectThree/Sections/ColorPaletteSection";
import LabelDesignSection from "../components/ProjectThree/Sections/LabelDesignSection";
import ProductSection from "../components/ProjectThree/Sections/ProductSection";
import Footer from "../components/Footer";
import HeaderSmall from "../components/HeaderSmall";
import {connect} from "react-redux";
import ProjectSection from "../components/shared/ProjectSection";
import theme from "../styles/theme";
import BriefSection from "../components/shared/BriefSection";
import RoleSection from "../components/shared/RoleSection";
import LinkComponent from "../components/shared/LinkComponent";

const ProjectThree = ({setNextAndPreviousProjectFlow}) => {

    useEffect(() => {
        setNextAndPreviousProjectFlow({currentProject: 2});
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
            {isSmallScreenCoverImage ?<div style={{margin: "0 auto"}}>
                <ImageSection height={315} width={378} image={"url(/images/chatea-cover-small.jpg)"} type={"contain"}/>
            </div> : <div style={{margin: "0 auto"}}>
                <ImageSection height={1000} width={2097} image={"url(/images/chatea.jpg)"} type={"contain"}/>
            </div>}
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.small : theme.margins.largeScreen.small}}>
                <BriefSection
                    heading={"Chatea : Package Yourself!"}
                    briefText={
                        "You are just like a product. If you get your packaging wrong even in the most\n" +
                        "                    subtle of ways, it could mean disaster to your work life, and even social death."
                    }
                />
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.small : theme.margins.largeScreen.small}}>
                <RoleSection
                    role={"Primary & Secondary Research, Field Experiments Interviews, Insight Generation, Early Ideation Testing & Prototyping"}
                    tools={"Adobe Illustrator, Photoshop, Indesign"}
                    duration={"July to October 2018 at Shristi School of Art, Design and Technology"}
                />
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large}}>
                <AboutMeSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large}}>
                <LogoDesignSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.medium : theme.margins.largeScreen.medium}}>
                <Box align={"center"} justify={"center"} width={"100%"}>
                    <Heading margin={"0px"}
                             level={2} style={{
                        fontFamily: "Poppins-Light",
                        fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xlarge : theme.fontSize.largeScreen.xlarge,
                        textTransform: "uppercase"
                    }}>Fonts</Heading>
                </Box>
            </Box>
            <Box pad={{horizontal: "xlarge", top: "large"}}>
                <FontsSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.medium : theme.margins.largeScreen.medium}}>
                <ColorPalleteSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large}}>
                <LabelDesignSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large}}>
                <ProductSection/>
            </Box>
             <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? theme.margins.smallScreen.medium : theme.margins.largeScreen.medium}}>
                <ProjectSection/>
            </Box>
             <Box width={"100%"} gap={"large"} direction={"column"}
                 pad={{
                     horizontal: "xlarge",
                     top: isTabletOrMobileDevice ? theme.margins.smallScreen.small : theme.margins.largeScreen.small,
                     bottom: "large"
                 }}>
                <LinkComponent/>
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

export default connect(mapStateToProps, mapDispatcherToProps)(ProjectThree);