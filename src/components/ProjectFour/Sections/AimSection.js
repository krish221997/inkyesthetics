import {Box, Heading, Text} from "grommet";
import React from "react";
import {useMediaQuery} from "react-responsive";


const sectionData = {
    title: "Aim",
    subHeading1: "This project aims to deconstruct the concept of Devatha hasthas.",
    subHeading2: "The text explains to the dancer how to denote each god or goddess through her body. This includes the " +
        "exact mudra (gesture) to be held as well as its position in relation to the body.",
};

const AimSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

    return (
        <Box width={"100%"} align={"center"} justify={"center"}>
            <Heading margin={{bottom: isTabletOrMobileDevice ? "20px" : "24px", horizontal: "0px", top: "0px"}}
                     level={2} style={{
                fontFamily: "Poppins-Light",
                fontSize: isTabletOrMobileDevice ? "20px" : "30px",
                textTransform: "uppercase"
            }}>{sectionData.title}</Heading>
            <Box align={"center"} justify={"center"} width={isTabletOrMobileDevice ? "100%" : "70%"}>
                <Text
                      textAlign={"center"}
                      style={{fontSize: isTabletOrMobileDevice ? "11px" : "16px", fontFamily: "Poppins-Light"}}>
                    {sectionData.subHeading1}
                </Text>
                <Text margin={{bottom: isTabletOrMobileDevice ? "small" : "small", horizontal: "0px", top: "0px"}}
                      textAlign={"center"}
                      style={{fontSize: isTabletOrMobileDevice ? "11px" : "16px", fontFamily: "Poppins-Light"}}>
                    {sectionData.subHeading2}
                </Text>
            </Box>
        </Box>
    )

};

export default AimSection;