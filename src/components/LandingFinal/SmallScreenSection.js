import React from "react";
import ImageSection from "../shared/ImageSection";

const SmallScreenSection = () => {
    return (
        <div style={{width: "100%"}}>
            <div style={{margin: "0 auto"}}>
                <ImageSection height={1300} width={686} image={"url(/images/tanvi_small.svg)"}
                              type={"contain"}/>
            </div>
        </div>
    )
};

export default SmallScreenSection;