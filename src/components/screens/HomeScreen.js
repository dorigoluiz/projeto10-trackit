import Logo from "../../assets/img/Logo.svg";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { ThreeDots } from  'react-loader-spinner';
import UserContext from "../../contexts/UserContext";
import TokenContext from "../../contexts/TokenContext";

function Login() {
    const navigate = useNavigate();
    const [body, setBody] = useState({
        email:"",
        password:""
    })
    const [disable, setDisable] = useState(false);
    const { token, setToken } = useContext(TokenContext);
    const { img, setImg } = useContext(UserContext);

    function coletarDados(e) {
        setBody({
            ...body,
            [e.target.name]: e.target.value,
        })
    }

    function SignIn (e) {
        e.preventDefault();
        setDisable(true)

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body);
        
        promise.then(
            res => {setToken(res.data.token)
                    setImg(res.data.image)
                    navigate("/hoje")
                }            
        ).catch(
            err => {alert(err.response.data.message)
                    setDisable(false)}
        )
    }

    return (
        <HomeWrapper disabled={disable}>
            <img src={Logo} alt="Logo"/>
            <form onSubmit={SignIn}>
                <input required disabled={disable} type="text" placeholder="email" name="email" value={body.email} onChange={coletarDados}/>
                <input required disabled={disable} type="password" placeholder="senha" name="password" value={body.password} onChange={coletarDados}/>
                <button type="submit">{disable ? <ThreeDots height="80" width="80" color='white' ariaLabel='loading'/> : "Login"}</button>
            </form>
            <Link className="sign-up" to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </HomeWrapper>
    )

}


function HomeScreen () {

    return (
        <Login />
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

        background-color: ${ props => props.disabled ? "#F2F2F2" : "#FFFFFF"};
        border: 1px solid #D5D5D5;
        border-radius: 5px;

        font-weight: 400;
        font-size: 20px;
        color: #52B6FF;

        outline-color: #52B6FF;

        ::placeholder {
        color: #DBDBDB;
    }
    }

    button {
        width: 303px;
        height: 45px;
        margin-bottom: 25px;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 21px;
        font-weight: 400;
        font-style: bold;
        color: #FFFFFF;

        border: 1px solid #52B6FF;
        border-radius: 5px;

        background-color: #52B6FF;

        cursor: pointer;
    }

    .sign-up {
        font-size: 14px;
        font-weight: 400;
        color: #52B6FF;

        font-family: 'Lexend Deca', sans-serif;
    }
`
export default HomeScreen