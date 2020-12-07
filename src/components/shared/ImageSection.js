import React, {lazy, Suspense} from "react";
import {Box} from "grommet";
import LazyLoad from 'react-lazy-load';
import {CircularProgress} from "@material-ui/core";

const Render = lazy(() => import('./ImageRender'));

const ImageSection = ({image = "", height = "100vh", width = "1920px", type = "cover"}) => {
    const num = height / width;
    const padPercent = (num / 100) * 10000;
    let wholePercent = Math.ceil(padPercent);

    return (
        <Suspense fallback={<Box align={"center"} justify={"center"} width={"100%"}>
            <CircularProgress />
        </Box>}>
            <Render image={image} wholePercent={wholePercent} type={type}/>
        </Suspense>
        // <LazyLoad throttle={500}>
        //     <div
        //         style={{background: `${image} no-repeat center`, paddingTop: `${wholePercent}%`, backgroundSize: type}}>
        //     </div>
        // </LazyLoad>
    )
};

export default ImageSection;