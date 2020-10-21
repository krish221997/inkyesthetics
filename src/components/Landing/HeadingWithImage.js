import {Box, Heading, Image, Text} from "grommet";
import React from "react";

const HeadingWithImage = () => {
    return (
        <Box width={"100%"} direction={"row"}>
            <Box wrap width={"40%"} align={"start"}>
                <Box height={"100%"} justify={"between"}>
                    <Box pad={{top: "300px"}}>
                        <Text style={{fontSize: "158px", color: "#16D3BB", fontFamily: "Staatliches"}}>NAMASTE!</Text>
                        <Box margin={{top: "100px"}} direction={"row"} gap={"medium"}>
                            <Text style={{fontSize: "158px", color: "#16D3BB", fontFamily: "Staatliches"}}>I'M A</Text>
                            <Box margin={{top: "-47px"}}>
                                <Text style={{fontSize: "30px", color: "#DA2F69", fontFamily: "Staatliches", marginBottom: "6px"}}>VISUAL DESIGNER</Text>
                                <Text style={{fontSize: "30px", color: "#DA2F69", fontFamily: "Staatliches", marginBottom: "6px"}}>ILLUSTRATOR</Text>
                                <Text style={{fontSize: "30px", color: "#DA2F69", fontFamily: "Staatliches", marginBottom: "6px"}}>USER EXPERIENCE DESIGNER</Text>
                                <Text style={{fontSize: "30px", color: "#DA2F69", fontFamily: "Staatliches", marginBottom: "6px"}}>USER INTERFACE DESIGNER</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Text style={{width: {max: "max-content"}, fontSize: "51px", color: "#DA2F69", fontFamily: "Staatliches", cursor: "pointer", marginTop: "48px", textDecorationLine: 'line-through'}}>UNPACKING MY WORK!</Text>
                        <Text style={{width: {max: "max-content"}, fontSize: "51px", color: "#FFB600", fontFamily: "Staatliches", cursor: "pointer", marginTop: "48px"}}>A LITTLE ABOUT ME!</Text>
                        <Text style={{width: {max: "max-content"}, fontSize: "51px", color: "#FFB600", fontFamily: "Staatliches", cursor: "pointer", marginTop: "48px"}}>DID IT FOR THE GRAM!</Text>
                        <Text style={{width: {max: "max-content"}, fontSize: "51px", color: "#FFB600", fontFamily: "Staatliches", cursor: "pointer", marginTop: "48px"}}>HIT ME UP!</Text>
                    </Box>
                </Box>
            </Box>
            <Box width={"60%"} align={"end"}>
                <Image src={"/images/tanvi-07.svg"}/>
            </Box>

        </Box>
    )
};

export default HeadingWithImage;