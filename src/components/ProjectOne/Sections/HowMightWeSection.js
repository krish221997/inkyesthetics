import {Box, Text} from "grommet";
import React from "react";

const HowMightWeSection = () => {
    return (
        <Box align={"center"} justify={"center"} width={"100%"} gap={"medium"}>
            <Text style={{fontSize: "30px", fontFamily: "Poppins-Bold"}}>How might we...</Text>
            <Box direction={"row"} wrap>
                <Text style={{fontSize: "20px", fontFamily: "Poppins-Light"}}>use storytelling to
                    <Text style={{fontSize: "20px", fontFamily: "Poppins-Medium"}}>reduce communication</Text> gap by
                    making her products <Text style={{fontSize: "20px", fontFamily: "Poppins-Medium"}}>more available</Text>
                    , and <Text style={{fontSize: "20px", fontFamily: "Poppins-Medium"}}>creating awareness</Text> for the audience?</Text>
            </Box>
        </Box>
    )
};

export default HowMightWeSection;