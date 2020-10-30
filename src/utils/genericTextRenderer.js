import renderText from "./renderText";
import {Box} from "grommet";
import React from "react";

const genericTextRenderer = (textProp) => {


    if (textProp.render && typeof (textProp.render) === "function") {
        return textProp.render()
    } else {
        return (
            renderText(textProp)
        )
    }
};

export default genericTextRenderer