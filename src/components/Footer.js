import {Box, Text} from "grommet";
import React from "react";
import {useMediaQuery} from "react-responsive";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CopyrightIcon from '@material-ui/icons/Copyright';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import theme from "../styles/theme";

const Footer = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    })

    return (
       <Box width={"100%"} justify={"center"} align={"center"}>
                            <Box direction={"column"} align={"center"} justify={"center"} width={"medium"} wrap={true}
                                 gap={"small"}>
                                <Box direction={"row"} gap={"xsmall"} align={"center"} justify={"center"}>
                                    <Text style={{fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.medium : theme.fontSize.largeScreen.medium, fontFamily: "Poppins-Light"}}>
                                        2020
                                    </Text>
                                    <CopyrightIcon fontSize={"small"}/>
                                    <Text style={{fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.medium : theme.fontSize.largeScreen.medium, fontFamily: "Poppins-Light"}}>
                                        Tanvi Mehta
                                    </Text>
                                </Box>
                                <Box direction={"row"} gap={"small"} margin={{top: "small"}}>
                                    <a style={{textDecoration: "none"}} target={"_blank"}
                                       href={`https://www.instagram.com/inkyesthetics/`}><InstagramIcon
                                        fontSize={isTabletOrMobileDevice ? "small" : "medium"} style={{color: "black"}}/></a>
                                    <a style={{textDecoration: "none"}} target={"_blank"}
                                       href={`mailto:tanvimehta6697@gmail.com`}><MailOutlineIcon
                                        fontSize={isTabletOrMobileDevice ? "small" : "medium"} style={{color: "black"}}/></a>
                                    <a style={{textDecoration: "none"}} target={"_blank"}
                                       href={`https://www.linkedin.com/in/tanvi-mehta-inkyesthetics`}><LinkedInIcon
                                        fontSize={isTabletOrMobileDevice ? "small" : "medium"} style={{color: "black"}}/></a>
                                </Box>
                            </Box>
                        </Box>
    )
};

export default Footer;