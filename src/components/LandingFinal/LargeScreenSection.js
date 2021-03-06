import {Box, Heading, Text} from "grommet";
import React from "react";
import ImageSection from "../shared/ImageSection";
import {useMediaQuery} from "react-responsive";
import {makeStyles} from "@material-ui/core/styles";
import TYPES from "../../config/types";
import theme from "../../styles/theme";

const useStyles = makeStyles(() => ({
    text: {
        color: "#FFB600",
        "&:hover": {
            color: "#DA2F69",
            textDecoration: "line-through",
        },
    },
}));

const LargeScreenSection = () => {

    const classes = useStyles();

    const isSmallLaptopDevice = useMediaQuery({
        query: '(max-device-width: 1450px)'
    });

    const isTabletDevice = useMediaQuery({
        query: '(max-device-width: 1145px)'
    });

    const isSmallTabletDevice = useMediaQuery({
        query: '(max-device-width: 1000px)'
    })


    return (
        <div style={{width: "100%", display: "flex"}}>
            <div style={{width: "30%", marginTop: "20%", position: "relative", marginRight: "30px"}}>
                <div style={{margin: "0 auto"}}>
                    <ImageSection height={245} width={507} image={"url(/images/namaste_ls.svg)"}
                                  type={"contain"}/>
                </div>
                <div style={{position: "absolute", bottom: 0}}>
                    <Box>
                        <Text
                            className={classes.text}
                            margin={{top: isSmallTabletDevice ? theme.fontSize.smallScreen.xxlarge : isTabletDevice ? theme.fontSize.largeScreen.xlarge : isSmallLaptopDevice ? theme.fontSize.largeScreen.xxlarge : "56px"}}
                            style={{
                                textTransform: "uppercase",
                                fontSize: isSmallTabletDevice ? theme.fontSize.smallScreen.xxlarge : isTabletDevice ? theme.fontSize.largeScreen.xlarge : isSmallLaptopDevice ? theme.fontSize.largeScreen.xxlarge : "48px",
                                fontFamily: "Staatliches",
                                cursor: "pointer",
                                // textDecorationLine: 'line-through'
                            }}><a className={classes.text} href={`/${TYPES.ROUTES.PROJECT_LIST}`}
                                  style={{textDecoration: "none"}}>Unpacking my work!</a></Text>
                        <Text
                            className={classes.text}
                            margin={{top: isSmallTabletDevice ? theme.fontSize.smallScreen.xxlarge : isTabletDevice ? theme.fontSize.largeScreen.xlarge : isSmallLaptopDevice ? theme.fontSize.largeScreen.xxlarge : "56px"}}
                            style={{
                                textTransform: "uppercase",
                                fontSize: isSmallTabletDevice ? theme.fontSize.smallScreen.xxlarge : isTabletDevice ? theme.fontSize.largeScreen.xlarge : isSmallLaptopDevice ? theme.fontSize.largeScreen.xxlarge : "48px",
                                fontFamily: "Staatliches",
                                cursor: "pointer"
                            }}><a className={classes.text} href={`/${TYPES.ROUTES.BRANDS}`} style={{textDecoration: "none"}}>Issues Published!</a></Text>
                        <Text
                            className={classes.text}
                            margin={{top: isSmallTabletDevice ? theme.fontSize.smallScreen.xxlarge : isTabletDevice ? theme.fontSize.largeScreen.xlarge : isSmallLaptopDevice ? theme.fontSize.largeScreen.xxlarge : "56px"}}
                            style={{
                                textTransform: "uppercase",
                                fontSize: isSmallTabletDevice ? theme.fontSize.smallScreen.xxlarge : isTabletDevice ? theme.fontSize.largeScreen.xlarge : isSmallLaptopDevice ? theme.fontSize.largeScreen.xxlarge : "48px",
                                fontFamily: "Staatliches",
                                cursor: "pointer"
                            }}><a className={classes.text} href={`/${TYPES.ROUTES.ABOUT_ME}`}
                                  style={{textDecoration: "none"}}>A little bit about me!</a></Text>
                        <Text
                            className={classes.text}
                            margin={{top: isSmallTabletDevice ? theme.fontSize.smallScreen.xxlarge : isTabletDevice ? theme.fontSize.largeScreen.xlarge : isSmallLaptopDevice ? theme.fontSize.largeScreen.xxlarge : "56px"}}
                            style={{
                                textTransform: "uppercase",
                                fontSize: isSmallTabletDevice ? theme.fontSize.smallScreen.xxlarge : isTabletDevice ? theme.fontSize.largeScreen.xlarge : isSmallLaptopDevice ? theme.fontSize.largeScreen.xxlarge : "48px",
                                fontFamily: "Staatliches",
                                cursor: "pointer"
                            }}><a className={classes.text} href="https://www.instagram.com/inkyesthetics/"
                                  target={"_blank"} style={{textDecoration: "none"}}>Did it for the gram!</a></Text>
                        {/*<Text*/}
                        {/*    className={classes.text}*/}
                        {/*    margin={{top: isSmallTabletDevice ? theme.fontSize.smallScreen.xxlarge : isTabletDevice ? theme.fontSize.largeScreen.xlarge : isSmallLaptopDevice ? theme.fontSize.largeScreen.xxlarge : "56px"}}*/}
                        {/*    style={{*/}
                        {/*        textTransform: "uppercase",*/}
                        {/*        fontSize: isSmallTabletDevice ? theme.fontSize.smallScreen.xxlarge : isTabletDevice ? theme.fontSize.largeScreen.xlarge : isSmallLaptopDevice ? theme.fontSize.largeScreen.xxlarge : "48px",*/}
                        {/*        fontFamily: "Staatliches",*/}
                        {/*        cursor: "pointer"*/}
                        {/*    }}>Hit me up!</Text>*/}
                    </Box>
                </div>
            </div>
            <div style={{width: "70%"}}>
                <div style={{margin: "0 auto"}}>
                    <ImageSection height={1850} width={1525} image={"url(/images/landing-page-tanvi.png)"}
                                  type={"contain"}/>
                </div>
            </div>
        </div>
    )
};


export default LargeScreenSection;
