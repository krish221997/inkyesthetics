import {Box, Image, Text} from "grommet";
import React from "react";
import ImageSection from "../Sections/ImageSection";

const BlockTextWithImage = ({properties = {images: {a: {url: ""}}, text: {a: {value: "Affinity Map"}}}}) => {
    return (
        <Box gap={"large"}>
            <Box align={"center"} justify={"center"}>
                <Text style={{fontFamily: "Poppins-Medium", fontSize: "30px", textTransform: "uppercase"}}>{properties.text.a.value}</Text>
            </Box>
            <ImageSection image={properties.images.a.url}/>
        </Box>
    )
};

export default BlockTextWithImage;