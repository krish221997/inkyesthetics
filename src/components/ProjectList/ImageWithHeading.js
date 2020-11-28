import React from "react";
import ImageSection from "../shared/ImageSection";
import {Box, Heading, Text} from "grommet";

const ImageWithHeading = ({image, heading, url}) => {

    return (
        <>
            <div style={{margin: "0 auto"}}>
                <ImageSection height={888} width={888} image={`url(${image})`} type={"contain"}/>
            </div>
            <Box width={"100%"} align={"start"} justify={"center"} pad={{top: "large", horizontal: "large"}}>
                <Box width={"80%"}>
                    <Heading color={"black"} level={1} margin={"0px"}
                         style={{textTransform: "uppercase", fontFamily: "Poppins-Light", fontSize: "24px"}}>
                        {heading}
                </Heading>
                </Box>
            </Box>
        </>
    )

};

export default ImageWithHeading;