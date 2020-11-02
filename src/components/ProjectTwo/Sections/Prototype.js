import {Box, Image, Text} from "grommet";
import React from "react";
import BlockTextWithImage from "../../shared/Blocks/Block-text-with-image";

const PrototypeSection = () => {
    return (
        <BlockTextWithImage height={"200vh"} properties={{
            hideText: true,
            images: {
                a: {
                    url: "url(/images/prototype.svg)"
                }
            },
            text:{
                a: {
                    value: "User Flow"
                }
            }
        }}/>
    )
};

export default PrototypeSection;