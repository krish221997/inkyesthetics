import {Box, Heading, Text} from "grommet";
import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {connect} from "react-redux";
import TYPES from "../config/types";
import {Link} from "react-router-dom";

const Header = ({pathname}) => {
    return (
        <Box width={"100%"} direction={"row"} justify={"between"} align={"center"}>
            <Box>
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <Text color={TYPES.HEADER.WHITE.includes(pathname) ? "white" : "black"} style={{fontSize: "35px", cursor: "pointer", fontFamily: "Staatliches"}}>INKYESTHETICS</Text>
                </Link>
            </Box>
            <Box wrap>
                <LinkedInIcon style={{color: TYPES.HEADER.WHITE.includes(pathname) ? "white" : "black", cursor: "pointer", fontSize: "35px"}}/>
            </Box>
        </Box>
    )
};

const mapStateToProps = (state) => ({
    pathname: state.router.location.pathname
});

const mapDispatcherToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatcherToProps)(Header);