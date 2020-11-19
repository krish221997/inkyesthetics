import {Heading} from "grommet";
import React from "react";
import ImageSection from "../../shared/ImageSection";
import {useMediaQuery} from "react-responsive";

const SketchesSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    })

    return (
        <div align={"center"}>
                    <Heading margin={{bottom: isTabletOrMobileDevice ? "20px" : "24px", horizontal: "0px", top: "0px"}} level={2} style={{
                        fontFamily: "Poppins-Light",
                        fontSize: isTabletOrMobileDevice ? "20px" : "30px",
                        textTransform: "uppercase"
                    }}>Sketches</Heading>
                    <div style={{margin: "0 auto"}}>
                        <ImageSection height={915} width={1946} image={"url(/images/sketches.svg)"}
                                       type={"contain"}/>
                    </div>
                </div>
    )
};

export default SketchesSection;