import {Box, Image, Text} from "grommet";
import React from "react";
import genericTextRenderer from "../../../utils/genericTextRenderer";

const BlockImageWithText = ({properties = {images: {a: {url: ""}}, text: {a: {render: () => {}}}}}) => {

    return (
        <Box gap={"medium"}>
            <Box align={"center"} justify={"center"}>
                <Image width={"120px"} height={"120px"} src={properties.images.a.url}/>
            </Box>
            {genericTextRenderer(properties.text.a)}
        </Box>
    )

};

export default BlockImageWithText;