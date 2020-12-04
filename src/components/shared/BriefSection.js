import {Box, Text, Heading} from "grommet";
import React from "react";
import {useMediaQuery} from "react-responsive";
import genericTextRenderer from "../../utils/genericTextRenderer";
import theme from "../../styles/theme";

const BriefSection = ({heading = "Creative Collaborations", briefText = "Some brief info"}) => {

    const smallScreenBriefSectionProperties = {
    text: {
        a: {
            render: () => (
                <Heading level={2} margin={"0px"} size={"large"} style={{
                    fontSize: theme.fontSize.smallScreen.xxlarge,
                    textTransform: "uppercase",
                    fontFamily: "Poppins-Light"
                }}>{heading}</Heading>
            )
        },
        b: {
            render: () => (
                <Text margin={{top: "medium"}} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.smallScreen.xsmall}}><Text
                    style={{
                        textTransform: "uppercase",
                        fontFamily: "Poppins-SemiBold",
                        fontSize: theme.fontSize.smallScreen.small
                    }}>Brief: </Text>{briefText}</Text>
            )
        }
    }
};

    const bigScreenBriefSectionProperties = {
    text: {
        a: {
            render: () => (
                <Box wrap width={"50%"} height={"100%"}>
                    <Heading level={1} margin={"0px"}
                             style={{textTransform: "uppercase", fontFamily: "Poppins-Light", fontSize: theme.fontSize.largeScreen.xxlarge}}>
                        {heading}
                    </Heading>
                </Box>
            )
        },
        b: {
            render: () => (
                <Text style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.largeScreen.xsmall}}><Text
                    style={{
                        textTransform: "uppercase",
                        fontFamily: "Poppins-SemiBold",
                        fontSize: theme.fontSize.largeScreen.small
                    }}>Brief: </Text>{briefText}</Text>
            )
        }
    }
};

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    })

    return (
        isTabletOrMobileDevice ?
            <Box align={"start"} justify={"start"} width={"100%"}>
                {genericTextRenderer(smallScreenBriefSectionProperties.text.a)}
                {genericTextRenderer(smallScreenBriefSectionProperties.text.b)}
            </Box>
            :
            <Box width={"100%"} direction={"row"} justify={"start"} align={"start"}>
                <Box wrap align={"start"} justify={"start"} width={"50%"} height={"100%"}>
                    {genericTextRenderer(bigScreenBriefSectionProperties.text.a)}
                </Box>
                <Box wrap align={"end"} justify={"end"} width={"50%"} height={"100%"}>
                    {genericTextRenderer(bigScreenBriefSectionProperties.text.b)}
                </Box>
            </Box>
    )
};

export default BriefSection;