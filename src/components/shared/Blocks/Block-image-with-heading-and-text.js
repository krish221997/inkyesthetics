import {Box} from "grommet";
import React from "react";
import genericImageRenderer from "../../../utils/genericImageRenderer";
import genericTextRenderer from "../../../utils/genericTextRenderer";

const BlockImageWithHeadingAndText = ({properties = {images: {a: {render: () => {}}}, text: {a: {render: () => {}}, b: {render: () => {}}}}}) => {

    return (
        <Box align={"center"} justify={"center"}>
            {genericImageRenderer(properties.images.a)}
            {genericTextRenderer(properties.text.a)}
            {genericTextRenderer(properties.text.b)}
        </Box>
    )

};

export default BlockImageWithHeadingAndText;