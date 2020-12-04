import {useMediaQuery} from "react-responsive";
import {Box, Heading, Image} from "grommet";
import React from "react";
import theme from "../../../styles/theme";

const ColorPalleteSection = () => {

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
            }}>Color Palette</Heading>
            <Box>
                <Image width={isTabletOrMobileDevice ? "250px" : ""} src={"/images/p4-palette.svg"}/>
            </Box>
        </Box>
    )

};

export default ColorPalleteSection;