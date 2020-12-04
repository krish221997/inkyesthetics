import {Box, Heading, Text} from "grommet";
import React from "react";
import genericTextRenderer from "../../../utils/genericTextRenderer";
import {useMediaQuery} from "react-responsive";
import theme from "../../../styles/theme";

const BlockHeadingWithText = ({
                                  properties = {
                                      text: {
                                          a: {value: "Role"}, b: {
                                              render: () => {
                                              }
                                          }
                                      }
                                  }
                              }) => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

    return (
        <Box gap={"xxsmall"} align={"center"} justify={"center"}>
            <Heading margin={"0px"} textAlign={"center"} style={{
                textTransform: "uppercase",
                fontFamily: "Poppins-Light",
                fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall
            }}>{properties.text.a.value}</Heading>
            <Box width={"400px"} wrap>
                {genericTextRenderer(properties.text.b)}
            </Box>
        </Box>
    )

};

export default BlockHeadingWithText;