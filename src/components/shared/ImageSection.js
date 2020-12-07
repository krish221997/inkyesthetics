import React from "react";
import {Box} from "grommet";
import LazyLoad from 'react-lazy-load';


const ImageSection = ({image = "", height = "100vh", width = "1920px", type = "cover"}) => {
    const num = height / width;
    const padPercent = (num / 100) * 10000;
    let wholePercent = Math.ceil(padPercent);

    return (
        <LazyLoad throttle={500}>
            <div
                style={{background: `${image} no-repeat center`, paddingTop: `${wholePercent}%`, backgroundSize: type}}>
            </div>
        </LazyLoad>
    )
};

export default ImageSection;