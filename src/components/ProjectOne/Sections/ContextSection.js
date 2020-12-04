import {Box, Heading, Image, Text} from "grommet";
import React from "react";
import BlockImageWithHeaderAndParagraph from "../../shared/Blocks/Block-image-with-header-and-paragraph";
import BlockImageWithHeaderAndSubHeader from "../../shared/Blocks/Block-image-with-header-and-subheader";
import {useMediaQuery} from "react-responsive";
import theme from "../../../styles/theme";

const componentOneProperties = {
    images: {
        a: {
            url: "/images/sajnu.svg"
        }
    },
    text: {
        a: {
            value: "Sajnuben Pachanbhai Rabari"
        },
        b: {
            render: () => (
                <Box gap={"medium"}>
                    <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Sajnuben lives in
                        a village called Kukadsar. She kept migrating until 2009. After which she settled down and
                        joined Kala Raksha, a school for artisans. She makes products like bags, jewelry, quilts, pillow
                        covers. She does everything from developing the product and finishing. Garmenting is something
                        which she avoids because of the unavailability of tailors.
                    </Text>
                </Box>
            )
        }
    }
};

const componentOnePropertiesSmall = {
    images: {
        a: {
            render: () => (
                <Image src={"/images/sajnu.svg"} height={"100px"}/>
            )
        }
    },
    text: {
        a: {
            render: () => (
                <Heading textAlign={"center"} level={2} margin={"0px"} style={{
                    textTransform: "uppercase",
                    fontFamily: "Poppins-Light",
                    fontSize: "20px"
                }}>Sajnuben Pachanbhai Rabari</Heading>
            )
        },
        b: {
            render: () => (
                <Box pad={{top: "medium"}}>
                    <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: "11px"}}>
                        Sajnuben lives in
                        a village called Kukadsar. She kept migrating until 2009. After which she settled down and
                        joined Kala Raksha, a school for artisans. She makes products like bags, jewelry, quilts, pillow
                        covers. She does everything from developing the product and finishing. Garmenting is something
                        which she avoids because of the unavailability of tailors.
                    </Text>
                </Box>
            )
        }
    }
};

const componentTwoProperties = {
    images: {
        a: {
            url: "/images/judy.svg"
        }
    },
    text: {
        a: {
            value: "Judy Frater"
        },
        b: {
            render: () => (
                <Box gap={"medium"}>
                    <Text textAlign={"start"} style={{fontFamily: "Poppins-Light", fontSize: "16px"}}>Judy Frater is
                        Founder Director of Somaiya Kala Vidya, an institute of education for artisans. She was born in
                        the United States and holds Master’s degrees from the University of Washington and the
                        University of Minnesota.
                        Wishing to do something to preserve traditional Indian craft rather than just study it, in 1993
                        Judy Frater, together with local embroiders, founded the Kala Raksha Trust.

                    </Text>
                </Box>
            )
        }
    }
};

const componentTwoPropertiesSmall = {
    images: {
        a: {
            render: () => (
                <Image src={"/images/judy.svg"} height={"100px"}/>
            )
        }
    },
    text: {
        a: {
            render: () => (
                <Heading level={2} margin={"0px"} textAlign={"center"} style={{
                    textTransform: "uppercase",
                    fontFamily: "Poppins-Light",
                    fontSize: "20px"
                }}>Judy Frater</Heading>
            )
        },
        b: {
            render: () => (
                <Box pad={{top: "medium"}}>
                    <Text textAlign={"center"} style={{fontFamily: "Poppins-Light", fontSize: "11px"}}>
                        Judy Frater is
                        Founder Director of Somaiya Kala Vidya, an institute of education for artisans. She was born in
                        the United States and holds Master’s degrees from the University of Washington and the
                        University of Minnesota.
                        Wishing to do something to preserve traditional Indian craft rather than just study it, in 1993
                        Judy Frater, together with local embroiders, founded the Kala Raksha Trust.
                    </Text>
                </Box>
            )
        }
    }
};

const LargeScreenSection = () => (
    <Box width={"100%"} align={"center"} justify={"center"}>
        <Heading margin={{bottom: "large", horizontal: "0px", top: "0px"}} level={2}
                 style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.largeScreen.xlarge, textTransform: "uppercase"}}>Setting the
            Context</Heading>
        <Box direction={"row"} width={"100%"}>
            <Box wrap={true} align={"start"} justify={"center"} width={"50%"}>
                <Box align={"start"} justify={"center"} width={"80%"}>
                    <BlockImageWithHeaderAndParagraph properties={componentOneProperties}/>
                </Box>
            </Box>
            <Box wrap={true} align={"end"} justify={"center"} width={"50%"}>
                <Box align={"start"} justify={"center"} width={"80%"}>
                    <BlockImageWithHeaderAndParagraph properties={componentTwoProperties}/>
                </Box>
            </Box>
        </Box>
    </Box>
);

const SmallScreenSection = () => (
    <Box width={"100%"} align={"center"} justify={"center"}>
        <Heading margin={{bottom: "20px", horizontal: "0px", top: "0px"}} level={2}
                 style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.smallScreen.xlarge, textTransform: "uppercase"}}>Setting the
            Context
        </Heading>
        <Box margin={{top: "large"}}>
            <BlockImageWithHeaderAndSubHeader properties={componentOnePropertiesSmall}/>
        </Box>
        <Box margin={{top: "large"}}>
            <BlockImageWithHeaderAndSubHeader properties={componentTwoPropertiesSmall}/>
        </Box>
    </Box>
);

const ContextSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1100px)'
    });

    return (

        isTabletOrMobileDevice ? <SmallScreenSection/> :
            <LargeScreenSection/>

    )
};

export default ContextSection;