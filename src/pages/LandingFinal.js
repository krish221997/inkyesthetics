import Header from "../components/Header";
import {Box} from "grommet";
import React from "react";
import {useMediaQuery} from "react-responsive";
import LargeScreenSection from "../components/LandingFinal/LargeScreenSection";
import Footer from "../components/Footer";
import SmallScreenSection from "../components/LandingFinal/SmallScreenSection";

const LandingFinal = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

    return (
        isTabletOrMobileDevice ?
            // <Box pad={{top: "large"}} background={"red"} fill={"vertical"}>
            //     <SmallScreenSection/>
            // </Box>
            <Box margin={{top: "large"}}>
                <div>
                    <SmallScreenSection/>
                </div>
                <Box width={"100%"} direction={"column"}
                     pad={{horizontal: "large", top: "xlarge", bottom: "large"}}>
                    <Footer/>
                </Box>
            </Box>
            :
            <>
                <Box pad={{horizontal: "xlarge", vertical: "large"}}>
                    <Header/>
                </Box>
                <Box pad={{horizontal: "xlarge"}}>
                    <LargeScreenSection/>
                </Box>
                <Box width={"100%"} direction={"column"}
                     pad={{horizontal: "large", top: "xlarge", bottom: "large"}}>
                    <Footer/>
                </Box>
            </>
    )
};

export default LandingFinal;