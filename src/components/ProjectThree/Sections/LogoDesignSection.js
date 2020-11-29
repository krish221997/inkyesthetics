import {useMediaQuery} from "react-responsive";
import React from "react";
import {Box, Heading, Image, Text} from "grommet";

// const boxStyle = {
//     display: "grid",
//     "grid-template-columns": "repeat(1, minmax(100px, auto))",
//     "grid-template-rows": "repeat(1, 1fr)",
//     "grid-gap": "0px",
// };

const LogoDesignSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

    return (
        <Box width={"100%"} justify={"center"} align={"center"}>
            <Heading margin={{bottom: isTabletOrMobileDevice ? "20px" : "30px", horizontal: "0px", top: "0px"}}
                     level={2} style={{
                fontFamily: "Poppins-Light",
                fontSize: isTabletOrMobileDevice ? "20px" : "30px",
                textTransform: "uppercase"
            }}>Logo design</Heading>
            <Box>
                <Image width={isTabletOrMobileDevice ? "250px" : ""} src={"/images/chatea-white.svg"}/>
            </Box>

            <Box margin={{vertical: "medium"}}>
                <Image width={isTabletOrMobileDevice ? "250px" : ""} src={"/images/chatea-black.svg"}/>
            </Box>
            <Box align={"center"} justify={"center"} width={"80%"}>
                <Text textAlign={"center"} margin={"0px"}
                         level={5} style={{
                    fontFamily: "Poppins-Light",
                    fontSize: isTabletOrMobileDevice ? "12px" : "18px",
                    // textTransform: "uppercase"
                }}>Chatea is derived from the word ‘chatty’, meaning “readily engaging in informal talk”. The brand name
                    is meant to communicate my being an extremely talkative person, and the most common first impression
                    that I garner. It also conveys my readiness to chat over a cup of tea; ‘Cha’ in my native Gujarati
                    means tea.
                </Text>
            </Box>
        </Box>
    )

};

export default LogoDesignSection;