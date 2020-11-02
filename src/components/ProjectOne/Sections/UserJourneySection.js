import {Box, Image, Text} from "grommet";
import React from "react";
import BlockTextWithImage from "../../shared/Blocks/Block-text-with-image";

const UserJourneySection = () => {
    return (
        <BlockTextWithImage properties={{
            images: {
                a: {
                    url: "url(/images/userJourney.png)"
                }
            },
            text:{
                a: {
                    value: "User Journey"
                }
            }
        }}/>
    )
};

export default UserJourneySection;