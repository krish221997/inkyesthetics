import {useMediaQuery} from "react-responsive";
import LargeScreenList from "../components/ProjectList/LargeScreenList";
import React from "react";
import SmallScreenList from "../components/ProjectList/SmallScreenList";

const List = () => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1020px)'
    });

    return (
        isTabletOrMobileDevice ? <SmallScreenList/> : <LargeScreenList/>
    )

};

export default List;