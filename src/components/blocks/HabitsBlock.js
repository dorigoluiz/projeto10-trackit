import styled from "styled-components";
import axios from "axios";
import { useContext, useState } from "react";
import TokenContext from "../../contexts/TokenContext";
import CreateHabits from "./CreateHabits";

function HabitsBlock () {
    const [click, setClick] = useState(false);

    return (
        <Block>
            <HabitWrapper>
                <p>Meus hábitos</p>
                <MoreButton onClick={() => setClick(true)}>+</MoreButton>
            </HabitWrapper>
            {click ? <CreateHabits setClick={setClick}/> : <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}
        </Block>
    )
}

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