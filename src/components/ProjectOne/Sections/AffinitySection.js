import {Box, Image, Text} from "grommet";
import React from "react";
import BlockTextWithImage from "../../shared/Blocks/Block-text-with-image";

const AffinitySection = () => {
    return (
        <BlockTextWithImage height={"700px"} properties={{
            images: {
                a: {
                    url: "url(/images/affinity.png)"
                }
            },
            text:{
                a: {
                    value: "Affinity Map"
                }
            }
        }}/>
    )
};

export default AffinitySection;