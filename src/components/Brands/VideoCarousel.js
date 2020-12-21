import {Box, Heading, Image, Text} from "grommet";
import React from "react";
import {Carousel} from 'react-responsive-carousel';
import ReactPlayer from 'react-player'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useMediaQuery} from "react-responsive";
import theme from "../../styles/theme";

const getConfigurableProps = () => ({
    showArrows: true,
    showStatus: true,
    showIndicators: true,
    infiniteLoop: true,
    showThumbs: false,
    useKeyboardArrows: true,
    autoPlay: false,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: true,
    emulateTouch: true,
    thumbWidth: 100,
    selectedItem: 0,
    interval: 3000,
    transitionTime: 150,
    swipeScrollTolerance: 5,
});

const VideoCarousel = () => {

    const isTabletDevice = useMediaQuery({
        query: '(max-device-width: 1000px)'
    });

    const isMobileDevice = useMediaQuery({
        query: '(max-device-width: 500px)'
    });

    return (
        <Box align={"center"} justify={"center"} width={"100%"}>
            <Image src={"/images/boat.png"} width={isTabletDevice ? "100px" : "200px"}/>
            <Box align={"center"} justify={"center"} width={"100%"} margin={{top: "large", bottom: "medium"}}>
                <Carousel
                    width={isMobileDevice ? "270px" : isTabletDevice ? "400px" : "900px"}
                    height={isMobileDevice ? "200px" : isTabletDevice ? "200px" : "460px"}
                    {...getConfigurableProps()}>
                    <Box
                        width={isMobileDevice ? "270px" : isTabletDevice ? "400px" : "900px"}
                        height={isMobileDevice ? "200px" : isTabletDevice ? "200px" : "460px"}
                        align={"center"}
                        justify={"center"}>
                        <ReactPlayer
                            height={isTabletDevice ? "200px" : "460px"}
                            width={isMobileDevice ? "240px" : isTabletDevice ? "370px" : "870px"}
                            controls={true}
                            url={"/images/1.mp4"}/>
                    </Box>
                    <Box
                        width={isMobileDevice ? "270px" : isTabletDevice ? "400px" : "900px"}
                        height={isMobileDevice ? "200px" : isTabletDevice ? "200px" : "460px"}
                        align={"center"}
                        justify={"center"}>
                        <ReactPlayer
                            height={isTabletDevice ? "200px" : "460px"}
                            width={isMobileDevice ? "240px" : isTabletDevice ? "370px" : "870px"}
                            controls={true}
                            url={"/images/2.mp4"}/>
                    </Box>
                    <Box
                        width={isMobileDevice ? "270px" : isTabletDevice ? "400px" : "900px"}
                        height={isMobileDevice ? "200px" : isTabletDevice ? "200px" : "460px"}
                        align={"center"}
                        justify={"center"}>
                        <ReactPlayer
                            height={isTabletDevice ? "200px" : "460px"}
                            width={isMobileDevice ? "240px" : isTabletDevice ? "370px" : "870px"}
                            controls={true}
                            url={"/images/3.mp4"}/>
                    </Box>
                </Carousel>
            </Box>
            <Text textAlign={"center"}
                  style={{
                      fontFamily: "Poppins-Medium",
                      fontSize: isTabletDevice ? theme.fontSize.smallScreen.small : theme.fontSize.largeScreen.small
                  }}>Worked on a project to create campaign ideas, build visual style guides and graphics for the
                IPL2020 and World Cup 2020 campaign while working at <a href="https://theglitch.in/"
                                                                        color={"black"}
                                                                        style={{textDecoration: "underline"}}
                                                                        target={"_blank"}>
                    <Text weight={"bold"} color={"black"} textAlign={"center"}
                          style={{
                              fontFamily: "Poppins-Medium",
                              fontSize: isTabletDevice ? theme.fontSize.smallScreen.small : theme.fontSize.largeScreen.small
                          }}>The Glitch</Text>
                </a></Text>
            <Box align={"center"} justify={"center"} margin={{top: "medium"}}>
                <Box direction={"row"} gap={"xsmall"}>
                    <a href={" https://www.instagram.com/boat.nirvana/?hl=en"} target={"_black"}
                       style={{color: "black", textTransform: "none", textDecoration: "underline"}}><Text
                        weight={"bold"} textAlign={"center"}
                        style={{
                            fontFamily: "Poppins-Medium",
                            fontSize: isTabletDevice ? theme.fontSize.smallScreen.small : theme.fontSize.largeScreen.small
                        }}>View Instagram</Text></a>
                    <a href={" https://www.instagram.com/boat.nirvana/?hl=en"} target={"_black"}
                       style={{color: "black", textTransform: "none", textDecoration: "none"}}>
                    <Text
                        weight={"bold"} textAlign={"center"}
                        style={{
                            fontFamily: "Poppins-Medium",
                            fontSize: isTabletDevice ? theme.fontSize.smallScreen.small : theme.fontSize.largeScreen.small
                        }}>{">>"}</Text></a>
                </Box>
            </Box>
        </Box>
    )

};

export default VideoCarousel;