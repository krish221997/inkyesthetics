import React from "react";
import {Box, Image, Text} from "grommet";
import BlockImageWithHeaderAndSubHeader from "../../shared/Blocks/Block-image-with-header-and-subheader";
import BlockImageWithHeadingAndText from "../../shared/Blocks/Block-image-with-heading-and-text";

const data = {
    image: <Image src={"/images/face.svg"}/>,
    heading: <Text textAlign={"center"} margin={{top: "medium"}}
                   style={{fontSize: "18px", fontFamily: "Poppins-Medium"}}>Persona</Text>,
    subHeading:
        <Box align={"center"} justify={"center"} wrap width={"800px"}>
            <Text textAlign={"center"} margin={{top: "medium"}} style={{fontSize: "16px", fontFamily: "Poppins-Light"}}>Shreyans
                is a 24 year old Industrial Designer</Text>
            <Text textAlign={"center"} margin={{top: "medium"}} style={{fontSize: "16px", fontFamily: "Poppins-Light"}}>He
                is extremely shy and likes to keep to himself</Text>
            <Text textAlign={"center"} margin={{top: "medium"}} style={{fontSize: "16px", fontFamily: "Poppins-Light"}}>He
                likes exploring new things in his free time</Text>
            <Text textAlign={"center"} margin={{top: "medium"}} style={{fontSize: "16px", fontFamily: "Poppins-Light"}}>After
                a long day of work he looks forward to his workout and spending time by himself</Text>
            <Text textAlign={"center"} margin={{top: "medium"}} style={{fontSize: "16px", fontFamily: "Poppins-Light"}}>SHe
                has recently started to learn the ukulele, that his sister has lying at home</Text>
            <Text textAlign={"center"} margin={{top: "medium"}} style={{fontSize: "16px", fontFamily: "Poppins-Light"}}>He
                currently learns it by watching videos and trying chords himself</Text>
        </Box>
}


const PersonaSection = () => {
    return (
        <BlockImageWithHeadingAndText properties={{
                                images: {
                                    a: {
                                        render: () => data.image
                                    }
                                },
                                text: {
                                    a: {
                                        render: () => data.heading
                                    },
                                    b: {
                                        render: () => data.subHeading
                                    }
                                }
                            }}/>
    )
};

export default PersonaSection;