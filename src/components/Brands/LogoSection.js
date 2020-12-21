import {Box, Heading, Image} from "grommet";
import React from "react";
import theme from "../../styles/theme";
import {useMediaQuery} from "react-responsive";
import {Link} from "react-scroll";

const logos = [
    {
        to: "component1",
        url: "/images/netflix.png"
    },
    {
        to: "component3",
        url: "/images/boat.png"
    },
    {
        to: "component2",
        url: "/images/amazon.png"
    },
    {
        to: "component4",
        url: "/images/the-moms-co.png"
    },
    {
        to: "component5",
        url: "/images/dell.png"
    },
    {
        to: "component6",
        url: "/images/onePlus.png"
    }
]

const boxStyle = {
    display: "grid",
    "grid-template-columns": "repeat(3, minmax(200px, 1fr))",
    "grid-template-rows": "repeat(2, auto)",
    "grid-gap": "48px"
};

const smallBoxStyle = {
    display: "grid",
    "grid-template-columns": "repeat(2, minmax(50px, 1fr))",
    "grid-template-rows": "minmax(auto, 1fr)",
    "grid-gap": "48px"
};

const LogoSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

    return (
        <Box width={"100%"} justify={"center"} align={"center"}>
            <Heading margin={"0px"} level={2} textAlign={"center"} style={{
                fontFamily: "Poppins-Light",
                fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xlarge : theme.fontSize.largeScreen.xlarge,
                textTransform: "uppercase"
            }}>Brands
            </Heading>
            <Box wrap style={isTabletOrMobileDevice ? smallBoxStyle : boxStyle} direction={"row"} as={"div"}
                 width={"100%"}>
                {logos.map((logo, index) => (
                    <Box key={index} justify={"center"} align={"center"} margin={{top: "xlarge"}}>
                        <Link smooth={true} to={logo.to}><Image style={{cursor: "pointer"}} width={isTabletOrMobileDevice ? "100px" : "200px"}  src={logo.url}/></Link>
                    </Box>

                ))}
            </Box>
        </Box>
    )

};

export default LogoSection;