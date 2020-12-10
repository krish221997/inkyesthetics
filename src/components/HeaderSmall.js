import {Box, Text} from "grommet";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import {Drawer} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import CloseIcon from '@material-ui/icons/Close';
import TYPES from "../config/types";
import theme from "../styles/theme";

const useStyles = () => makeStyles(() => ({
    drawer: {
        width: "100%",
        height: "100%"
    },
    drawerPaper: {
        width: "100%",
        height: "100%"
    },
    text: {
        color: "#FFB600",
        "&:hover": {
            color: "#DA2F69"
        },
    },
}));

const Menu = ({handleDrawerOpen, handleDrawerClose, open, classes}) => {
    return (
        <>
            <MenuIcon onClick={() => handleDrawerOpen()}/>
            <Drawer anchor={"top"} className={classes.drawer} open={open} classes={{
                paper: classes.drawerPaper,
            }}>
                <Box width={"100%"} align={"center"} justify={"center"} pad={"large"}>
                    <Box margin={{left: "auto"}}>
                        <CloseIcon onClick={handleDrawerClose}/>
                    </Box>
                    <Box>
                        <Text
                            className={classes.text}
                            margin={{top: "56px"}}
                            style={{
                                textTransform: "uppercase",
                                fontSize: theme.fontSize.largeScreen.xxlarge,
                                fontFamily: "Staatliches",
                                cursor: "pointer",
                                // textDecorationLine: 'line-through'
                            }}><a className={classes.text} href={`/${TYPES.ROUTES.PROJECT_LIST}`} style={{textDecoration: "none"}}>Unpacking my work!</a></Text>
                        <Text
                            className={classes.text}
                            margin={{top: "56px"}}
                            style={{
                                textTransform: "uppercase",
                                fontSize: theme.fontSize.largeScreen.xxlarge,
                                fontFamily: "Staatliches",
                                cursor: "pointer"
                            }}><a className={classes.text} href={`/${TYPES.ROUTES.ABOUT_ME}`} style={{textDecoration: "none"}}>A little bit about me!</a></Text>
                        <Text
                            className={classes.text}
                            margin={{top: "56px"}}
                            style={{
                                textTransform: "uppercase",
                                fontSize: theme.fontSize.largeScreen.xxlarge,
                                fontFamily: "Staatliches",
                                cursor: "pointer"
                            }}><a className={classes.text} href="https://www.instagram.com/inkyesthetics/" target={"_blank"} style={{textDecoration: "none"}}>Did it for the gram!</a></Text>
                        {/*<Text*/}
                        {/*    className={classes.text}*/}
                        {/*    margin={{top: "56px"}}*/}
                        {/*    style={{*/}
                        {/*        textTransform: "uppercase",*/}
                        {/*        fontSize: theme.fontSize.largeScreen.xxlarge,*/}
                        {/*        fontFamily: "Staatliches",*/}
                        {/*        cursor: "pointer"*/}
                        {/*    }}>Hit me up!</Text>*/}
                    </Box>
                </Box>
            </Drawer>
        </>
    )
};

const HeaderSmall = () => {

    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box direction={"row"} justify={"between"} align={"center"} width={"100%"}>
            <Link to={"/"} style={{textDecoration: "none"}}>
                <Text color={"black"} style={{
                    fontSize: theme.fontSize.smallScreen.xxlarge,
                    cursor: "pointer",
                    textTransform: "uppercase",
                    fontFamily: "Staatliches"
                }}>Inkyesthetics</Text>
            </Link>
            <Menu classes={classes()} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose}
                  open={open}/>
        </Box>
    )

};

export default HeaderSmall;