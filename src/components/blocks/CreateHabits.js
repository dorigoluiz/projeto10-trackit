import styled from "styled-components"

function CreateHabits({ setClick }) {
    return (
        <Block>
            <form>
                <input required type="text" placeholder="nome do hábito" name="habit"/>
                <DayButtons><p>D</p><p>S</p><p>T</p><p>Q</p><p>Q</p><p>S</p><p>S</p></DayButtons>
                <EndButtons>
                    <button type="reset" onClick={() => setClick(false)}>Cancelar</button>
                    <button type="submit">Salvar</button>
                </EndButtons>
            </form>
        </Block>
    )
}

const Block = styled.div`
    width: 340px;
    height: 180px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #FFFFFF;
    border-radius: 5px;

    form {
        display: flex;
        flex-direction: column;
    }

    input {
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
    }

    button[type="submit"] {
        width: 84px;
        height: 35px;
        margin-left: 20px;

        font-size: 16px;
        font-weight: bold;
        color: #FFFFFF;

        background-color: #52B6FF;
        border: 1px solid #52B6FF;
        border-radius: 4.63636px;
    }

    button[type="reset"] {
        width: 84px;
        height: 35px;

        font-size: 16px;
        font-weight: bold;
        color: #52B6FF;

        background-color: inherit;
        border: none;
    }
`
const DayButtons = styled.div`
    display: flex;

    p {
        width: 30px;
        height: 30px;
        margin-right: 5px;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 18px;
        color: #DBDBDB;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;

        :hover {
            cursor: pointer;
        }

        :active {
            background-color: #CFCFCF;
            color: #FFFFFF;
        }
    }
`

const EndButtons = styled.div`
    display: flex;
    justify-content: end;
`

export default CreateHabits