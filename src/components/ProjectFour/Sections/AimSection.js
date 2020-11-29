import BlockImageWithHeaderAndParagraph from "../../shared/Blocks/Block-image-with-header-and-paragraph";
import React from "react";
import {Box, Heading, Image, Text} from "grommet";
import {useMediaQuery} from "react-responsive";
import BlockImageWithHeaderAndSubHeader from "../../shared/Blocks/Block-image-with-header-and-subheader";


const smallScreenProperties = {
    images: {
        a: {
            render: () => (
                <Image src={"/images/goal.svg"} height={"100px"}/>
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
                }}>Aim</Heading>
            )
        },
        b: {
            render: () => (
                <Box gap={"medium"} pad={{top: "medium"}}>
                    <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: "11px"}}>TThis project
                        aims to deconstruct the concept of Devatha hasthas.</Text>
                    <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: "11px"}}>The text explains
                        to the dancer how to denote each god or goddess through the body, including the exact mudra
                        (gesture) to be held as well as its position in relation to the body; an important aid as many
                        pieces are narratives on the Gods. </Text>
                    <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: "11px"}}>TThe visual
                        compositions serve as mnemonic devices, for the names and meanings of the shloka and some
                        information on the deity. </Text>
                </Box>
            )
        }
    }
};

const properties = {
    images: {
        a: {
            url: "/images/goal.svg"
        }
    },
    text: {
        a: {
            value: "Aim"
        },
        b: {
            render: () => (
                <Box gap={"medium"}>
                    <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>TThis project aims
                        to deconstruct the concept of Devatha hasthas.</Text>
                    <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>The text explains
                        to the dancer how to denote each god or goddess through the body, including the exact mudra
                        (gesture) to be held as well as its position in relation to the body; an important aid as many
                        pieces are narratives on the Gods. </Text>
                    <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>TThe visual
                        compositions serve as mnemonic devices, for the names and meanings of the shloka and some
                        information on the deity. </Text>
                </Box>
            )
        }
    }
}

const AimSection = () => {

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

export default AimSection;
