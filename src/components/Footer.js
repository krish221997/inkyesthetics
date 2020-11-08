import {Box, Text} from "grommet";
import React from "react";
import {useMediaQuery} from "react-responsive";

const Footer = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    })

    return (
        <Box width={"100%"} align={"center"} justify={"center"}>
            <Text color={"black"} style={{fontSize: isTabletOrMobileDevice ? "13px" : "20px", cursor: "pointer", fontFamily: "Staatliches"}}>ALL RIGHTS RESERVED</Text>
        </Box>
    )
};

export default Footer;