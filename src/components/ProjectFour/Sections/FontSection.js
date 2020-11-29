import {useMediaQuery} from "react-responsive";
import {Box, Heading, Image} from "grommet";
import React from "react";
import ImageSection from "../../shared/ImageSection";


// const boxStyle = {
//   display: "grid",
//   "grid-template-columns": "repeat(auto-fit, minmax(200px, 1fr))",
//   "grid-template-rows": "repeat(1, 1fr)"
// };
//
// const smallBoxStyle = {
//   display: "grid",
//   "grid-template-columns": "repeat(auto-fit, minmax(200px, 1fr))",
//   "grid-template-rows": "repeat(1, minmax(150px, 150px))",
// };

const images = [
    {
        image: "/images/cardo.svg"
    },
    {
        image: "/images/p3-font.svg"
    }
]

const boxStyle = (isTabletOrMobileDevice) => {
    return {
        display: "grid",
        "grid-template-columns": "repeat(2, minmax(120px, 821px))",
        "grid-template-rows": "repeat(auto-fit, 1fr)",
        "grid-gap": isTabletOrMobileDevice ? "24px" : "48px",
        "justify-content": "center",
        "align-content": "center"
    }
};


const FontSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

    return (
        <Box width={"100%"} justify={"center"} align={"center"}>
            <Heading margin={{bottom: isTabletOrMobileDevice ? "20px" : "100px", horizontal: "0px", top: "0px"}}
                     level={2} style={{
                fontFamily: "Poppins-Light",
                fontSize: isTabletOrMobileDevice ? "20px" : "30px",
                textTransform: "uppercase"
            }}>Fonts</Heading>
            <Box direction={"row"} style={boxStyle(isTabletOrMobileDevice)} as={"div"}>
                {images.map((img, index) => (
                    <div>
                        <ImageSection height={249} width={821} image={`url(${img.image})`}
                                      type={"contain"}/>
                    </div>
                ))}
            </Box>
        </Box>
    )

};

export default FontSection;