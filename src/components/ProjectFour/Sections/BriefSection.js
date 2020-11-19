import {Box, Text, Heading} from "grommet";
import React from "react";
import genericTextRenderer from "../../../utils/genericTextRenderer";
import {useMediaQuery} from "react-responsive";

const brief = "Deconstruction, as this project treats it, is largely associated with the concept of unfolding, " +
    "peeling back layers to examine how something has been created, has been constructed. It aims to answer these " +
    "questions: why has it been put together the way it is? What is the purpose of it being built in this way?\n" +
    "In the field of Visual Communication and Strategic Branding, deconstruction can apply to the breaking down of " +
    "a brand into its basic elements: an idea, its conception, its production, and its execution. \n" +
    "The aim of this project is to deconstruct the ‘Devatha Hasthas’ of Bharatnatyam. The project examines the hand " +
    "gestures or Hasthas, the incantations or shlokas that describe them, and their attached significance to the god " +
    "or Devatha, communicates the same.";

const name = "Brief: "

const bigScreenBriefSectionProperties = {
    text: {
        a: {
            render: () => (
                <Box wrap width={"50%"} height={"100%"}>
                    <Heading level={1} margin={"0px"}
                             style={{textTransform: "uppercase", fontFamily: "Poppins-Light", fontSize: "36px"}}>
                        Devata Hastas
                    </Heading>
                </Box>
            )
        },
        b: {
            render: () => (
                <Text style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>
                    <Text
                    style={{
                        textTransform: "uppercase",
                        fontFamily: "Poppins-SemiBold",
                        fontSize: "18px"
                    }}>{name}
                    </Text>
                    {brief}
                </Text>
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
                }}>Devata Hastas</Heading>
            )
        },
        b: {
            render: () => (
                <Text margin={{top: "medium"}} style={{fontFamily: "Poppins-Light", fontSize: "11px"}}><Text
                    style={{
                        textTransform: "uppercase",
                        fontFamily: "Poppins-SemiBold",
                        fontSize: "12px"
                    }}>{name} </Text>{brief}</Text>
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