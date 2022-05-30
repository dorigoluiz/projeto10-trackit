import styled from "styled-components";
import axios from "axios";
import { useContext } from "react";
import TokenContext from "../../contexts/TokenContext";
import CreateHabits from "./CreateHabits";

function Habits () {
    const { token, setToken} = useContext(TokenContext)
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
    promise.then(
        res => {console.log(res);})
    return(
        <Table>
            <CreateHabits />
        </Table>
    )
}

function HabitsBlock () {
    return (
        <Block>
            <HabitWrapper>
                <p>Meus hábitos</p>
                <MoreButton onClick={CreateHabits}>+</MoreButton>
            </HabitWrapper>
            <Habits/>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </Block>
    )
}

const Table = styled.div`
    display: flex;
    
`

const Block = styled.div`
    margin: 0 20px;

    p {
        margin-top: 30px;
        font-size: 18px;
        color: #666666;
    }
`

const HabitWrapper = styled.div`
    padding-top: 75px;
    margin-bottom: 30px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    p {
        font-size: 23px;
        color: #126BA5;
    }
`

const MoreButton = styled.div`
    width: 40px;
    height: 35px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 28px;
    color: #FFFFFF;

    background-color: #52B6FF;
    border-radius: 5px;
`

export default HabitsBlock