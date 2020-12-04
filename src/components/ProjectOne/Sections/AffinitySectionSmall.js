import {Heading} from "grommet";
import React from "react";
import ImageSection from "../../shared/ImageSection";
import {useMediaQuery} from "react-responsive";
import theme from "../../../styles/theme";

const AffinitySectionSmall = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    })

    return (
        <div align={"center"}>
                    <Heading margin={{bottom: "large", horizontal: "0px", top: "0px"}} level={2} style={{
                        fontFamily: "Poppins-Light",
                        fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xlarge : theme.fontSize.largeScreen.xlarge,
                        textTransform: "uppercase"
                    }}>Affinity map</Heading>
                    <div style={{margin: "0 auto"}}>
                        <ImageSection height={627} width={362} image={"url(/images/affinity-small.svg)"} type={"contain"}/>
                    </div>
                </div>
    )
};

export default AffinitySectionSmall;