import {useMediaQuery} from "react-responsive";
import React from "react";
import {Box, Heading, Text} from "grommet";

const TaglineSection = () => {
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

    return (
        <Box align={"center"} justify={"center"} width={"100%"}>
            <Heading margin={{bottom: isTabletOrMobileDevice ? "20px" : "24px", horizontal: "0px", top: "0px"}}
                     level={2} style={{
                fontFamily: "Poppins-Light",
                fontSize: isTabletOrMobileDevice ? "20px" : "30px",
                textTransform: "uppercase"
            }}>Tagline</Heading>

            <Heading margin={"0px"} level={5} style={{
                fontFamily: "Poppins-Light",
                fontSize: isTabletOrMobileDevice ? "13px" : "18px",
            }}>Customized Happiness</Heading>

            <Text textAlign={"center"} margin={{top: !isTabletOrMobileDevice ?  "medium" : "small"}}
                  style={{fontFamily: "Poppins-Light", fontSize: isTabletOrMobileDevice ? "11px" : "16px"}}>
                Customized Happiness</Text>
            <Text textAlign={"center"} margin={{top: !isTabletOrMobileDevice ?  "small": "xsmall"}}
                  style={{fontFamily: "Poppins-Light", fontSize: isTabletOrMobileDevice ? "11px" : "16px"}}>
                Customized Happiness</Text>
            <Text textAlign={"center"} margin={{top: !isTabletOrMobileDevice ?  "small" : "xsmall"}}
                  style={{fontFamily: "Poppins-Light", fontSize: isTabletOrMobileDevice ? "11px" : "16px"}}>
                Customized Happiness</Text>
            <Text textAlign={"center"} margin={{top: !isTabletOrMobileDevice ?  "small" : "xsmall"}}
                  style={{fontFamily: "Poppins-Light", fontSize: isTabletOrMobileDevice ? "11px" : "16px"}}>
                Customized Happiness</Text>

        </Box>
    )

};

export default TaglineSection