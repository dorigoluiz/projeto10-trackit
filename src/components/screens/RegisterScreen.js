import Logo from "../../assets/img/Logo.svg";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { ThreeDots } from  'react-loader-spinner';

function Loading(){
    return (
        <ThreeDots height="80" width="80" color='white' ariaLabel='loading'/>
    )
}

function Register() {
    const navigate = useNavigate();
    const [body, setBody] = useState({
        email:"",
        name:"",
        image:"",
        password:""
    })
    const [disable, setDisable] = useState(false);
    
    function coletarDados(e) {
        setBody({
            ...body,
            [e.target.name]: e.target.value,
        })
    }

    function RegisterDanied () {

    }

    function SignUP(event) {
        event.preventDefault();
        setDisable(true)

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body);
        
        promise.then(
            res => {console.log("Registrado com sucesso!")
                    navigate("/")}            
        ).catch(
            err => {console.log(err.response.data.message)
                    setDisable(false)}
        )
    }

    return (
        <RegisterWrapper disabled={disable}>
            <img src={Logo} alt="Logo"/>
            <form onSubmit={SignUP}>
                <input required disabled={disable} type="text" placeholder="email" name="email" value={body.email} onChange={coletarDados}/>
                <input required disabled={disable} type="text" placeholder="senha" name="password" value={body.password} onChange={coletarDados}/>
                <input required disabled={disable} type="text" placeholder="nome" name="name" value={body.name} onChange={coletarDados}/>
                <input required disabled={disable} type="text" placeholder="foto" name="image" value={body.image} onChange={coletarDados}/>
                <button type="submit">{disable ? Loading() : "Cadastrar"}</button>
            </form>
            <Link className="sign-in" to="/">Já tem uma conta? Faça login!</Link>
        </RegisterWrapper>
    )
}

function RegisterScreen () {

    return (
        <Register />
    )
}

const RegisterWrapper = styled.div`

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
    }

    input::placeholder {
        color: #DBDBDB;
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

    .sign-in {
        font-size: 14px;
        font-weight: 400;
        color: #52B6FF;

        font-family: 'Lexend Deca', sans-serif;
    }
`

export default RegisterScreen;