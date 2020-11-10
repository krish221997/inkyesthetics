import {Heading} from "grommet";
import React from "react";
import ImageSection from "../../shared/ImageSection";
import {useMediaQuery} from "react-responsive";

const AffinitySectionSmall = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    })

    return (
        <div align={"center"}>
                    <Heading margin={{bottom: isTabletOrMobileDevice ? "20px" : "24px", horizontal: "0px", top: "0px"}} level={2} style={{
                        fontFamily: "Poppins-Light",
                        fontSize: isTabletOrMobileDevice ? "20px" : "30px",
                        textTransform: "uppercase"
                    }}>Affinity map</Heading>
                    <div style={{margin: "0 auto"}}>
                        <ImageSection height={627} width={362} image={"url(/images/affinity-small.svg)"} type={"contain"}/>
                    </div>
                </div>
    )
};

export default AffinitySectionSmall;