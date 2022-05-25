import ResetStyles from "../assets/css/ResetStyles";
import GlobalStyles from "../assets/css/GlobalStyles";
import Fonts from "../assets/fonts/Fonts";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "../components/screens/HomeScreen";
import SignUpScreen from "../components/screens/SignUpScreen";

    function App () {
        return (
            <BrowserRouter>
                <ResetStyles/>
                <GlobalStyles/>
                <Fonts/>
                <Routes>
                    <Route path="/" element={<HomeScreen />}/>
                    <Route path="/cadastro" element={<SignUpScreen />} />
                </Routes>
            </BrowserRouter>
        )
    }

    export default App;