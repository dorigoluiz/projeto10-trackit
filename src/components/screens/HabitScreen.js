import styled from "styled-components";

import Header from "../tables/Header";
import Footer from "../tables/Footer";
import HabitsBlock from "../blocks/HabitsBlock"

function HabitScreen () {

    return (
        <Container>
            <Header/>
            <HabitsBlock/>
            <Footer/>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #E5E5E5;

    font-family: 'Lexend Deca', sans-serif;
    
    a {
        text-decoration: none;
        color: #52B6FF;

        font-size: 18px;
    }
`

export default HabitScreen