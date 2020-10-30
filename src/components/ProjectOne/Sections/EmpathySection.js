import {Box, Image, Text} from "grommet";
import React from "react";
import BlockTextWithImage from "../Blocks/Block-text-with-image";

const EmpathySection = () => {
    return (
        <BlockTextWithImage properties={{
            images: {
                a: {
                    url: "url(/images/empathy.svg)"
                }
            },
            text:{
                a: {
                    value: "Empathy Map"
                }
            }
        }}/>
    )
};

export default EmpathySection;