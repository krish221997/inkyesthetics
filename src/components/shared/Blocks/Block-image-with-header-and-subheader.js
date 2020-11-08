import {Box, Image} from "grommet";
import React from "react";
import genericTextRenderer from "../../../utils/genericTextRenderer";
import genericImageRenderer from "../../../utils/genericImageRenderer";

const BlockImageWithHeaderAndSubHeader = ({properties = {text: {a: {render: () => {}}, b: {render: () => {}}}, images: {a: {render: () => {}}}}}) => {

    return (
        <Box width={"100%"} align={"center"} justify={"center"}>
            {genericImageRenderer(properties.images.a)}
            <Box margin={{top: "medium"}}>
                {genericTextRenderer(properties.text.a)}
            </Box>
            <Box margin={{top: "medium"}}>
                {genericTextRenderer(properties.text.b)}
            </Box>
        </Box>
    )
};

export default BlockImageWithHeaderAndSubHeader