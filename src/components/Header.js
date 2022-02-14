import {Box, Image, Text} from "grommet";
import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import theme from "../styles/theme"

const Header = ({}) => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    })

    return (
        <Box width={"100%"} direction={"row"} justify={"between"} align={"center"}>
            <Box>
                {/* <Link to={"/"} style={{textDecoration: "none"}}>
                    <Text color={"black"} style={{
                        fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xxlarge : theme.fontSize.largeScreen.xxlarge,
                        cursor: "pointer",
                        textTransform: "uppercase",
                        fontFamily: "Staatliches"
                    }}>Inkyesthetics</Text>
                </Link> */}
                <Link to={"/"} style={{textDecoration: "none"}}>
                <Image src="/images/tmlogo.svg" width="100px" height="100px"/>
                </Link>

            </Box>
            <a href="https://www.linkedin.com/in/tanvi-mehta-inkyesthetics" target={"_blank"}
               style={{textDecoration: "none", color: "black"}}>
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

const mapDispatcherToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatcherToProps)(Header);