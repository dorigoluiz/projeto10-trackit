import Header from "../tables/Header"
import Footer from "../tables/Footer"

import styled from "styled-components"
import { useEffect, useState } from "react";

function Days () {
    const [date, setDate] = useState("");

    useEffect(() => {
        const dayjs = require("dayjs");
        const weekday = require("dayjs/plugin/weekday");
        dayjs.extend(weekday);
    
        const dayStr = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    
        const dayIndex = dayjs().weekday();
        const dayOfMonth = dayjs().date();
        const month = (dayjs().month() < 9) ? "0" + (dayjs().month() + 1) : (dayjs().month + 1);
    
        setDate(`${dayStr[dayIndex]}, ${dayOfMonth}/${month}`);
    }, [])

    return (
        <Block>
            <p>{date}</p>
        </Block>
    )
}

function DayScreen () {
    return (
        <Container>
            <Header/>
            <Days />
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 85px;
    padding-left: 20px;
    background-color: #E5E5E5;

    font-family: 'Lexend Deca', sans-serif;
`

const Block = styled.div`
    p {
        font-style: normal;
        font-weight: 400;
        font-size: 23px;

        color: #126BA5;
    }
`

export default DayScreen