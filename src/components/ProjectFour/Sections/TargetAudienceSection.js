import BlockImageWithHeaderAndParagraph from "../../shared/Blocks/Block-image-with-header-and-paragraph";
import React from "react";
import {Box, Heading, Image, Text} from "grommet";
import {useMediaQuery} from "react-responsive";
import BlockImageWithHeaderAndSubHeader from "../../shared/Blocks/Block-image-with-header-and-subheader";


const smallScreenProperties = {
    images: {
        a: {
            render: () => (
                <Image src={"/images/target.svg"} height={"100px"}/>
            )
        }
    },
    text: {
        a: {
            render: () => (
                <Heading level={2} margin={"0px"}
                         style={{textTransform: "uppercase", fontFamily: "Poppins-Light", fontSize: "20px"}}>Target
                    Audience</Heading>
            )
        },
        b: {
            render: () => (
                <Box gap={"small"} pad={{top: "medium"}}>
                    <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: "11px"}}>Students of
                        Bharatnatyam</Text>
                    <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: "11px"}}>Proficient
                        dancers and practitioners of classical dances </Text>
                    <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: "11px"}}>People who would
                        enjoy having or reading an artistic coffee-table book related to Indian mythology.
                    </Text>
                </Box>
            )
        }
    }
};

const properties = {
    images: {
        a: {
            url: "/images/target.svg"
        }
    },
    text: {
        a: {
            value: "Target Audience"
        },
        b: {
            render: () => (
                <Box gap={"medium"}>
                    <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Students of
                        Bharatnatyam</Text>
                    <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Proficient dancers
                        and practitioners of classical dances </Text>
                    <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>People who would
                        enjoy having or reading an artistic coffee-table book related to Indian mythology.</Text>
                </Box>
            )
        }
    }
}

const TargetAudienceSection = () => {

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

export default TargetAudienceSection;