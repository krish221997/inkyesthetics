import {useMediaQuery} from "react-responsive";
import {Box, Heading, Image} from "grommet";
import React from "react";
import ImageSection from "../../shared/ImageSection";
import theme from "../../../styles/theme";

const boxStyle = (isTabletOrMobileDevice) => {
    return {
        display: "grid",
        "grid-template-columns": "repeat(2, minmax(120px, 693px))",
        "grid-template-rows": "repeat(auto-fit, 1fr)",
        "grid-gap": isTabletOrMobileDevice ? "24px" : "48px",
        "justify-content": "center",
        "align-content": "center"
    }
};

const images = [
    {
        image: "/images/1.jpg"
    },
    {
        image: "/images/2.jpg"
    },
    {
        image: "/images/3.jpg"
    },
    {
        image: "/images/4.jpg"
    },
    {
        image: "/images/5.jpg"
    },
    {
        image: "/images/6.jpg"
    },
    {
        image: "/images/7.jpg"
    },
    {
        image: "/images/8.jpg"
    },
    {
        image: "/images/9.jpg"
    },
    {
        image: "/images/10.jpg"
    },
    {
        image: "/images/11.jpg"
    },
    {
        image: "/images/12.jpg"
    }
]


const CompositionSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

    return (
        <Box align={"center"} justify={"center"} width={"100%"}>
            <Heading margin={{bottom: "large", horizontal: "0px", top: "0px"}}
                     level={2} style={{
                fontFamily: "Poppins-Light",
                fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xlarge : theme.fontSize.largeScreen.xlarge,
                textTransform: "uppercase"
            }}>Compositions</Heading>
            <Box direction={"row"} style={boxStyle(isTabletOrMobileDevice)} as={"div"}>
                {images.map((img, index) => (
                    <>
                        <ImageSection height={691} width={693} image={`url(${img.image})`}
                                      type={"contain"}/>
                    </>
                ))}
            </Box>
        </Box>
    )


};

export default CompositionSection;