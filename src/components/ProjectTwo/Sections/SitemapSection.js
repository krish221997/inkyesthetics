import {Box, Image, Text} from "grommet";
import React from "react";
import BlockTextWithImage from "../../shared/Blocks/Block-text-with-image";

const SitemapSection = () => {
    return (
        <BlockTextWithImage height={"170vh"} properties={{
            images: {
                a: {
                    url: "url(/images/sitemap.svg)"
                }
            },
            text:{
                a: {
                    value: "Sitemap"
                }
            }
        }}/>
    )
};

export default SitemapSection;