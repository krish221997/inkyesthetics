import {Heading} from "grommet";
import React from "react";
import ImageSection from "../../shared/ImageSection";
import {useMediaQuery} from "react-responsive";
import theme from "../../../styles/theme";

const FinalOutputSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

     const isMobileFinalOutput = useMediaQuery({
        query: '(max-device-width: 400px)'
    })

    return (
        <div align={"center"}>
            <Heading margin={{bottom: "large", horizontal: "0px", top: "0px"}}
                     level={2} style={{
                fontFamily: "Poppins-Light",
                fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xlarge : theme.fontSize.largeScreen.xlarge,
                textTransform: "uppercase"
            }}>Final Output</Heading>
            <div style={{margin: "0 auto"}}>
                {<ImageSection height={2047} width={3182} image={"url(/images/output-1.jpg)"}
                              type={"contain"}/>}
            </div>
           <div style={{marginTop: isTabletOrMobileDevice ? "30px" : "50px"}}>
                <div style={{margin: "0 auto"}}>
                    {<ImageSection height={1708} width={2902} image={"url(/images/output-2.jpg)"}
                                   type={"contain"}/>}
            </div>
           </div>
            <div style={{marginTop: isTabletOrMobileDevice ? "30px" : "50px"}}>
                <div style={{margin: "0 auto"}}>
                    {<ImageSection height={1708} width={2902} image={"url(/images/output-3.jpg)"}
                                   type={"contain"}/>}
            </div>
           </div>
        </div>
    )
};

export default FinalOutputSection;