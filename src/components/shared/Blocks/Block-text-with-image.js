import {Box, Image, Text} from "grommet";
import React from "react";
import ImageSection from "../ImageSection";

const BlockTextWithImage = ({height = "100vh", properties = {hideText: false, images: {a: {url: ""}}, text: {a: {value: "Affinity Map"}}}, type = "contain"}) => {
    return (
        <Box gap={!properties.hideText ? "large" : ""}>
            {!properties.hideText && <Box align={"center"} justify={"center"}>
                <Text style={{
                    fontFamily: "Poppins-Medium",
                    fontSize: "30px",
                    textTransform: "uppercase"
                }}>{properties.text.a.value}</Text>
            </Box>}
            <Box>
                <ImageSection image={properties.images.a.url} type={type} height={height}/>
            </Box>
        </Box>
    )
};

export default BlockTextWithImage;