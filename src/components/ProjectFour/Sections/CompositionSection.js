import {useMediaQuery} from "react-responsive";
import {Box, Heading, Image} from "grommet";
import React from "react";
import ImageSection from "../../shared/ImageSection";


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
        image: "/images/composition-1.svg"
    },
    {
        image: "/images/composition-2.svg"
    },
    {
        image: "/images/composition-3.svg"
    },
    {
        image: "/images/composition-4.svg"
    },
    {
        image: "/images/composition-5.svg"
    },
    {
        image: "/images/composition-6.svg"
    },
    {
        image: "/images/composition-7.svg"
    },
    {
        image: "/images/composition-8.svg"
    },
    {
        image: "/images/composition-9.svg"
    },
    {
        image: "/images/composition-10.svg"
    }
]


const CompositionSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

    return (
        <Box align={"center"} justify={"center"} width={"100%"}>
            <Heading margin={{bottom: isTabletOrMobileDevice ? "20px" : "40px", horizontal: "0px", top: "0px"}}
                     level={2} style={{
                fontFamily: "Poppins-Light",
                fontSize: isTabletOrMobileDevice ? "20px" : "30px",
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