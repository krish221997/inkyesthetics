import {Box, Text} from "grommet";
import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {useMediaQuery} from "react-responsive";
import {connect} from "react-redux";
import TYPES from "../../config/types";
import {Link} from "react-router-dom";

const ProjectSection = ({previousProjectData, nextProjectData}) => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

    return (
        <Box width={"100%"} justify={"between"} align={"center"} direction={"row"}>
            {previousProjectData &&
            <Box direction={"row"} align={"center"} justify={"start"} width={"50%"} gap={isTabletOrMobileDevice ? "small" : "medium"}>
                <a style={{textTransform: "none", textDecoration: "none"}}
                   href={previousProjectData.url}><ArrowBackIosIcon style={{color: "black", fontSize: isTabletOrMobileDevice ? "12px" : "30px"}}/></a>
                <a style={{textTransform: "none", textDecoration: "none"}} href={previousProjectData.url}>
                    <Text weight={"bold"} textAlign={"start"} color={"black"} style={{
                        fontSize: isTabletOrMobileDevice ? "12px" : "36px",
                        cursor: "pointer",
                        textTransform: "uppercase",
                        fontFamily: "Poppins-Light"
                    }}>{previousProjectData?.heading}</Text>
                </a>
            </Box>}
            {nextProjectData && <Box direction={"row"} align={"center"} justify={"end"} gap={isTabletOrMobileDevice ? "small" : "medium"} width={previousProjectData ? "50%" : "100%"}>
                <a style={{textTransform: "none", textDecoration: "none"}} href={nextProjectData.url}>
                    <Text weight={"bold"} textAlign={"start"} color={"black"} style={{
                        fontSize: isTabletOrMobileDevice ? "12px" : "36px",
                        cursor: "pointer",
                        textTransform: "uppercase",
                        fontFamily: "Poppins-Light"
                    }}>{nextProjectData?.heading}</Text>
                </a>
                <a style={{textTransform: "none", textDecoration: "none"}}
                   href={nextProjectData.url}><ArrowForwardIosIcon style={{color: "black", fontSize: isTabletOrMobileDevice ? "12px" : "30px"}}/></a>
            </Box>}
        </Box>
    )

};

const mapStateToProps = (state) => ({

    nextProjectData: state.select[TYPES.SELECT.NEXT_PROJECT_DATA],
    previousProjectData: state.select[TYPES.SELECT.PREVIOUS_PROJECT_DATA],

});

const mapDispatcherToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatcherToProps)(ProjectSection);