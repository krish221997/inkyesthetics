import {Box, Image, Text} from "grommet";
import React from "react";
import {useMediaQuery} from "react-responsive";
import ReactPlayer from 'react-player'
import theme from "../../styles/theme";

const NetflixSection = () => {

    const isTabletDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

   const isMobileDevice = useMediaQuery({
        query: '(max-device-width: 500px)'
    });

    return (
        <Box width={"100%"} align={"center"} justify={"center"}>
            <Image src={"/images/netflix.png"} width={isTabletDevice ? "100px" : "200px"}/>
            <Box margin={{top: "large", bottom: "medium"}}>
                <ReactPlayer controls={true} width={isMobileDevice ? "270px" : isTabletDevice ? "400px" : "700px"}
                             height={isTabletDevice ? "200px" : "360px"}
                             url={"https://www.youtube.com/watch?v=OuNJ8bkkoJM&t=3s"}/>
            </Box>
            <Text textAlign={"center"}
                          style={{
                              fontFamily: "Poppins-Medium",
                              fontSize: isTabletDevice ? theme.fontSize.smallScreen.small : theme.fontSize.largeScreen.small
                          }}>Collaborated with a team of animators and designers for a
                campaign for Netflix called <a href="https://www.youtube.com/watch?v=OuNJ8bkkoJM&t=3s" style={{textDecoration: "none", color: "black"}} target={"_blank"}>
                    <Text weight={"bold"} color={"red"} textAlign={"center"}
                          style={{
                              fontFamily: "Poppins-Medium",
                              fontSize: isTabletDevice ? theme.fontSize.smallScreen.small : theme.fontSize.largeScreen.small
                          }}>‘Upcoming Netflix Originals’</Text>
                </a> in 2020</Text>
        </Box>
    )

};

export default NetflixSection;