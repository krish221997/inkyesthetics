import {Box, Heading, Image} from "grommet";
import React from "react";
import theme from "../../styles/theme";
import {useMediaQuery} from "react-responsive";
import Slider from "react-slick";
import "../../css/slick-theme.css"
import "../../css/slick.css"

const imageData = [
    {
        url: "/images/amazon-01.jpg"
    },
    {
        url: "/images/amazon-02.jpg"
    },
    {
        url: "/images/amazon-03.jpg"
    },
    {
        url: "/images/amazon-04.jpg"
    },
    {
        url: "/images/amazon-05.jpg"
    },
    {
        url: "/images/amazon-06.jpg"
    },
    {
        url: "/images/amazon-07.jpg"
    }
];


const SliderSection = () => {

     const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 950px)'
    });

     const isOnlyMobileMobileDevice = useMediaQuery({
        query: '(max-device-width: 480px)'
    });

     const isSmallLaptop = useMediaQuery({
        query: '(max-device-width: 1300px)'
    });

    const settings = {
        customPaging: function (i) {
            return (
                    <Image width={isOnlyMobileMobileDevice ? "30px" : isTabletOrMobileDevice ? "50px" : isSmallLaptop ? "100px" : "150px"}
                     height={isOnlyMobileMobileDevice ? "25px" : isTabletOrMobileDevice ? "30px" : isSmallLaptop ? "70px" : "100px"} style={{borderRadius: "5px"}} src={imageData[i].url}/>

            );
        },
        dots: true,
        dotsClass: "slick-dots",
        infinite: true,
        speed: 500,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true
    };

    return (
        <Box width={"100%"} justify={"center"} align={"center"}>
            <Image src={"/images/netflix.png"} width={"200px"}/>
            <Box margin={{top: "large"}}>
                <Slider {...settings}>

                    {
                        imageData.map((image, key) => (
                            <Box id={key}>
                                <Image width={"100%"} src={image.url} style={{borderRadius: "5px"}}/>
                            </Box>
                        ))
                    }
                </Slider>
            </Box>
        </Box>
    )

};

export default SliderSection;