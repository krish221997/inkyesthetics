import {Box, Heading, Text} from "grommet";
import React from "react";
import {useMediaQuery} from "react-responsive";


const HowMightWeSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    })

    const largeScreenView = (
        <Box align={"center"} justify={"center"} width={"100%"}>
            <Heading margin={"0px"} style={{fontSize: "30px", fontFamily: "Poppins-Semibold"}}>How might we...</Heading>
            <Box wrap>
                <Text textAlign={"center"} style={{fontSize: "20px", fontFamily: "Poppins-Light"}}>use storytelling
                    to <Text style={{fontSize: "20px", fontFamily: "Poppins-Medium"}}>eliminate the communication
                        gap</Text> by
                    thereby making her products <Text style={{fontSize: "20px", fontFamily: "Poppins-Medium"}}>more
                        accessible </Text>to the audience?</Text>
            </Box>
        </Box>
    )

    const smallScreenView = (
        <Box align={"center"} justify={"center"} width={"100%"}>
            <Heading margin={"0px"} style={{fontSize: "20px", fontFamily: "Poppins-Semibold"}}>How might we...</Heading>
            <Box wrap>
               <Text textAlign={"center"} style={{fontSize: "13px", fontFamily: "Poppins-Light"}}>use storytelling
                    to <Text style={{fontSize: "13px", fontFamily: "Poppins-Medium"}}>eliminate the communication
                        gap</Text> by
                    thereby making her products <Text style={{fontSize: "13px", fontFamily: "Poppins-Medium"}}>more
                        accessible </Text>to the audience?</Text>
            </Box>
        </Box>
    )

    return (
        isTabletOrMobileDevice ? smallScreenView : largeScreenView
    )
};

export default HowMightWeSection;