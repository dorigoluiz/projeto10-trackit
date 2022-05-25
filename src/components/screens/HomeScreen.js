import Logo from "/WIN/VsCode/Driven/Projetos/Modulo2/projeto10-trackit/src/assets/img/Logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

function HomeScreen () {


    return (
        <HomeWrapper>
            <img src={Logo} alt="Logo"/>
            <form>
                <input type="text" name="user" placeholder="email" />
                <input type="text" name="password" placeholder="senha" />
                <input type="submit" value="Entrar" />
            </form>
            <Link className="cadastro" to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </HomeWrapper>
    )
}

const HomeWrapper = styled.div`

    margin-top: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        margin-bottom: 25px;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    input {
        width: 303px;
        height: 45px;
        padding-left: 10px;
        margin-bottom: 6px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;

        font-weight: 400;
        font-size: 20px;
        color: #52B6FF;

        outline-color: #52B6FF;
    }

    input::placeholder {
        color: #DBDBDB;
    }

    input[type=submit] {
        margin-bottom: 25px;
        font-size: 21px;
        font-weight: 400;
        font-style: bold;
        color: #FFFFFF;

        background-color: #52B6FF;

        cursor: pointer;
    }

    .cadastro {
        font-size: 14px;
        font-weight: 400;
        color: #52B6FF;

        font-family: 'Lexend Deca', sans-serif;
    }
`














export default HomeScreen