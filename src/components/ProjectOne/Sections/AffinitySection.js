import {Box, Image, Text} from "grommet";
import React from "react";
import BlockTextWithImage from "../Blocks/Block-text-with-image";

const AffinitySection = () => {
    return (
        <BlockTextWithImage properties={{
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