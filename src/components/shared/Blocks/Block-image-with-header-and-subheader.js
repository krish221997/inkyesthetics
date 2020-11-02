import {Box, Image} from "grommet";
import React from "react";
import genericTextRenderer from "../../../utils/genericTextRenderer";

const BlockImageWithHeaderAndSubHeader = ({properties = {text: {a: {render: () => {}}, b: {render: () => {}}}, images: {a: {url: ""}}}}) => {
    return (
        <Box width={"100%"} align={"center"} justify={"center"}>
            <Image src={properties.images.a.url}/>
            <Box margin={{top: "small"}}>
                {genericTextRenderer(properties.text.a)}
            </Box>
            <Box margin={{top: "medium"}}>
                {genericTextRenderer(properties.text.b)}
            </Box>
        </Box>
    )
};

export default BlockImageWithHeaderAndSubHeader