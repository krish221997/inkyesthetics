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
                I think I made a <Text textAlign={"start"}
                                       style={{
                                           fontFamily: "Poppins-SemiBold",
                                           fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.large : theme.fontSize.largeScreen.large
                                       }}>difference</Text>
            </Text>
            <Text margin={{top: "medium"}} textAlign={"start"}
                  style={{
                      lineHeight: isTabletOrMobileDevice ? "30px" : "40px",
                      fontFamily: "Poppins-Light",
                      fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.medium : theme.fontSize.largeScreen.medium
                  }}>
                The orders from customers would come via her daughter’s WhatsApp, but unable to communicate and
                understand customers’ preferences, she would embroider as per her creative sensibilities, resulting in
                unsatisfied clients and a resultant debt of INR 40,000.
                This system was circulated amongst her clients and using it she was able to understand their needs and
                expectations, successfully fulfil orders and pay off her debt as well as make profits! Working on this
                project, helped me realize the importance of improving and aligning the design process in accordance
                with the business needs as well as the client’s requirements and expectations.

            </Text>

        </Box>
    )

};

export default Conclusion;