import Header from "../tables/Header"
import Footer from "../tables/Footer"

import styled from "styled-components"

function HistoryScreen () {
    return (
        <Container>
            <Header/>

            <Footer />
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #E5E5E5;

    font-family: 'Lexend Deca', sans-serif;
`
export default HistoryScreen