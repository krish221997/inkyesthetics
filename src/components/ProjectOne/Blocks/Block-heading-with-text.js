import {Box, Text} from "grommet";
import React from "react";
import genericTextRenderer from "../../../utils/genericTextRenderer";

const BlockHeadingWithText = ({properties = {text: {a: {value: "Role" }, b: {render: () => {}}}}}) => {

    return (
        <Box gap={"medium"}>
            <Text textAlign={"center"} style={{textTransform: "uppercase", fontFamily: "Poppins-Medium", fontSize: "16px"}}>{properties.text.a.value}</Text>
            {genericTextRenderer(properties.text.b)}
        </Box>
    )

};

export default BlockHeadingWithText;