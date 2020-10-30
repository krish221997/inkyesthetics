import {Box, Image, Text} from "grommet";
import React from "react";
import BlockImageWithHeaderAndSubHeader from "../Blocks/Block-image-with-header-and-subheader";

const properties = {
    images: {
        a: {
            url: "images/ideation.svg"
        }
    },
    text: {
        a: {
            render: () => (
                <Text
                    textAlign={"center"}
                    style={{fontFamily: "Poppins-Medium", fontSize: "30px", textTransform: "uppercase"}}>Ideation</Text>
            )
        },
        b: {
            render: () => (
                <Box gap={"small"}>
                    <Text
                        textAlign={"center"}
                    style={{fontFamily: "Poppins-Light", fontSize: "27px"}}>Create a customisable catalog,
                    which would let the customer tell her their design</Text>
                    <Text
                        textAlign={"center"}
                    style={{fontFamily: "Poppins-Light", fontSize: "27px"}}>preferences and she can design around it,
                    using her design style.</Text>
                </Box>
            )
        }
    }
}

const IdeationSection = () => {
    return (
        <Box width={"100%"} align={"center"} justify={"center"}>
            <Box>
                <BlockImageWithHeaderAndSubHeader properties={properties}/>
            </Box>
            <Box margin={{top: "large"}} gap={"xsmall"}>
                    <Text
                        textAlign={"center"}
                    style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Since Sajnuben uses Whatsapp as her
                        communication medium and understands alphabets and numbers as icons/designs, what if she
                        communicates through code?</Text>
                    <Text
                        textAlign={"center"}
                    style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>The alphabets represent products,
                        the numbers represent designs (traditional/contemporary), and the icons/emojis could be
                        represent the color palette</Text>
                <Text
                    textAlign={"center"}
                    style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Putting them together would create a code.</Text>
            </Box>
            <Box margin={{top: "medium"}} justify={"center"} align={"center"}>
                <Image width={"600px"} src={"/images/catalog.svg"}/>
            </Box>
        </Box>
    )
};

export default IdeationSection;