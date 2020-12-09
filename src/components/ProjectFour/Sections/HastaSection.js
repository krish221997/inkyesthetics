import {Box, Heading, Text} from "grommet";
import React from "react";
import {useMediaQuery} from "react-responsive";
import theme from "../../../styles/theme";
import {content} from "../../../content";

const sectionData = {
    title: "Devatha Hasta",
    subHeading1: content.p4.hastas.h1,
    subHeading2: content.p4.hastas.h2,
    subHeading3: content.p4.hastas.h3,
    subHeading4: content.p4.hastas.h4
};

const HastaSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

    return (
        <Box width={"100%"} align={"center"} justify={"center"}>
            <Heading margin={{bottom: "large", horizontal: "0px", top: "0px"}}
                     level={2} style={{
                fontFamily: "Poppins-Light",
                fontSize: isTabletOrMobileDevice ? "20px" : "30px",
                textTransform: "uppercase"
            }}>{sectionData.title}</Heading>
            <Box align={"center"} justify={"center"} width={isTabletOrMobileDevice ? "100%" : "70%"}>
                <Text margin={{bottom: "large", horizontal: "0px", top: "0px"}}
                      textAlign={"center"}
                      style={{fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall, fontFamily: "Poppins-Light"}}>
                    {sectionData.subHeading1}
                </Text>
                <Text margin={{bottom: isTabletOrMobileDevice ? "small" : "small", horizontal: "0px", top: "0px"}}
                      textAlign={"center"}
                      style={{fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall, fontFamily: "Poppins-Light"}}>
                    {sectionData.subHeading2}
                </Text>
                <Text textAlign={"center"}
                      style={{fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall, fontFamily: "Poppins-Light"}}>
                    {sectionData.subHeading3}
                </Text>
                <Text textAlign={"center"}
                      style={{fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall, fontFamily: "Poppins-Light"}}>
                    {sectionData.subHeading4}
                </Text>
            </Box>
        </Box>
    )

};

export default HastaSection;