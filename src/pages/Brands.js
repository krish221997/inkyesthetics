import {Box} from "grommet";
import HeaderSmall from "../components/HeaderSmall";
import Header from "../components/Header";
import React from "react";
import {useMediaQuery} from "react-responsive";
import LogoSection from "../components/Brands/LogoSection";
import theme from "../styles/theme";
import SliderSection from "../components/Brands/SliderSection";

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

            <Box pad={{
                horizontal: "xlarge",
                top: isTabletOrMobileDevice ? theme.margins.smallScreen.large : theme.margins.largeScreen.large
            }}>
                <SliderSection/>
            </Box>

        </>
    )

};

export default Brands;