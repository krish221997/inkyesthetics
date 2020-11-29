import {Box, Heading, Text} from "grommet";
import React from "react";
import {useMediaQuery} from "react-responsive";


const ContextTextSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    })

    const largeScreenView = (
        <Box align={"center"} justify={"center"} width={"100%"}>
            <Box wrap>
                {/*<Text textAlign={"center"} style={{fontSize: "20px", fontFamily: "Poppins-Light"}}>use storytelling to <Text style={{fontSize: "20px", fontFamily: "Poppins-Medium"}}>reduce communication</Text> gap by*/}
                {/*    making her products <Text style={{fontSize: "20px", fontFamily: "Poppins-Medium"}}>more available</Text>*/}
                {/*    , and <Text style={{fontSize: "20px", fontFamily: "Poppins-Medium"}}>creating awareness</Text> for the audience?</Text>*/}
                <Text textAlign={"center"} style={{fontSize: "20px", lineHeight: "35px", fontFamily: "Poppins-Light"}}>We spent days
                    understanding the artisans’ body of work, the challenges they faced, and the existing processes they
                    used.
                </Text>
                <Text textAlign={"center"} style={{fontSize: "20px", lineHeight: "35px", fontFamily: "Poppins-Light"}}>We identified the
                    following key challenges we needed to address.

                </Text>
            </Box>
        </Box>
    )

    const smallScreenView = (
        <Box align={"center"} justify={"center"} width={"100%"}>
            <Box wrap>
                {/*<Text textAlign={"center"} style={{fontSize: "13px", fontFamily: "Poppins-Light"}}>use storytelling to*/}
                {/*    <Text style={{fontSize: "13px", fontFamily: "Poppins-Medium"}}>reduce communication</Text> gap by*/}
                {/*    making her products <Text style={{fontSize: "13px", fontFamily: "Poppins-Medium"}}>more*/}
                {/*        available</Text>*/}
                {/*    , and <Text style={{fontSize: "13px", fontFamily: "Poppins-Medium"}}>creating awareness</Text> for*/}
                {/*    the audience?</Text>*/}
                 <Text textAlign={"center"} style={{fontSize: "13px", fontFamily: "Poppins-Light"}}>We spent days
                    understanding the artisans’ body of work, the challenges they faced, and the existing processes they
                    used.
                </Text>
                <Text textAlign={"center"} style={{fontSize: "13px", fontFamily: "Poppins-Light"}}>We identified the
                    following key challenges we needed to address.

                </Text>
            </Box>
        </Box>
    )

    return (
        isTabletOrMobileDevice ? smallScreenView : largeScreenView
    )
};

export default ContextTextSection;