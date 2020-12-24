import React from "react";
import ImageSection from "../../shared/ImageSection";
import {useMediaQuery} from "react-responsive";
import theme from "../../../styles/theme";
import {Heading} from "grommet";

const PrototypeSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    })

    return (
        <div align={"center"}>
            <Heading margin={{bottom: "large", horizontal: "0px", top: "0px"}} level={2} style={{
                        fontFamily: "Poppins-Light",
                        fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xlarge : theme.fontSize.largeScreen.xlarge,
                        textTransform: "uppercase"
                    }}>Screens (WIP)</Heading>
                    <div style={{margin: "0 auto"}}>
                        {<ImageSection height={2469} width={1920} image={"url(/images/phones.png)"} type={"contain"}/>}
                    </div>
                </div>
    )
};

export default PrototypeSection;