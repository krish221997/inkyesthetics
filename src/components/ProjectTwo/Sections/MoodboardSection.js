import {Box, Image, Text} from "grommet";
import React from "react";
import BlockTextWithImage from "../../shared/Blocks/Block-text-with-image";

const MoodBoardSection = () => {
    return (
        <BlockTextWithImage properties={{
            images: {
                a: {
                    url: "url(/images/moodboard.svg)"
                }
            },
            text:{
                a: {
                    value: "Moodboard"
                }
            }
        }}/>
    )
};

export default MoodBoardSection;