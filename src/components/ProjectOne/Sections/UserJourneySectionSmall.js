import {Heading} from "grommet";
import React from "react";
import ImageSection from "../../shared/ImageSection";
import {useMediaQuery} from "react-responsive";

const UserJourneySectionSmall = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    })

    return (
        <div align={"center"}>
            <Heading margin={{bottom: isTabletOrMobileDevice ? "20px" : "24px", horizontal: "0px", top: "0px"}}
                     level={2} style={{
                fontFamily: "Poppins-Light",
                fontSize: isTabletOrMobileDevice ? "20px" : "30px",
                textTransform: "uppercase"
            }}>User journey</Heading>
            <div style={{margin: "0 auto"}}>
                <ImageSection height={649} width={345} image={"url(/images/user-journey-small.svg)"}
                              type={"contain"}/>
            </div>
            <div style={{margin: "0 auto"}}>
                <ImageSection height={614} width={351} image={"url(/images/user-journey-small-2.svg)"}
                              type={"contain"}/>
            </div>
        </div>
    )
};

export default UserJourneySectionSmall;