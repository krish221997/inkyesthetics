import {Image} from "grommet";
import React from "react";

const genericImageRenderer = (imageProp) => {
    if (imageProp.render && typeof (imageProp.render) === "function") {
        return imageProp.render()
    } else {
        return (
            <Image src={imageProp.url} width={"100%"}/>
        )
    }
};

export default genericImageRenderer