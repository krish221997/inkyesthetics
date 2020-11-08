import {Box, Image, Text} from "grommet";
import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {useMediaQuery} from "react-responsive";

const Header = ({}) => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    })

    return (
        <Box width={"100%"} direction={"row"} justify={"between"} align={"center"}>
            <Box>
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <Text color={"black"} style={{fontSize:isTabletOrMobileDevice ? "24px": "36px" , cursor: "pointer", fontFamily: "Staatliches"}}>INKYESTHETICS</Text>
                </Link>
            </Box>
            <a href="https://www.linkedin.com/in/tanvi-mehta-inkyesthetics" target={"_blank"} style={{textDecoration: "none"}}>
                <Box wrap>
                <Image src={isTabletOrMobileDevice ? "/images/linkedin-small.svg" : "/images/linkedin.svg"}/>
            </Box>
            </a>
        </Box>
    )
};

const mapStateToProps = (state) => ({
    pathname: state.router.location.pathname
});

const mapDispatcherToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatcherToProps)(Header);