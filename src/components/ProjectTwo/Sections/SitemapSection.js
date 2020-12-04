import {Heading} from "grommet";
import React from "react";
import ImageSection from "../../shared/ImageSection";
import {useMediaQuery} from "react-responsive";
import theme from "../../../styles/theme";

const SitemspSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    })

    return (
        <div align={"center"}>
                    <Heading margin={{bottom: "large", horizontal: "0px", top: "0px"}} level={2} style={{
                        fontFamily: "Poppins-Light",
                        fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xlarge : theme.fontSize.largeScreen.xlarge,
                        textTransform: "uppercase"
                    }}>Sitemap</Heading>
                    <div style={{margin: "0 auto"}}>
                        {<ImageSection height={2684} width={1741} image={"url(/images/sitemap.svg)"} type={"contain"}/>}
                    </div>
                </div>
    )
};

export default SitemspSection;