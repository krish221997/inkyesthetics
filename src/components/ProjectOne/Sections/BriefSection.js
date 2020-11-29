import {Box, Text, Heading} from "grommet";
import React from "react";
import genericTextRenderer from "../../../utils/genericTextRenderer";
import {useMediaQuery} from "react-responsive";


const bigScreenBriefSectionProperties = {
    text: {
        a: {
            render: () => (
                <Box wrap width={"50%"} height={"100%"}>
                    <Heading level={1} margin={"0px"}
                             style={{textTransform: "uppercase", fontFamily: "Poppins-Light", fontSize: "36px"}}>
                        Creative Collaborations
                    </Heading>
                </Box>
            )
        },
        b: {
            render: () => (
                <Text style={{fontFamily: "Poppins-Light", fontSize: "16px"}}><Text
                    style={{
                        textTransform: "uppercase",
                        fontFamily: "Poppins-SemiBold",
                        fontSize: "18px"
                    }}>Brief: </Text>The
                    local content to explore is working with
                    traditional artisans in Kutch who are well established in their artisanal practice. Their challenge
                    is to draw from the best that their heritage has to offer, while at the same time push boundaries
                    and
                    transmit the values and meanings of their practice to a variety of consumer contexts. Using
                    storytelling as a design toll, can we facilitate ways of exchanging knowledge and make a better
                    experience for not only the consumer but also the artisan?</Text>
            )
        }
    }
};

const smallScreenBriefSectionProperties = {
    text: {
        a: {
            render: () => (
                <Heading level={2} margin={"0px"} size={"large"} style={{
                    fontSize: "24px",
                    textTransform: "uppercase",
                    fontFamily: "Poppins-Light"
                }}>Creative Collaborations</Heading>
            )
        },
        b: {
            render: () => (
                <Text margin={{top: "medium"}} style={{fontFamily: "Poppins-Light", fontSize: "11px"}}><Text
                    style={{
                        textTransform: "uppercase",
                        fontFamily: "Poppins-SemiBold",
                        fontSize: "12px"
                    }}>Brief: </Text>The local artisans in Kutch have been creating exceptional art for generations, but
                    their work is appreciated only within the limits of their local communities. The objective of a
                    collaboration is to address the communication barriers between the artisans and potential direct
                    consumers. The challenge is to allow them to draw from their heritage while at the same time push
                    their boundaries by enabling them to communicate the value & meaning of their work with wider
                    consumer contexts. The question we ask then, is this - Using storytelling as a design tool, can we
                    facilitate ways of exchanging knowledge and make a better experience for not only the consumer but
                    also the artisan?

                </Text>
            )
        }
    }
};


const BriefSection = ({}) => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    })

    return (
        isTabletOrMobileDevice ?
            <Box align={"start"} justify={"start"} width={"100%"}>
                {genericTextRenderer(smallScreenBriefSectionProperties.text.a)}
                {genericTextRenderer(smallScreenBriefSectionProperties.text.b)}
            </Box>
            :
            <Box width={"100%"} direction={"row"} justify={"start"} align={"start"}>
                <Box wrap align={"start"} justify={"start"} width={"50%"} height={"100%"}>
                    {genericTextRenderer(bigScreenBriefSectionProperties.text.a)}
                </Box>
                <Box wrap align={"end"} justify={"end"} width={"50%"} height={"100%"}>
                    {genericTextRenderer(bigScreenBriefSectionProperties.text.b)}
                </Box>
            </Box>
    )
};

export default BriefSection;