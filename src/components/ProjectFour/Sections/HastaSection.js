import {Box, Heading, Text} from "grommet";
import React from "react";
import {useMediaQuery} from "react-responsive";
import theme from "../../../styles/theme";

const sectionData = {
    title: "Devatha Hasta",
    subHeading1: "The Devatha hasthas form 16 of the 3242 shlokas present in the ‘Abhinaya Darpana’. The gods and goddesses are Brahma, Shiva, Vishnu, Saraswati, Parvati, Lakshmi, Ganesha, Karthikeya, Manmatha, Indra, Agni, Varuna, Yama, Nirrti,Vayu, and Kubera.\n" +
        "The text explains to the dancer how to denote each god or goddess through their body. This includes the exact mudra (gesture) to be held as well as its position in relation to the body.\n",
    subHeading2: "Hasta is the Sanskrit word for hand and Deva means God. So simply translated, the hand gestures which depict the Gods from the Hindu tradition are known as Deva Hasta. Each representation thus becomes unique to each God and becomes universal in most classical dance forms of India, such as a depiction of man with a flute is always Krishna. These hasta illustrate the dramatic representation and sculptural construction of deities.\n" +
        "The shloka for deva hastas is as follows:\n",
    subHeading4: "“Athaatra Bramha rudraadi Devatabhinaya kramaat",
    subHeading5: "Moortibheden ye Hastaasteshaan Lakshana muchyate”"
};

const HastaSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

    return (
        <Box width={"100%"} align={"center"} justify={"center"}>
            <Heading margin={{bottom: "large", horizontal: "0px", top: "0px"}}
                     level={2} style={{
                fontFamily: "Poppins-Light",
                fontSize: isTabletOrMobileDevice ? "20px" : "30px",
                textTransform: "uppercase"
            }}>{sectionData.title}</Heading>
            <Box align={"center"} justify={"center"} width={isTabletOrMobileDevice ? "100%" : "70%"}>
                <Text margin={{bottom: "large", horizontal: "0px", top: "0px"}}
                      textAlign={"center"}
                      style={{fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall, fontFamily: "Poppins-Light"}}>
                    {sectionData.subHeading1}
                </Text>
                <Text margin={{bottom: isTabletOrMobileDevice ? "small" : "small", horizontal: "0px", top: "0px"}}
                      textAlign={"center"}
                      style={{fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall, fontFamily: "Poppins-Light"}}>
                    {sectionData.subHeading2}
                </Text>
                <Text textAlign={"center"}
                      style={{fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall, fontFamily: "Poppins-Light"}}>
                    {sectionData.subHeading4}
                </Text>
                <Text textAlign={"center"}
                      style={{fontSize: isTabletOrMobileDevice ? theme.fontSize.smallScreen.xsmall : theme.fontSize.largeScreen.xsmall, fontFamily: "Poppins-Light"}}>
                    {sectionData.subHeading5}
                </Text>
            </Box>
        </Box>
    )

};

export default HastaSection;