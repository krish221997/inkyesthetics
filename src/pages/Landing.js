import {Box} from "grommet";
import React from "react";
import Header from "../components/Header";
import HeadingWithImage from "../components/Landing/HeadingWithImage";
import Footer from "../components/Footer";

const Landing = () => {
    return (
        <Box width={"100%"} direction={"column"} pad={{horizontal: "large", vertical: "large"}}>
            <Box>
                <Header/>
            </Box>
            <Box pad={{top: "medium"}}>
                <HeadingWithImage/>
            </Box>
            <Box pad={{top: "xlarge"}}>
                <Footer/>
            </Box>
        </Box>
    )
};

export default Landing;