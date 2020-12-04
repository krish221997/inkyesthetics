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
                <Heading level={2} margin={"0px"} style={{
                    textTransform: "uppercase",
                    fontFamily: "Poppins-Light",
                    fontSize: theme.fontSize.smallScreen.xlarge
                }}>Goal</Heading>
            )
        },
        b: {
            render: () => (
                <Box gap={"small"} pad={{top: "medium"}}>
                    <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.smallScreen.xsmall}}>Provide a
                        holistic learning experience for amateur musicians, from developing basic skills to exposure to
                        new music and other artists </Text>
                    <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.smallScreen.xsmall}}>Build a community
                        of artist for cross-communication of knowledge and discovery
                    </Text>
                    <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.smallScreen.xsmall}}>Enable exposure
                        through visibility and interaction with other artists’ craft
                    </Text>
                    <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.smallScreen.xsmall}}>Deliver an
                        engaging app</Text>
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
            value: "Goal"
        },
        b: {
            render: () => (
                <Box gap={"medium"}>
                    <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.largeScreen.xsmall}}>Better learning
                        experience for amateur musicians</Text>
                    <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.largeScreen.xsmall}}>Build a
                        community</Text>
                    <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.largeScreen.xsmall}}>Interact with
                        other peoples craft</Text>
                    <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.largeScreen.xsmall}}>Provide an
                        engaging app</Text>
                </Box>
            )
        }
    }
}

const GoalSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

    return (
        <Box width={"100%"}>
            {
                isTabletOrMobileDevice ? <BlockImageWithHeaderAndSubHeader properties={smallScreenProperties}/> :
                    <BlockImageWithHeaderAndParagraph properties={properties}/>
            }
        </Box>
    )
};

export default GoalSection;


// import BlockImageWithHeaderAndParagraph from "../../shared/Blocks/Block-image-with-header-and-paragraph";
// import React from "react";
// import {Box, Text} from "grommet";
//
// const properties = {
//     images: {
//       a: {
//           url: "/images/goal.svg"
//       }
//     },
//     text: {
//         a: {
//             value: "Goal"
//         },
//         b: {
//             render: () => (
//                     <Box gap={"medium"}>
//                         <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Better learning experience for amateur musicians</Text>
//                         <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Build a community</Text>
//                         <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Interact with other peoples craft</Text>
//                         <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Provide an engaging app</Text>
//                     </Box>
//                 )
//         }
//     }
// }
//
// const GoalSection = () => {
//     return (
//         <Box width={"100%"}>
//             <BlockImageWithHeaderAndParagraph properties={properties}/>
//         </Box>
//     )
// };
//
// export default GoalSection;