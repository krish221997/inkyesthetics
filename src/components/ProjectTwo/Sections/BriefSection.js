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
                        Ampmateur, Tune to produce!
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
                    }}>Brief: </Text>This application is aimed at young and upcoming musicians to empower them to
                    discover and create music. They begin their journey AMPMATEUR by picking their instrument of choice
                    from the given list and move on to understand notes of their own music as well as that of other
                    artists and shape their tunes with precision to perfection. The app doubles as a community forum
                    where budding artists share their craft, queries, and learnings. With the universalised
                    accessibility to recorded songs, artists can avail information on any song, its genre, tuning
                    setting, as well as chords. Since the application aims to not only tune but also help produce, it
                    enables users to also record original music compositions.
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
                }}>Ampmateur, Tune to produce!</Heading>
            )
        },
        b: {
            render: () => (
                <Text margin={{top: "medium"}} style={{fontFamily: "Poppins-Light", fontSize: "11px"}}><Text
                    style={{
                        textTransform: "uppercase",
                        fontFamily: "Poppins-SemiBold",
                        fontSize: "12px"
                    }}>Brief: </Text>This application is aimed at young and upcoming musicians to empower them to
                    discover and create music. They begin their journey AMPMATEUR by picking their instrument of choice
                    from the given list and move on to understand notes of their own music as well as that of other
                    artists and shape their tunes with precision to perfection. The app doubles as a community forum
                    where budding artists share their craft, queries, and learnings. With the universalised
                    accessibility to recorded songs, artists can avail information on any song, its genre, tuning
                    setting, as well as chords. Since the application aims to not only tune but also help produce, it
                    enables users to also record original music compositions.
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