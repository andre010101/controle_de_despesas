import React from "react";
import ResumeItem from "../ResumeItem";
import * as c from "./styles";

import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";

const Resume = () => {
    return <c.Container>
        <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value="1000"/>
        <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value="1000"/>
        <ResumeItem title="Total" Icon={FaDollarSign} value="1000"/>
         </c.Container>
};

export default Resume;