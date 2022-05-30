import Logo2 from "../../assets/img/Logo2.svg";
import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

function Header() {
    const {img, setImg} = useContext(UserContext);

    return (
        <Table>
            <img src={Logo2} alt="Logo"/>
            <img src={img} alt="User"/>
        </Table>
    )
}

const Table = styled.div`
    width: 100vw;
    height: 70px;
    padding: 0 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0;
    left: 0;

    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    img[alt="User"] {
        width: 50px;
        height: 50px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 100px;

        background-color: #FFFFFF;
    }
`

export default Header