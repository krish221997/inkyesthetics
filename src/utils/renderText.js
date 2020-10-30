import {Heading, Text} from "grommet";
import React from "react";

const renderText = (textProp) => {
    const {value = "Some text", type = "Text", size = "medium", level = 4, color = "black", weight = "normal", textAlign = "start", alignSelf = "center"} = textProp;
    if (type === "Text") {
        return (
            <Text margin={"0px"} textAlign={textAlign} color={color} size={size} weight={weight}>{value}</Text>
        )
    } else if (type === "Heading") {
        return (
            <Heading margin={"0px"} alignSelf={alignSelf} level={level} color={color} textAlign={textAlign}>{value}</Heading>
        )
    }
};

export default renderText