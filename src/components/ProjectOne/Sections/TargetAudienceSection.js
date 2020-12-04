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
              <Image src={"/images/target.svg"} height={"100px"}/>
          )
      }
  },
    text: {
      a: {
        render: () => (
            <Heading level={2} margin={"0px"} style={{textTransform: "uppercase", fontFamily: "Poppins-Light", fontSize: theme.fontSize.smallScreen.xlarge}}>Target Audience</Heading>
        )
      },
      b: {
            render: () => (
                    <Box gap={"medium"} pad={{top: "medium"}}>
                        <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.smallScreen.xsmall}}>People who contact SKV</Text>
                        <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.smallScreen.xsmall}}>Judyben's customers</Text>
                        <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.smallScreen.xsmall}}>Customers visiting Irfanbhai's shop</Text>
                        <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.smallScreen.xsmall}}>Text designers from all over the world</Text>
                        <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.smallScreen.xsmall}}>Tourists</Text>
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
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.largeScreen.xsmall}}>People who contact SKV</Text>
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.largeScreen.xsmall}}>Judyben's customers</Text>
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.largeScreen.xsmall}}>Customers visiting Irfanbhai's shop</Text>
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.largeScreen.xsmall}}>Text designers from all over the world</Text>
                        <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.largeScreen.xsmall}}>Tourists</Text>
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
