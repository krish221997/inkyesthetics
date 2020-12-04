import BlockImageWithHeaderAndParagraph from "../../shared/Blocks/Block-image-with-header-and-paragraph";
import React from "react";
import {Box, Heading, Image, Text} from "grommet";
import {useMediaQuery} from "react-responsive";
import BlockImageWithHeaderAndSubHeader from "../../shared/Blocks/Block-image-with-header-and-subheader";
import theme from "../../../styles/theme";

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
                    fontSize: theme.fontSize.smallScreen.xlarge
                }}>Functions</Heading>
            )
        },
        b: {
            render: () => (
                <Box gap={"medium"} pad={{top: "medium"}}>
                    <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.smallScreen.xsmall}}>Tuning guide for
                        string instruments</Text>
                    <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.smallScreen.xsmall}}>Discover new
                        music by the app’s record and recognise feature</Text>
                    <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.smallScreen.xsmall}}>Learn music from
                        other professional and amateur artists by picking a song and choosing your instrument for the
                        corresponding chords
                    </Text>
                    <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.smallScreen.xsmall}}>Share craft and
                        queries with the rest of the musical community
                    </Text>
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
                    <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.largeScreen.xsmall}}>Tuning guide for
                        string instruments</Text>
                    <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.largeScreen.xsmall}}>Discover new music
                        by the app’s record and recognise feature</Text>
                    <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.largeScreen.xsmall}}>Learn music from
                        other professional and amateur artists by picking a song and choosing your instrument for the
                        corresponding chords
                    </Text>
                    <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.largeScreen.xsmall}}>Share craft and
                        queries with the rest of the musical community
                    </Text>
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