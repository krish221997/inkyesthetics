import {Box, Text} from "grommet";
import React from "react";
import genericTextRenderer from "../../../utils/genericTextRenderer";

const briefSectionProperties = {
    text: {
        a: {
            render: () => (
                <Box wrap width={"65%"} height={"100%"}>
                    <Box gap={"medium"}>
                        <Text style={{
                            textTransform: "uppercase",
                            fontSize: "36px",
                            fontFamily: "Poppins-Medium"
                        }}>Ampmateur,</Text>
                        <Text style={{
                            textTransform: "uppercase",
                            fontSize: "36px",
                            fontFamily: "Poppins-Medium"
                        }}>Tune to produce!</Text>
                    </Box>
                </Box>
            )
        },
        b: {
            render: () => (
                <Box>
                    <Text style={{fontFamily: "Poppins-Light", fontSize: "16px"}}><Text
                        style={{
                            textTransform: "uppercase",
                            fontFamily: "Poppins-SemiBold",
                            fontSize: "18px"
                        }}>Brief: </Text>
                        This application allows young and upcoming musicians to ﬁrst choose their instrument from a list
                        of
                        options and then to understand notes of their own music as well as that of other artists and
                        shape
                        their tunes with precision to perfection. It is also a forum to share their craft, queries, and
                        learnings. Also, this would be an application where the artist can record a music piece if it is
                        an
                        original, then they can access the information about the song, the genre, tuning settings, as
                        well
                        as the chords that need to be played.</Text>
                    <Text style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>The aim of the application is not only
                        to tune but also to help produce.</Text>
                </Box>
            )
        }
    }
};

const BriefSection = ({properties = briefSectionProperties}) => {
    return (
        <Box width={"100%"} direction={"row"} justify={"start"} align={"start"}>
            <Box wrap align={"start"} justify={"start"} width={"50%"} height={"100%"}>
                {genericTextRenderer(properties.text.a)}
            </Box>
            <Box wrap align={"end"} justify={"end"} width={"50%"} height={"100%"}>
                {genericTextRenderer(properties.text.b)}
            </Box>
        </Box>
    )
};

export default BriefSection;