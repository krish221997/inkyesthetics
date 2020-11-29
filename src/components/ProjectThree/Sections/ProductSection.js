import {useMediaQuery} from "react-responsive";
import React from "react";
import {Box, Image, Text} from "grommet";
import ImageSection from "../../shared/ImageSection";

const ProductSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

    const isTabletDevice = useMediaQuery({
        query: '(max-device-width: 1250px)'
    });

    const LargeScreenSection = () => {
        return (
            // <Box align={"start"} justify={"center"} width={"100%"} direction={"row"} height={"1100px"}>
            //     <Box width={"45%"} justify={"between"} wrap height={"100%"} align={"start"}>
            //         <Box height={"675px"}>
            //             <Image fit={"cover"} src={"/images/product.svg"}/>
            //         </Box>
            //         <Box height={"326px"}>
            //             <Image fit={"cover"} src={"/images/products.svg"}/>
            //         </Box>
            //     </Box>
            //     <Box width={"55%"} wrap justify={"between"} height={"100%"} margin={{left: "large"}}>
            //         <Text textAlign={"start"}
            //               style={{
            //                   fontFamily: "Poppins-Light",
            //                   lineHeight: "35px",
            //                   fontSize: "18px",
            //                   marginTop: "-10px"
            //               }}>
            //             While I picked this beverage because I enjoy drinking it, tea is also the perfect metaphor for
            //             my personality and characteristics. Just as tea is a social drink in many Asian cultures, I too
            //             enjoy partaking in social gatherings and meeting new people. I also relate the boiling heat of
            //             the beverage to my emotions, my feelings are often turbulent and tumultuous. Just as tea serves
            //             as a comfort drink to so many people, I am the person my friends turn to for comfort.
            //             To incorporate my belief in transparency and honesty, the packaging contains a transparent
            //             window. The colour palette used consists majorly of greens to showcase my love for nature.
            //
            //         </Text>
            //     </Box>
            // </Box>

            <div align={"center"} style={{width: "100%", height: "100%"}}>
                <Box align={"center"} justify={"center"} width={"100%"} height={"100%"} direction={"row"} margin={{bottom: "100px"}}>
                    <Box width={"702px"} height={"100%"} align={"start"} justify={"center"} wrap>
                        <Image fit={"cover"} src={"/images/product.svg"}/>
                    </Box>
                    <Box margin={{left: "100px", top: "auto"}} height={"100%"} wrap width={"702px"} align={"end"} justify={"center"}>
                        <Box>
                            <Text textAlign={"start"}
                          style={{
                              fontFamily: "Poppins-Light",
                              lineHeight: "35px",
                              fontSize: "18px",
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
                    </Box>
                </Box>
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
                              fontSize: isTabletOrMobileDevice ? "13px" : isTabletDevice ? "16px" : ""
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