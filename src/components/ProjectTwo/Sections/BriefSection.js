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
                    }}>Brief: </Text>This application allows young and upcoming musicians to ﬁrst choose their
                    instrument from a list
                    of
                    options and then to understand notes of their own music as well as that of other artists and
                    shape
                    their tunes with precision to perfection. It is also a forum to share their craft, queries, and
                    learnings. Also, this would be an application where the artist can record a music piece if it is
                    an
                    original, then they can access the information about the song,
                    the genre, tuning settings, as well as the chords that need to be played. he aim of the application
                    is not only
                    to tune but also to help produce.</Text>
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
                    }}>Brief: </Text>This application allows young and upcoming musicians to ﬁrst choose their
                    instrument from a list
                    of
                    options and then to understand notes of their own music as well as that of other artists and
                    shape
                    their tunes with precision to perfection. It is also a forum to share their craft, queries, and
                    learnings. Also, this would be an application where the artist can record a music piece if it is
                    an
                    original, then they can access the information about the song,
                    the genre, tuning settings, as well as the chords that need to be played. he aim of the application
                    is not only
                    to tune but also to help produce.</Text>
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