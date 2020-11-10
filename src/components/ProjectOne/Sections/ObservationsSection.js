import BlockImageWithHeaderAndParagraph from "../../shared/Blocks/Block-image-with-header-and-paragraph";
import React from "react";
import {Box, Heading, Image, Text} from "grommet";
import {useMediaQuery} from "react-responsive";
import BlockImageWithHeaderAndSubHeader from "../../shared/Blocks/Block-image-with-header-and-subheader";


const smallScreenProperties = {
  images: {
      a: {
          render: () => (
              <Image src={"/images/observations.svg"} height={"100px"}/>
          )
      }
  },
    text: {
      a: {
        render: () => (
            <Heading level={2} margin={"0px"} style={{textTransform: "uppercase", fontFamily: "Poppins-Light", fontSize: "20px"}}>Observations</Heading>
        )
      },
      b: {
            render: () => (
                    <Box gap={"small"} pad={{top: "medium"}}>
                        <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: "11px"}}>She understands alphabets and numbers and icons</Text>
                        <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: "11px"}}>She is extremely motivated to work but only from home</Text>
                        <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: "11px"}}>She has restrictions on knowing tailoring of products</Text>
                        <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: "11px"}}>She is unaware about the market, however she understands customers taste</Text>
                    </Box>
                )
        }
    }
};

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

export default ObservationsSection;