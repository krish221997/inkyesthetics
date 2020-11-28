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
        image: "/images/list-page-cc.svg",
        heading: "Creative Collaborations",
        url: `/${TYPES.ROUTES.CREATIVE_COLLABORATIONS}`
    },
    {
        image: "/images/list-page-ampmateur.svg",
        heading: "Ampmateur, Tune to produce!",
        url: `/${TYPES.ROUTES.AMPMATEUR}`
    },
    {
        image: "/images/list-page-chatea.svg",
        heading: "Chatea : Package Yourself",
        url: `/${TYPES.ROUTES.CHATEA}`
    },
    {
        image: "/images/list-page-brahma.svg",
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
                <div style={{marginBottom: "70px"}}>
                    <Link to={data.url} style={{textDecoration: "none"}}>
                        <ImageWithHeading image={data.image} heading={data.heading} url={data.url}/>
                    </Link>
                </div>
            ))}
            <Box width={"100%"} direction={"column"}
                 pad={{horizontal: "large", bottom: "large"}}>
                <Footer/>
            </Box>
        </>
    )

};

export default SmallScreenList;