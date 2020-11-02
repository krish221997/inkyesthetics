import {Box, Image, Text} from "grommet";
import React from "react";
import BlockTextWithImage from "../../shared/Blocks/Block-text-with-image";

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
        }} type={"contain"}/>
    )
};

export default EmpathySection;