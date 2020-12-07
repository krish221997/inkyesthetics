import React from "react";

const ImageSection = ({image = "", height = "100vh", width = "1920px", type = "cover"}) => {
    const num = height / width;
    const padPercent = (num / 100) * 10000;
    let wholePercent = Math.ceil(padPercent);

    return (
            <div
                style={{background: `${image} no-repeat center`, paddingTop: `${wholePercent}%`, backgroundSize: type}}>
            </div>
    )
};

export default ImageSection;