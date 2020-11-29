import {Box, Heading, Image, Text} from "grommet";
import React from "react";
import genericTextRenderer from "../../../utils/genericTextRenderer";
import {useMediaQuery} from "react-responsive";

const BlockImageWithHeaderAndParagraph = ({properties = {images: {a: {url: ""}}, text: {a: {value: "Observations"}, b: {render: () => {}}}}}) => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    })

    return (
        <Box width={"100%"} align={"center"} justify={"center"}>
            <Box width={"900px"} direction={"row"} gap={"large"} align={"center"} justify={"center"}>
                <Image src={properties.images.a.url}/>
                 <Box justify={"center"} align={"start"} wrap gap={"medium"}>
                      <Heading margin={"0px"} level={2} style={{textTransform: "uppercase", fontFamily: "Poppins-Light", fontSize: isTabletOrMobileDevice ? "20px" : "30px"}}>{properties.text.a.value}</Heading>
                     {genericTextRenderer(properties.text.b)}
                 </Box>
            </Box>
        </Box>
    )
};

export default BlockImageWithHeaderAndParagraph;