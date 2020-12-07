import React from "react";

const ImageRender = ({image, wholePercent, type}) => {
    return (
        <div
            style={{background: `${image} no-repeat center`, paddingTop: `${wholePercent}%`, backgroundSize: type}}>
        </div>
    )
};

export default ImageRender;