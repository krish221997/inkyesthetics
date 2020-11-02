import BlockImageWithHeaderAndParagraph from "../../shared/Blocks/Block-image-with-header-and-paragraph";
import React from "react";
import {Box, Text} from "grommet";

const properties = {
    images: {
      a: {
          url: "/images/goal.svg"
      }
    },
    text: {
        a: {
            value: "Goal"
        },
        b: {
            render: () => (
                    <Box gap={"medium"}>
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Better learning experience for amateur musicians</Text>
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Build a community</Text>
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Interact with other peoples craft</Text>
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Provide an engaging app</Text>
                    </Box>
                )
        }
    }
}

const GoalSection = () => {
    return (
        <Box width={"100%"}>
            <BlockImageWithHeaderAndParagraph properties={properties}/>
        </Box>
    )
};

export default GoalSection;