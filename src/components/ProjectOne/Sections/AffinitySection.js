import {Box, Heading, Image, Text} from "grommet";
import React from "react";
import BlockTextWithImage from "../../shared/Blocks/Block-text-with-image";
import ImageSection from "../../shared/ImageSection";
import {useMediaQuery} from "react-responsive";

const AffinitySection = () => {

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
                        {isTabletOrMobileDevice ? <ImageSection height={627} width={362} image={"url(/images/affinity-small.svg)"} type={"contain"}/> :
                            <ImageSection height={910} width={1780} image={"url(/images/affinity.svg)"} type={"contain"}/>}
                    </div>
                </div>
    )
};

export default AffinitySection;