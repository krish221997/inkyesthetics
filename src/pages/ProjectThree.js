import {useMediaQuery} from "react-responsive";
import React from "react";
import Header from "../components/Header";
import {Box, Heading, Image} from "grommet";
import ImageSection from "../components/shared/ImageSection";
import BriefSection from "../components/ProjectThree/Sections/BriefSection";
import RoleSection from "../components/ProjectThree/Sections/RoleSection";
import AboutMeSection from "../components/ProjectThree/Sections/AboutMeSection";
import LogoDesignSection from "../components/ProjectThree/Sections/LogoDesignSection";
import TaglineSection from "../components/ProjectThree/Sections/TaglineSection";
import FontsSection from "../components/ProjectThree/Sections/FontsSection";
import ColorPalleteSection from "../components/ProjectThree/Sections/ColorPaletteSection";
import LabelDesignSection from "../components/ProjectThree/Sections/LabelDesignSection";
import ProductSection from "../components/ProjectThree/Sections/ProductSection";
import Footer from "../components/Footer";
import HeaderSmall from "../components/HeaderSmall";

const ProjectThree = () => {

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
                <ImageSection height={842} width={1920} image={"url(/images/chatea.svg)"} type={"contain"}/>
            </div>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "100px" : "120px"}}>
                <BriefSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "100px" : "120px"}}>
                <RoleSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "100px" : "120px"}}>
                <AboutMeSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "150px" : "200px"}}>
                <LogoDesignSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "150px" : "200px"}}>
                <TaglineSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "70px" : "100px"}}>
                <Box align={"center"} justify={"center"} width={"100%"}>
                    <Heading margin={"0px"}
                             level={2} style={{
                        fontFamily: "Poppins-Light",
                        fontSize: isTabletOrMobileDevice ? "20px" : "30px",
                        textTransform: "uppercase"
                    }}>Fonts</Heading>
                </Box>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "70px" : "100px"}}>
                <FontsSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "100px" : "120px"}}>
                <ColorPalleteSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "100px" : "120px"}}>
                <LabelDesignSection/>
            </Box>
            <Box pad={{horizontal: "xlarge", top: isTabletOrMobileDevice ? "150px" : "200px"}}>
                <ProductSection/>
            </Box>
            <Box width={"100%"} direction={"column"}
                 pad={{horizontal: "large", top: "xlarge", bottom: "large"}}>
                <Footer/>
            </Box>
        </>
    )
};

export default ProjectThree;