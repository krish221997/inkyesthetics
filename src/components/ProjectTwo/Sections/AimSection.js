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
              <Image src={"/images/goal.svg"} height={"100px"}/>
          )
      }
  },
    text: {
      a: {
        render: () => (
            <Heading level={2} margin={"0px"} style={{textTransform: "uppercase", fontFamily: "Poppins-Light", fontSize: theme.fontSize.smallScreen.xlarge}}>Aim</Heading>
        )
      },
      b: {
            render: () => (
                    <Box gap={"medium"} pad={{top: "medium"}}>
                        <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.smallScreen.xsmall}}>Better learning experience for amateur musicians</Text>
                        <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.smallScreen.xsmall}}>Build a community</Text>
                        <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.smallScreen.xsmall}}>Interact with other peoples craft</Text>
                        <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.smallScreen.xsmall}}>Provide an engaging app</Text>
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
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.largeScreen.xsmall}}>Better learning experience for amateur musicians</Text>
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.largeScreen.xsmall}}>Build a community</Text>
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.largeScreen.xsmall}}>Interact with other peoples craft</Text>
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.largeScreen.xsmall}}> Provide an engaging app</Text>
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
                isTabletOrMobileDevice ? <BlockImageWithHeaderAndSubHeader properties={smallScreenProperties}/> : <BlockImageWithHeaderAndParagraph properties={properties}/>
            }
        </Box>
    )
};

export default AimSection;
