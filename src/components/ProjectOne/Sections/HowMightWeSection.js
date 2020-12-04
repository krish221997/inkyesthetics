import {Box, Heading, Text} from "grommet";
import React from "react";
import {useMediaQuery} from "react-responsive";
import theme from "../../../styles/theme";

const HowMightWeSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    })

    const largeScreenView = (
        <Box align={"center"} justify={"center"} width={"100%"}>
            <Heading margin={"0px"} style={{fontSize: theme.fontSize.largeScreen.xlarge, fontFamily: "Poppins-Semibold"}}>How might we...</Heading>
            <Box wrap>
                <Text textAlign={"center"} style={{fontSize: theme.fontSize.largeScreen.medium, fontFamily: "Poppins-Light"}}>use storytelling
                    to <Text style={{fontSize: theme.fontSize.largeScreen.medium, fontFamily: "Poppins-Medium"}}>eliminate the communication
                        gap</Text> by
                    thereby making her products <Text style={{fontSize: theme.fontSize.largeScreen.medium, fontFamily: "Poppins-Medium"}}>more
                        accessible </Text>to the audience?</Text>
            </Box>
        </Box>
    )

    const smallScreenView = (
        <Box align={"center"} justify={"center"} width={"100%"}>
            <Heading margin={"0px"} style={{fontSize: theme.fontSize.smallScreen.xlarge, fontFamily: "Poppins-Semibold"}}>How might we...</Heading>
            <Box wrap>
               <Text textAlign={"center"} style={{fontSize: theme.fontSize.smallScreen.medium, fontFamily: "Poppins-Light"}}>use storytelling
                    to <Text style={{fontSize: theme.fontSize.smallScreen.medium, fontFamily: "Poppins-Medium"}}>eliminate the communication
                        gap</Text> by
                    thereby making her products <Text style={{fontSize: theme.fontSize.smallScreen.medium, fontFamily: "Poppins-Medium"}}>more
                        accessible </Text>to the audience?</Text>
            </Box>
        </Box>
    )

    return (
        isTabletOrMobileDevice ? smallScreenView : largeScreenView
    )
};

export default HowMightWeSection;