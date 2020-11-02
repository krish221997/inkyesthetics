import {Box, Text} from "grommet";
import React from "react";
import genericTextRenderer from "../../../utils/genericTextRenderer";

const BlockHeadingWithText = ({properties = {text: {a: {value: "Role" }, b: {render: () => {}}}}}) => {

    return (
        <Box gap={"medium"} align={"center"} justify={"center"}>
            <Text textAlign={"center"} style={{textTransform: "uppercase", fontFamily: "Poppins-Medium", fontSize: "16px"}}>{properties.text.a.value}</Text>
            <Box width={"400px"} wrap>
                {genericTextRenderer(properties.text.b)}
            </Box>
        </Box>
    )

};

export default BlockHeadingWithText;