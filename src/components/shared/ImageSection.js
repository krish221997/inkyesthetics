import React from "react";
import {Box} from "grommet";


const ImageSection = ({image = "", height = "100vh", type = "cover"}) => {
    return (
        <Box background={{image: image, size: type, position: "center center"}}  height={height} width={"100%"}>
        </Box>
    )
};

export default ImageSection;