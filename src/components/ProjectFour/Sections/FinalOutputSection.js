import {Heading} from "grommet";
import React from "react";
import ImageSection from "../../shared/ImageSection";
import {useMediaQuery} from "react-responsive";

const FinalOutputSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    })

    return (
        <div align={"center"}>
            <Heading margin={{bottom: isTabletOrMobileDevice ? "20px" : "40px", horizontal: "0px", top: "0px"}}
                     level={2} style={{
                fontFamily: "Poppins-Light",
                fontSize: isTabletOrMobileDevice ? "20px" : "30px",
                textTransform: "uppercase"
            }}>Final Output</Heading>
            <div style={{margin: "0 auto"}}>
                <ImageSection height={854} width={1451} image={"url(/images/final-1.svg)"}
                              type={"contain"}/>
            </div>
           <div style={{marginTop: isTabletOrMobileDevice ? "30px" : "50px"}}>
                <div style={{margin: "0 auto"}}>
                <ImageSection height={854} width={1451} image={"url(/images/final-2.svg)"}
                              type={"contain"}/>
            </div>
           </div>
        </div>
    )
};

export default FinalOutputSection;