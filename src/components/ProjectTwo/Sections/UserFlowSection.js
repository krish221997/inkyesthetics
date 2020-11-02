import {Box, Image, Text} from "grommet";
import React from "react";
import BlockTextWithImage from "../../shared/Blocks/Block-text-with-image";

const UserFlowSection = () => {
    return (
        <BlockTextWithImage height={"680px"} properties={{
            hideText: true,
            images: {
                a: {
                    url: "url(/images/flow.svg)"
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

export default UserFlowSection;