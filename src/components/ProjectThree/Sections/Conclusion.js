import {useMediaQuery} from "react-responsive";
import {Box, Text} from "grommet";
import React from "react";
import theme from "../../../styles/theme";

const Conclusion = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

    return (
        <Box width={"100%"} align={"start"} justify={"center"}>
            <Text textAlign={"start"}
                  style={{
                      fontFamily: "Poppins-Medium",
                      fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.large : theme.fontSize.largeScreen.large
                  }}>
                I think I got to know myself better
            </Text>
            <Text margin={{top: "medium"}} textAlign={"start"}
                  style={{
                      lineHeight: isTabletOrMobileDevice ? "30px" : "40px",
                      fontFamily: "Poppins-Light",
                      fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.medium : theme.fontSize.largeScreen.medium
                  }}>
                I got the opportunity to examine myself as a person.

            </Text>
             <Text textAlign={"start"}
                  style={{
                      lineHeight: isTabletOrMobileDevice ? "30px" : "40px",
                      fontFamily: "Poppins-Light",
                      fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.medium : theme.fontSize.largeScreen.medium
                  }}>
                During the course of this project I also understood how people around see me as.

            </Text>
             <Text textAlign={"start"}
                  style={{
                      lineHeight: isTabletOrMobileDevice ? "30px" : "40px",
                      fontFamily: "Poppins-Light",
                      fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.medium : theme.fontSize.largeScreen.medium
                  }}>
                This project helped be understand on the qualities I should work on to be a better person.

            </Text>

        </Box>
    )

};

export default Conclusion;