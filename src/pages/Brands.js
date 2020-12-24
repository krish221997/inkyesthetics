import {Box} from "grommet";
import HeaderSmall from "../components/HeaderSmall";
import Header from "../components/Header";
import React from "react";
import {useMediaQuery} from "react-responsive";
import LogoSection from "../components/Brands/LogoSection";
import theme from "../styles/theme";
import SliderSection from "../components/Brands/SliderSection";
import NetflixSection from "../components/Brands/NetflixSection";
import VideoCarousel from "../components/Brands/VideoCarousel";
import Footer from "../components/Footer";
import LinkComponent from "../components/shared/LinkComponent";

const Brands = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

    return (
        <>

            {isTabletOrMobileDevice ? <Box pad={{horizontal: "large", top: "large", bottom: "xlarge"}}>
                <HeaderSmall/>
            </Box> : <Box pad={{horizontal: "xlarge", top: "large", bottom: "xlarge"}}>
                <Header/>
            </Box>}

            <Box pad={{horizontal: "xlarge"}}>
                <LogoSection/>
            </Box>

             <Box id={"component1"} pad={{
                horizontal: "xlarge",
                top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large
            }}>
                <NetflixSection/>
            </Box>

            <Box id={"component2"} pad={{
                horizontal: "xlarge",
                top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large
            }}>
                <SliderSection/>
            </Box>

             <Box pad={{
                horizontal: "xlarge",
                top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large
            }}>
                <VideoCarousel/>
            </Box>
             <Box width={"100%"} gap={"large"} direction={"column"}
                 pad={{
                     horizontal: "xlarge",
                     top: isTabletOrMobileDevice ? theme.margins.smallScreen.small : theme.margins.largeScreen.small,
                     bottom: "large"
                 }}>
                <LinkComponent state={1}/>
                <Footer/>
            </Box>

        </>
    )

};

export default Brands;