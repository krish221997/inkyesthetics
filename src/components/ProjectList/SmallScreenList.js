import React from "react";
import ImageSection from "../shared/ImageSection";
import ImageWithHeading from "./ImageWithHeading";
import HeaderSmall from "../HeaderSmall";
import {Box} from "grommet";
import TYPES from "../../config/types";
import Footer from "../Footer";
import {Link} from "react-router-dom";

const projectData = [
    {
        image: "/images/list-page-cc.jpg",
        heading: "Fusion",
        url: "https://tanvimehta6697.wixsite.com/my-site"
    },
    {
        image: "/images/list-page-cc.jpg",
        heading: "Creative Collaborations",
        url: `/${TYPES.ROUTES.CREATIVE_COLLABORATIONS}`
    },
    {
        image: "/images/list-page-amp.jpg",
        heading: "Ampmateur",
        url: `/${TYPES.ROUTES.AMPMATEUR}`
    },
    {
        image: "/images/list-page-chatea.jpg",
        heading: "Chatea",
        url: `/${TYPES.ROUTES.CHATEA}`
    },
    {
        image: "/images/list-page-brahma.jpg",
        heading: "Devata Hastas",
        url: `/${TYPES.ROUTES.DEVATA_HASTAS}`
    }
];

const SmallScreenList = () => {
    return (
        <>
            <Box pad={"large"}>
                <HeaderSmall/>
            </Box>
            {projectData.map((data, key) => (
                <a href={data.url} style={{textDecoration: "none"}}>
                    <div style={{marginBottom: "70px"}}>
                        <ImageWithHeading image={data.image} heading={data.heading} url={data.url}/>
                </div>
                </a>
            ))}
            <Box width={"100%"} direction={"column"}
                 pad={{horizontal: "large", bottom: "large"}}>
                <Footer/>
            </Box>
        </>
    )

};

export default SmallScreenList;