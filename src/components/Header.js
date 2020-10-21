import {Box, Heading, Text} from "grommet";
import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Header = () => {
    return (
        <Box width={"100%"} direction={"row"} justify={"between"} align={"center"}>
            <Box wrap>
                <Text color={"black"} style={{fontSize: "35px", cursor: "pointer", fontFamily: "Staatliches"}}>INKYESTHETICS</Text>
            </Box>
            <Box wrap>
                <LinkedInIcon style={{color: "black", cursor: "pointer", fontSize: "35px"}}/>
            </Box>
        </Box>
    )
};

export default Header;