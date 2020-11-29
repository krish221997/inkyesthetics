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
            <Heading level={2} margin={"0px"} style={{textTransform: "uppercase", fontFamily: "Poppins-Light", fontSize: "20px"}}>Target Audience</Heading>
        )
      },
      b: {
            render: () => (
                    <Box gap={"small"} pad={{top: "medium"}}>
                        <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: "11px"}}>Instrumentalists, here for tuning purposes </Text>
                        <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: "11px"}}>Amatuer musicians, here for the learning experience</Text>
                        <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: "11px"}}>Music enthusiasts, here for explorations and new music</Text>
                        <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: "11px"}}>Community artists, here for interactions and engagement</Text>
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
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Instrumentalists, here for tuning purposes </Text>
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Amatuer musicians, here for the learning experience</Text>
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Music enthusiasts, here for explorations and new music</Text>
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Community artists, here for interactions and engagement</Text>
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
                isTabletOrMobileDevice ? <BlockImageWithHeaderAndSubHeader properties={smallScreenProperties}/> : <BlockImageWithHeaderAndParagraph properties={properties}/>
            }
        </Box>
    )
};

export default TargetAudienceSection;