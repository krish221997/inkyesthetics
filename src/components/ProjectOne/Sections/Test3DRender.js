import React from "react";
import {OBJModel} from 'react-3d-viewer'
import {Box} from "grommet";

const Test3DRender = () => {
    return (
        <Box align={"center"} justify={"center"}>
            <OBJModel width={700} height={500} position={{x: -100, y: -100, z: -150}} src={"/images/3d-render.obj"}/>

        </Box>
    )
};

export default Test3DRender;