import React from "react";
import {OBJModel} from 'react-3d-viewer'
import {Box} from "grommet";

const Test3DRender = () => {
    return (
        <Box align={"center"} justify={"center"}>
            <OBJModel width={1500} height={500} position={{x: -0, y: -100, z: -0}} src={"/images/3d-render-2.obj"}/>

        </Box>
    )
};

export default Test3DRender;