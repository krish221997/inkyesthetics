import {Box, Heading, Text} from "grommet";
import React from "react";
import {useMediaQuery} from "react-responsive";


const sectionData = {
    title: "Devatha Hasta",
    subHeading1: "The Devatha hasthas form 16 of the 3242 shlokas present in the ‘Abhinaya Darpana’. " +
        "The gods and goddesses are Brahma, Shiva, Vishnu, Saraswati, Parvati, Lakshmi, Ganesha, Karthikeya, Manmatha," +
        " Indra, Agni, Varuna, Yama, Nirrti,Vayu, and Kubera.\n" +
        "The text explains to the dancer how to denote each god or goddess through her body. " +
        "This includes the exact mudra (gesture) to be held as well as its position in relation to the body.",
    subHeading2: "Hasta is the Sanskrit word for hand and Deva means God. So simply translated, " +
        "the hand gestures which depict the Gods from the Hindu tradition are known as Deva Hasta. " +
        "Each representation thus becomes unique to one particular God and becomes universal in most" +
        " classical dance forms of India, such as a depiction of man with a flute is always Krishna. " +
        "These hasta give a dramatic representation and sculptural construction of deities.The shloka for deva hastas is as follows:" ,
    subHeading4: "“Athaatra Bramha rudraadi Devatabhinaya kramaat",
    subHeading5: "Moortibheden ye Hastaasteshaan Lakshana muchyate”"
};

const HastaSection = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

    return (
        <Box width={"100%"} align={"center"} justify={"center"}>
            <Heading margin={{bottom: isTabletOrMobileDevice ? "20px" : "24px", horizontal: "0px", top: "0px"}}
                     level={2} style={{
                fontFamily: "Poppins-Light",
                fontSize: isTabletOrMobileDevice ? "20px" : "30px",
                textTransform: "uppercase"
            }}>{sectionData.title}</Heading>
            <Box align={"center"} justify={"center"} width={isTabletOrMobileDevice ? "100%" : "70%"}>
                <Text margin={{bottom: isTabletOrMobileDevice ? "20px" : "24px", horizontal: "0px", top: "0px"}} textAlign={"center"} style={{fontSize: isTabletOrMobileDevice ? "11px" : "16px", fontFamily: "Poppins-Light"}}>
                    {sectionData.subHeading1}
                </Text>
                <Text margin={{bottom: isTabletOrMobileDevice ? "small" : "small", horizontal: "0px", top: "0px"}} textAlign={"center"} style={{fontSize: isTabletOrMobileDevice ? "11px" : "16px", fontFamily: "Poppins-Light"}}>
                    {sectionData.subHeading2}
                </Text>
                <Text textAlign={"center"} style={{fontSize: isTabletOrMobileDevice ? "11px" : "16px", fontFamily: "Poppins-Light"}}>
                    {sectionData.subHeading4}
                </Text>
                <Text textAlign={"center"} style={{fontSize: isTabletOrMobileDevice ? "11px" : "16px", fontFamily: "Poppins-Light"}}>
                    {sectionData.subHeading5}
                </Text>
            </Box>
        </Box>
    )

};

export default HastaSection;