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
                        Chatea : Package Yourself
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
                    }}>Brief: </Text>You are just like a product. If you get your packaging wrong even in the most
                    subtle of ways, it could mean disaster to your work life, and even social death.</Text>
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
                }}>Chatea : Package Yourself</Heading>
            )
        },
        b: {
            render: () => (
                <Text margin={{top: "medium"}} style={{fontFamily: "Poppins-Light", fontSize: "11px"}}><Text
                    style={{
                        textTransform: "uppercase",
                        fontFamily: "Poppins-SemiBold",
                        fontSize: "12px"
                    }}>Brief: </Text>How would you package yourself? Does it really represent who you are and what you
                    aspire to be? </Text>
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