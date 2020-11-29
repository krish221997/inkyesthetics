import {Heading} from "grommet";
import React from "react";
import ImageSection from "../../shared/ImageSection";
import {useMediaQuery} from "react-responsive";

const IllustrationsSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    })

    return (
        <div align={"center"}>
                    <Heading margin={{bottom: isTabletOrMobileDevice ? "20px" : "24px", horizontal: "0px", top: "0px"}} level={2} style={{
                        fontFamily: "Poppins-Light",
                        fontSize: isTabletOrMobileDevice ? "20px" : "30px",
                        textTransform: "uppercase"
                    }}>Illustrations</Heading>
                    <div style={{margin: "0 auto"}}>
                        <ImageSection height={806} width={1536} image={"url(/images/illustrations.png)"}
                                       type={"contain"}/>
                    </div>
                </div>
    )
};

export default IllustrationsSection;