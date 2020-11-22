import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import {Box, Image} from "grommet";
import HeadingTextButtonWithArrow from "../components/ProjectList/HeadingTextButtonWithArrow";
import {useMediaQuery} from "react-responsive";
import {connect} from "react-redux";
import TYPES from "../config/types";


const ProjectList = ({changeProjectDataFlow}) => {

    useEffect(() => {
        changeProjectDataFlow({current: 0})
    }, []);

    const [currentProject, setCurrentProject] = useState(0);

    const updateProject = (current) => {
        if (current === TYPES.PROJECTS - 1) {
            changeProjectDataFlow({current: 0})
            setCurrentProject(0)
        } else {
            changeProjectDataFlow({current: current + 1})
            setCurrentProject(current + 1)
        }
    };

    const isMobileDevice = useMediaQuery({
        query: '(max-device-width: 1150px)'
    });

    const isLaptopDevice = useMediaQuery({
        query: '(max-device-width: 1450px)'
    });

    const isTabletDevice = useMediaQuery({
        query: '(max-device-width: 1250px)'
    });

    return (
        <div style={{display: "flex", flexFlow: "column", height: "100vh"}}>
            <Box pad={{horizontal: "xlarge", top: "large", bottom: "large"}}>
                <Header/>
            </Box>

            <div style={{overflow: "hidden", height: `calc(100vh - 127px)`}}>
                <div style={{float: "left", height: "100%"}}>
                    <Image src="/images/listPage.svg" width={isMobileDevice ? "500px" : isTabletDevice ? "600px" : isLaptopDevice ? "650px" : ""}
                           height={"100%"} fit={"cover"}/>
                </div>
                <div style={{display: "flex", overflow: "hidden", height: "100%"}}>
                    <div style={{marginTop: "auto", width: "70%", marginRight: "20px"}}>
                        <HeadingTextButtonWithArrow/>
                    </div>
                    <div style={{marginTop: "auto", marginLeft: "auto", marginRight: "30px"}}>
                        <Image src={"/images/arrow.svg"} onClick={() => updateProject(currentProject)} style={{cursor: "pointer"}} margin={{bottom: "medium"}}/>
                    </div>
                </div>
            </div>
        </div>

    )

};

const mapStateToProps = (state) => ({
});

const mapDispatcherToProps = (dispatch) => ({
    changeProjectDataFlow: dispatch.flow.changeProjectData
});

export default connect(mapStateToProps, mapDispatcherToProps)(ProjectList);