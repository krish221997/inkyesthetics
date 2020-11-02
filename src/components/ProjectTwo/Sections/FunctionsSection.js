import BlockImageWithHeaderAndParagraph from "../../shared/Blocks/Block-image-with-header-and-paragraph";
import React from "react";
import {Box, Text} from "grommet";

const properties = {
    images: {
        a: {
            url: "/images/functions.svg"
        }
    },
    text: {
        a: {
            value: "Functions"
        },
        b: {
            render: () => (
                <Box gap={"medium"}>
                    <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Tuning Setting -
                        for string instruments.</Text>
                    <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Discover and Learn
                        music by artist- If you are in a space and you record a song by some artist, you will
                        immediately know what song it is, you can then choose your instrument, tune it and learn the
                        chords (the app detects chords of songs that have been shared on it, hence you can learn music
                        that is produced by other amateur musicians).</Text>
                    <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Share - A platform
                        you can share your craft with the rest of the community.</Text>
                </Box>
            )
        }
    }
}

const ObservationsSection = () => {
    return (
        <Box width={"100%"}>
            <BlockImageWithHeaderAndParagraph properties={properties}/>
        </Box>
    )
};

export default ObservationsSection;