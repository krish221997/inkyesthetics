import React from "react";
import ImageSection from "../../shared/ImageSection";
import {useMediaQuery} from "react-responsive";

const PrototypeSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    })

    return (
        <div align={"center"}>
                    <div style={{margin: "0 auto"}}>
                        {<ImageSection height={2469} width={1920} image={"url(/images/phones.png)"} type={"contain"}/>}
                    </div>
                </div>
    )
};

export default PrototypeSection;