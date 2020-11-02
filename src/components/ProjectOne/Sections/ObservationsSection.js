import BlockImageWithHeaderAndParagraph from "../../shared/Blocks/Block-image-with-header-and-paragraph";
import React from "react";
import {Box, Text} from "grommet";

const properties = {
    images: {
      a: {
          url: "/images/observations.svg"
      }
    },
    text: {
        a: {
            value: "Observations"
        },
        b: {
            render: () => (
                    <Box gap={"medium"}>
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>She understands alphabets and numbers and icons</Text>
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>She is extremely motivated to work but only from home</Text>
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>She has restrictions on knowing tailoring of products</Text>
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>She is unaware about the market, however she understands customers taste</Text>
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