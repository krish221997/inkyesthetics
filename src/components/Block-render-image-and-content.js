import {Box, Image} from "grommet";
import React from "react";
import deepMerge from "deepmerge";
import {useMediaQuery} from "react-responsive";


const defaultProps = {

        properties: {
            text: {
            a: {
                render: () => {
                    return (
                        <Box>
                            About me Content
                        </Box>
                    )
                }
            }
        },
        images: {
            a: {
                render: () => {
                    return (
                            <img style={{maxWidth: "100%", maxHeight: "100%"}} src={"/images/about-me.jpg"}/>
                    )
                }
            }
        }
        }
    };


const BlockRenderImageAndContent = ({properties = defaultProps.properties}) => {

     const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1150px)'
    });

    properties = properties ? deepMerge(defaultProps.properties, properties) : defaultProps.properties;

    return (
        <Box height={{min: "max-content"}} width={"100%"} justify={"center"} align={"center"} direction={isTabletOrMobileDevice ? "column" : "row"} gap={'large'}>
            <Box justify={"center"} align={"center"} width={isTabletOrMobileDevice ? "" : "50%"} wrap>
                {properties.images.a.render()}
            </Box>
            <Box justify={"center"} margin={{top: isTabletOrMobileDevice ? "large" : ""}} align={"start"} width={isTabletOrMobileDevice ? "" : "50%"} wrap>

                {properties.text.a.render()}
            </Box>
        </Box>
    )

};

export default BlockRenderImageAndContent;