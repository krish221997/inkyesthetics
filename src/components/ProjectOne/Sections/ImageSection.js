import React from "react";
import {Box, Image} from "grommet";


const ImageSection = ({image = "", type = "contain"}) => {
    return (
        <div style={{background: image, height: "100vh", backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundSize: type}}>

        </div>
        // <Image src={"/images/cover.svg"}/>

    )
};

export default ImageSection;