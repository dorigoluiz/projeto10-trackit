import styled from "styled-components";
import { Link } from "react-router-dom";

function Footer () {
    return (
        <Table>
            <Link to="">Hábitos</Link>
            <p>Hoje</p>
            <Link to="">Histórico</Link>
        </Table>
    )
}

const Table = styled.div`
    width: 100vw;
    height: 70px;
    padding: 0 30px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    bottom: 0;
    left: 0;

    background-color: #FFFFFF;

    p {
        width: 90px;
        height: 90px;
        border-radius: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: relative;
        bottom: 20px;

        background-color: #52B6FF;

        font-size: 18px;
        color: #FFFFFF;
    }
`

export default Footer