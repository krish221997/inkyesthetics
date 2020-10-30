import BlockImageWithHeaderAndParagraph from "../Blocks/Block-image-with-header-and-paragraph";
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
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>People who contact SKV.</Text>
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Judyben's customers.</Text>
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Customers visiting Irfanbhai's shop.</Text>
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Text designers from all over the world.</Text>
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Tourists.</Text>
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