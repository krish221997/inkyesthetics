import {Box, Image, Text} from "grommet";
import React from "react";
import genericTextRenderer from "../../../utils/genericTextRenderer";

const BlockImageWithHeaderAndParagraph = ({properties = {images: {a: {url: ""}}, text: {a: {value: "Observations"}, b: {render: () => {}}}}}) => {
    return (
        <Box width={"100%"} align={"center"} justify={"center"} direction={"row"} gap={"large"}>
             <Image src={properties.images.a.url}/>
                <Box justify={"start"} align={"start"} gap={"large"}>
                    <Text style={{textTransform: "uppercase", fontFamily: "Poppins-Medium", fontSize: "30px"}}>{properties.text.a.value}</Text>
                    {genericTextRenderer(properties.text.b)}
                </Box>
        </Box>
    )
};

export default BlockImageWithHeaderAndParagraph;