import {Box, Image, Text} from "grommet";
import React from "react";
import genericTextRenderer from "../../../utils/genericTextRenderer";

const BlockImageWithText = ({properties = {images: {a: {url: ""}}, text: {a: {render: () => {}}}}}) => {

    return (
        <Box gap={"medium"} justify={"center"} align={"center"}>
            <Box>
                <Image width={"120px"} height={"120px"} src={properties.images.a.url}/>
            </Box>
            <Box width={"250px"}>
                {genericTextRenderer(properties.text.a)}
            </Box>
        </Box>
    )

};

export default BlockImageWithText;