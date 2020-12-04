import {Box, Heading, Text} from "grommet";
import React from "react";
import TYPES from "../../config/types";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";
import theme from "../../styles/theme";

const useStyles = makeStyles((theme) => ({
    buttonColor: {
      color: "#000000"
    },
    arrow: {
      color: "#777777",
        fontSize: "250px"
    }
}));

const HeadingTextButtonWithArrow = ({projectData}) => {

    const name = "Brief: "

    const classes = useStyles();

    return (
        <Box width={"100%"} justify={"center"} align={"start"} pad={{left: "large", bottom: "large"}}>
            <Box align={"start"} wrap height={"100%"}>
                <Box width={"50%"} wrap>
                    <Heading level={2} margin={{bottom: "small", horizontal: "0px", top: "0px"}}
                         style={{textTransform: "uppercase", fontFamily: "Poppins-Light", fontSize: theme.fontSize.largeScreen.xxlarge, lineHeight: "50px"}}>
                    {projectData?.heading}
                </Heading>
                </Box>
                <Text margin={{bottom: "small"}} style={{fontFamily: "Poppins-Light", fontSize: theme.fontSize.largeScreen.xsmall}}>
                    <Text
                        style={{
                            textTransform: "uppercase",
                            fontFamily: "Poppins-SemiBold",
                            fontSize: theme.fontSize.largeScreen.small
                        }}>{name}
                    </Text>
                    {projectData?.brief}
                </Text>
                <Text weight={"bold"} className={classes.buttonColor} style={{textDecoration: "underline", cursor: "pointer"}}>
                    <a style={{color: "black"}} href={projectData?.url}>View Project</a>
                </Text>
            </Box>
        </Box>
    )
};

const mapStateToProps = (state) => ({
});

const mapDispatcherToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatcherToProps)(HeadingTextButtonWithArrow);
