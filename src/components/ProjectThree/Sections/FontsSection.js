import {useMediaQuery} from "react-responsive";
import React from "react";
import {Box, Heading, Image} from "grommet";

const FontsSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });


    return (
        <Box width={"100%"} justify={"center"} align={"center"}>
                <Box>
                    <Image width={isTabletOrMobileDevice ? "250px" : "600px"} src={"/images/p3-font.svg"}/>
                </Box>
        </Box>
    )

};

export default FontsSection;