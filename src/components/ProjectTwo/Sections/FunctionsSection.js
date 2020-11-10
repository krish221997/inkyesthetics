import BlockImageWithHeaderAndParagraph from "../../shared/Blocks/Block-image-with-header-and-paragraph";
import React from "react";
import {Box, Heading, Image, Text} from "grommet";
import {useMediaQuery} from "react-responsive";
import BlockImageWithHeaderAndSubHeader from "../../shared/Blocks/Block-image-with-header-and-subheader";


const smallScreenProperties = {
    images: {
        a: {
            render: () => (
                <Image src={"/images/functions.svg"} height={"100px"}/>
            )
        }
    },
    text: {
        a: {
            render: () => (
                <Heading level={2} margin={"0px"} style={{
                    textTransform: "uppercase",
                    fontFamily: "Poppins-Light",
                    fontSize: "20px"
                }}>Functions</Heading>
            )
        },
        b: {
            render: () => (
                <Box gap={"medium"} pad={{top: "medium"}}>
                    <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: "11px"}}>Tuning Setting -
                         for string instruments.</Text>
                    <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: "11px"}}>Discover and Learn
                         music by artist- If you are in a space and you record a song by some artist, you will
                         immediately know what song it is, you can then choose your instrument, tune it and learn the
                         chords (the app detects chords of songs that have been shared on it, hence you can learn music
                         that is produced by other amateur musicians)</Text>
                    <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: "11px"}}>Share - A platform
                         you can share your craft with the rest of the community</Text>
                </Box>
            )
        }
    }
};

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
                         that is produced by other amateur musicians)</Text>
                    <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Share - A platform
                         you can share your craft with the rest of the community</Text>
                </Box>
            )
        }
    }
}

const FunctionsSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

    return (
        <Box width={"100%"}>
            {
                isTabletOrMobileDevice ? <BlockImageWithHeaderAndSubHeader properties={smallScreenProperties}/> :
                    <BlockImageWithHeaderAndParagraph properties={properties}/>
            }
        </Box>
    )
};

export default FunctionsSection;