import {useMediaQuery} from "react-responsive";
import React from "react";
import {Box, Heading, Image, Text} from "grommet";
import theme from "../../../styles/theme";
import {content} from "../../../content";
// const boxStyle = {
//     display: "grid",
//     "grid-template-columns": "repeat(1, minmax(100px, auto))",
//     "grid-template-rows": "repeat(1, 1fr)",
//     "grid-gap": "0px",
// };

const LogoDesignSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

    return (
        <Box width={"100%"} justify={"center"} align={"center"}>
            <Heading margin={{bottom: "large", horizontal: "0px", top: "0px"}}
                     level={2} style={{
                fontFamily: "Poppins-Light",
                fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xlarge : theme.fontSize.largeScreen.xlarge,
                textTransform: "uppercase"
            }}>Logo design</Heading>
            <Box>
                <Image width={isTabletOrMobileDevice ? "250px" : ""} src={"/images/chatea-white.svg"}/>
            </Box>

            <Box margin={{top: "medium", bottom: "large"}}>
                <Image width={isTabletOrMobileDevice ? "250px" : ""} src={"/images/chatea-black.svg"}/>
            </Box>
            <Box align={"center"} justify={"center"} width={"80%"}>
                <Text textAlign={"center"} margin={"0px"}
                         level={5} style={{
                    fontFamily: "Poppins-Light",
                    fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.small : theme.fontSize.largeScreen.small,
                    // textTransform: "uppercase"
                }}>{content.p3.logo}
                </Text>
            </Box>
        </Box>
    )

};

export default LogoDesignSection;