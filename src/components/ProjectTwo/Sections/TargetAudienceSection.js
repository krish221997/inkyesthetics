import BlockImageWithHeaderAndParagraph from "../../shared/Blocks/Block-image-with-header-and-paragraph";
import React from "react";
import {Box, Text} from "grommet";

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
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>People you simply come for the tuning purpose</Text>
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Learning Experience- Amateur musicians</Text>
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Explorations of others music</Text>
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Interaction with other artist</Text>
                    </Box>
                )
        }
    }
}

const TargetAudienceSection = () => {
    return (
        <Box width={"100%"}>
            <BlockImageWithHeaderAndParagraph properties={properties}/>
        </Box>
    )
};

export default TargetAudienceSection;