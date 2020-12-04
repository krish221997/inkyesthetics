import {useMediaQuery} from "react-responsive";
import React from "react";
import {Box, Image, Text} from "grommet";
import ImageSection from "../../shared/ImageSection";
import theme from "../../../styles/theme";

const ProductSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

    const isTabletDevice = useMediaQuery({
        query: '(max-device-width: 1300px)'
    });

    const LargeScreenSection = () => {
        return (
            <div style={{width: "100%", height: "100%"}}>
                <div style={{display: "flex", marginBottom: "100px", height: "675px"}}>
                    <div style={{width: "702px"}}>
                        <Image fit={"cover"} src={"/images/product.svg"}/>
                    </div>
                    <Box margin={{left: "100px", top: "auto"}}>
                        <Text
                            style={{
                                fontFamily: "Poppins-Light",
                                lineHeight: "35px",
                                fontSize: theme.fontSize.largeScreen.small,
                            }}>While I picked this beverage because I enjoy drinking it, tea is also the perfect
                            metaphor for
                            my personality and characteristics. Just as tea is a social drink in many Asian
                            cultures, I too
                            enjoy partaking in social gatherings and meeting new people. I also relate the boiling
                            heat of
                            the beverage to my emotions, my feelings are often turbulent and tumultuous. Just as tea
                            serves
                            as a comfort drink to so many people, I am the person my friends turn to for comfort.
                            To incorporate my belief in transparency and honesty, the packaging contains a
                            transparent
                            window. The colour palette used consists majorly of greens to showcase my love for
                            nature.
                        </Text>
                    </Box>
                </div>
                <div style={{margin: "0 auto"}}>
                    <ImageSection height={780} width={1680} image={"url(/images/products.svg)"} type={"contain"}/>
                </div>
            </div>
        )
    };

    const SmallScreenSection = () => {
        return (
            <div align={"center"}>
                <div style={{margin: "0 auto"}}>
                    <ImageSection height={675} width={702} image={"url(/images/product.svg)"} type={"contain"}/>
                </div>
                <Box align={"start"} justify={"center"} margin={{vertical: "large"}}>
                    <Text textAlign={"start"}
                          style={{
                              fontFamily: "Poppins-Light",
                              fontSize: theme.fontSize.smallScreen.small
                          }}>
                        While I picked this beverage because I enjoy drinking it, tea is also the perfect metaphor for
                        my personality and characteristics. Just as tea is a social drink in many Asian cultures, I too
                        enjoy partaking in social gatherings and meeting new people. I also relate the boiling heat of
                        the beverage to my emotions, my feelings are often turbulent and tumultuous. Just as tea serves
                        as a comfort drink to so many people, I am the person my friends turn to for comfort.
                        To incorporate my belief in transparency and honesty, the packaging contains a transparent
                        window. The colour palette used consists majorly of greens to showcase my love for nature.

                    </Text>
                </Box>
                <div style={{margin: "0 auto"}}>
                    <ImageSection height={326} width={702} image={"url(/images/products.svg)"}
                                  type={"contain"}/>
                </div>
            </div>
        )
    };

    return (
        isTabletDevice ? <SmallScreenSection/> : <LargeScreenSection/>
    )

};

export default ProductSection;