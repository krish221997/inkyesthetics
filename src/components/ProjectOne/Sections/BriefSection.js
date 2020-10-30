import {Box, Text} from "grommet";
import React from "react";

const BriefSection = () => {
    return (
        <Box width={"100%"} direction={"row"} justify={"start"} align={"start"}>
            <Box wrap align={"start"} justify={"start"} width={"50%"} height={"100%"}>
                <Box wrap width={"50%"} height={"100%"}>
                    <Box gap={"medium"} margin={{top: "2px"}}>
                        <Text style={{textTransform: "uppercase", fontSize: "35px", fontFamily: "Poppins-Medium"}}>Creative</Text>
                        <Text style={{textTransform: "uppercase", fontSize: "35px", fontFamily: "Poppins-Medium"}}>Collaborations</Text>
                    </Box>
                </Box>
            </Box>
             <Box wrap align={"end"} justify={"end"} width={"50%"} height={"100%"}>
                <Box direction={"row"} gap={"xsmall"}>
                    <Text style={{textTransform: "uppercase", fontFamily: "Poppins-SemiBold", fontSize: "18px"}}>Brief:</Text>
                <Text style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>The local content to explore is working with
                    traditional artisans in Kutch who are well established in their artisanal practice. Their challenge
                    is to draw from the best that their heritage has to offer, while at the same time push boundaries and
                    transmit the values and meanings of their practice to a variety of consumer contexts. Using
                    storytelling as a design toll, can we facilitate ways of exchanging knowledge and make a better
                    experience for not only the consumer but also the artisan?</Text>
                </Box>
            </Box>
        </Box>
    )
};

export default BriefSection;