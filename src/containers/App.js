import ResetStyles from "../assets/css/ResetStyles";
import GlobalStyles from "../assets/css/GlobalStyles";
import Fonts from "../assets/fonts/Fonts";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "../components/screens/HomeScreen";
import RegisterScreen from "../components/screens/RegisterScreen";
import HabitScreen from "../components/screens/HabitScreen"
import UserContext from "../contexts/UserContext"
import TokenContext from "../contexts/TokenContext"
import { useState } from "react";
import Header from "../components/tables/Header";




    function App () {
        const [img, setImg] = useState(null);
        const [token, setToken] = useState("");

        return (
            <UserContext.Provider value={{img, setImg}}>
            <TokenContext.Provider value={{token, setToken}}>
                <BrowserRouter>
                    <ResetStyles/>
                    <GlobalStyles/>
                    <Fonts/>
                    <Routes>
                        <Route path="/" element={<HomeScreen />}/>
                        <Route path="/cadastro" element={<RegisterScreen />} />
                        <Route path="/habitos" element={<HabitScreen />} />
                        
                    </Routes>
                </BrowserRouter>
            </TokenContext.Provider>
            </UserContext.Provider>
            
        )
    }

    export default App;